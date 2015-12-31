import { expect } from 'chai'
import _ from 'lodash'
import 'isomorphic-fetch'

import { groupMenu, sanitize } from '../src/data'
import { fetchURLFile, fetchURLCategory, headers, columns } from '../src/settings'
import finalCreateStore from '../src/redux/createStore'
import reducer from '../src/redux/reducers/index'
import { getSortedColumn, sort } from '../src/redux/reducers/columns'
import * as actions from '../src/redux/actions'
import { defaults } from '../src/settings'
import { getLastPage, getStartPageAt, numberOfFilesDisplayed } from '../src/utils'

const store = finalCreateStore( reducer )
let state

const TOTAL_FILES           = 197
const TOTAL_VISIBLE_COLUMNS = 12


//todo: use mithril query
const extractTableData = state => {
  const { filters } = state
  const idColSorted    = getSortedColumn( state.columns )
  const orderColSorted = _.result( _.find( state.columns, { id: idColSorted } ), 'order' ) ? 'desc' : 'asc'

  return _(state.data)
    .sortBy( sort( state.columns, idColSorted ) )
    .sortByOrder( idColSorted, orderColSorted )
    .slice( filters.startPageAt )
    .take( filters.rowDisplayed )
    .map( file => ( {
      key: file['index'],
      file,
    } ) )
    .value()
}

suite( 'TABLE', function () {

  setup( 'load data', done => {

    const fetchFileList = () => fetch(fetchURLFile, headers('GET')).then(res => res.json())
    const fetchCategoryList = () => fetch(fetchURLCategory, headers('GET')).then(res => res.json())
    const load = () => {
      store.dispatch(actions.fetchData())
      return Promise.all([fetchFileList(), fetchCategoryList()])
        .then(([FileList, CategoryList]) => {
          const files = sanitize(FileList, CategoryList)

          store.dispatch(
            actions.loadData(columns,
              files,
              files,
              groupMenu(CategoryList, FileList))
          )
        })
    }
    return load().then( () => {
      state = store.getState()
      return done()
    } )
  })


  suite( 'UI Filters', () => {
    test( 'should change the number of column displayed', () => {
      expect( _(state.columns).filter( x => x[ 'visible' ]).value().length ).to.equal( TOTAL_VISIBLE_COLUMNS )
      const newState = reducer( state, actions.toggleColumnView( 'path' ) )
      expect( _(newState.columns).filter( x => x[ 'visible' ]).value().length ).to.equal( TOTAL_VISIBLE_COLUMNS + 1 )
    } )

    test( 'should change the number of row displayed', () => {
      expect( state.filters.rowDisplayed ).to.equal( defaults.rowDisplayed )
      const newState = reducer( state, actions.changeRowDisplayed( 50 ) )
      expect( newState.filters.rowDisplayed ).to.equal( 50 )
    } )
  } )

  suite( 'Table filters', () => {

    test( 'should have 3 files left after searching for "fiche" keyword', () => {
      expect( state.files.length ).to.equal( TOTAL_FILES ) // check we have all the files
      const newState = reducer( state, actions.filterSearch( 'fiche' ) )
      expect( newState.data.length ).to.equal( 3 ) // check the number of files
    } )

    test( 'should be sorted', () => {
      expect( _.result( _.find( state.columns, {id: 'path'} ), 'sorted' ) ).to.equal(false)
      const newState = reducer( state, actions.sortColumn('path'))
      expect( _.result( _.find( newState.columns, {id: 'path'} ), 'sorted' ) ).to.equal(true)
    } )

    test( 'should not be sorted', () => {
      expect( _.result( _.find( state.columns, {id: 'path'} ), 'sorted' ) ).to.equal(false)
      const newState = reducer( reducer( reducer( state,
        actions.sortColumn('path')),
        actions.sortColumn('path')),
        actions.sortColumn('path'))
      expect( _.result( _.find( newState.columns, {id: 'path'} ), 'sorted' ) ).to.equal(false)
    } )

    test( 'should be sorted by date', () => {
      const data = extractTableData(state)
      expect( data[0].key ).to.equal( 1 )
      expect( _.result( _.find( state.columns, {id: 'date'} ), 'sorted' ) ).to.equal(false)
      const newState = reducer( state, actions.sortColumn('date'))
      expect( _.result( _.find( newState.columns, {id: 'date'} ), 'sorted' ) ).to.equal(true)
      const newData = extractTableData(newState)
      expect( newData[0].key ).to.equal( 165 )
    } )

    test( 'should go to next page', () => {
      expect( state.filters.startPageAt ).to.equal( defaults.startPageAt ) //0
      expect( state.filters.page ).to.equal( defaults.page ) //1
      expect( state.filters.rowDisplayed ).to.equal( defaults.rowDisplayed ) //10
      const data = extractTableData(state)
      expect( data[0].key ).to.equal( 1 )
      const newState = reducer( state, actions.pageNext(state.files.length))
      expect( newState.filters.startPageAt ).to.equal( defaults.rowDisplayed ) //10
      expect( newState.filters.page ).to.equal( defaults.page + 1 ) //2
      expect( newState.filters.rowDisplayed ).to.equal( defaults.rowDisplayed  )
      const newData = extractTableData(newState)
      expect( newData[0].key ).to.equal( 11 )
    } )

    test( 'should not go to next page because we are on the last page', () => {
      //TODO: move basic check to beforeAll()
      //check basic data
      expect( state.filters.startPageAt ).to.equal( defaults.startPageAt ) //0
      expect( state.filters.page ).to.equal( defaults.page ) //1
      expect( state.filters.rowDisplayed ).to.equal( defaults.rowDisplayed ) //10
      const data = extractTableData(state)
      expect( data[0].key ).to.equal( 1 )
      //go to last page
      const newState = reducer( state, actions.pageLast())
      //check it is on the last page
      expect( newState.filters.startPageAt ).to.equal( getStartPageAt(newState.data.length, newState.filters.rowDisplayed ) )
      expect( newState.filters.page ).to.equal( getLastPage(newState.data.length, newState.filters.rowDisplayed ) )
      expect( newState.filters.rowDisplayed ).to.equal( defaults.rowDisplayed  ) //10
      //try to go to next page
      const newState1 = reducer( newState, actions.pageNext(state.files.length))
      expect( newState1.filters.startPageAt ).to.equal( getStartPageAt(newState1.data.length, newState1.filters.rowDisplayed ) )
      expect( newState1.filters.page ).to.equal( getLastPage(newState1.data.length, newState1.filters.rowDisplayed ) )
      expect( newState1.filters.rowDisplayed ).to.equal( defaults.rowDisplayed  ) //10
      const newData = extractTableData(newState1)
      expect( newData[0].key ).to.equal( newState1.filters.startPageAt + 1 )
    } )

    test( 'should  go to previous page', () => {
      //TODO: move basic check to beforeAll()
      //check basic data
      expect( state.filters.startPageAt ).to.equal( defaults.startPageAt ) //0
      expect( state.filters.page ).to.equal( defaults.page ) //1
      expect( state.filters.rowDisplayed ).to.equal( defaults.rowDisplayed ) //10
      const data = extractTableData(state)
      expect( data[0].key ).to.equal( 1 )
      //go to next page
      const newState = reducer( state, actions.pageNext(state.files.length))
      expect( newState.filters.startPageAt ).to.equal( defaults.rowDisplayed ) //10
      expect( newState.filters.page ).to.equal( defaults.page + 1 ) //2
      expect( newState.filters.rowDisplayed ).to.equal( defaults.rowDisplayed  )
      const newData = extractTableData(newState)
      expect( newData[0].key ).to.equal( 11 )
      //go to previous page
      const newState1 = reducer( state, actions.pagePrev())
      expect( newState1.filters.startPageAt ).to.equal( defaults.startPageAt ) //0
      expect( newState1.filters.page ).to.equal( defaults.page ) //1
      expect( newState1.filters.rowDisplayed ).to.equal( defaults.rowDisplayed ) //10
      const newData1 = extractTableData(newState1)
      expect( newData1[0].key ).to.equal( 1 )
    } )

    test( 'should not go to previous page because we are on the first page', () => {
      //TODO: move basic check to beforeAll()
      //check basic data
      expect( state.filters.startPageAt ).to.equal( defaults.startPageAt ) //0
      expect( state.filters.page ).to.equal( defaults.page ) //1
      expect( state.filters.rowDisplayed ).to.equal( defaults.rowDisplayed ) //10
      const data = extractTableData(state)
      expect( data[0].key ).to.equal( 1 )
      //go to first page
      const newState = reducer( state, actions.pageFirst())
      expect( newState.filters.startPageAt ).to.equal( defaults.startPageAt ) //0
      expect( newState.filters.page ).to.equal( defaults.page ) //1
      expect( newState.filters.rowDisplayed ).to.equal( defaults.rowDisplayed ) //10
      const newData = extractTableData(newState)
      expect( newData[0].key ).to.equal( 1 )
      //try to go to previous page
      const newState1 = reducer( state, actions.pagePrev())
      expect( newState1.filters.startPageAt ).to.equal( defaults.startPageAt ) //0
      expect( newState1.filters.page ).to.equal( defaults.page ) //1
      expect( newState1.filters.rowDisplayed ).to.equal( defaults.rowDisplayed ) //10
      const newData1 = extractTableData(newState1)
      expect( newData1[0].key ).to.equal( 1 )
    } )

    test( 'should show only 7 files on the last page', () => {
      //TODO: move basic check to beforeAll()
      //check basic data
      expect( state.filters.startPageAt ).to.equal( defaults.startPageAt ) //0
      expect( state.filters.page ).to.equal( defaults.page ) //1
      expect( state.filters.rowDisplayed ).to.equal( defaults.rowDisplayed ) //10
      expect( numberOfFilesDisplayed(
        state.files.length,
        state.filters.rowDisplayed,
        state.filters.startPageAt ) ).to.equal( defaults.rowDisplayed ) //10
      const data = extractTableData(state)
      expect( data[0].key ).to.equal( 1 )
      //go to last page
      const newState = reducer( state, actions.pageLast())
      //check it is on the last page
      expect( newState.filters.startPageAt ).to.equal( getStartPageAt(newState.data.length, newState.filters.rowDisplayed ) )
      expect( newState.filters.page ).to.equal( getLastPage(newState.data.length, newState.filters.rowDisplayed ) )
      expect( newState.filters.rowDisplayed ).to.equal( defaults.rowDisplayed  ) //10
      expect( numberOfFilesDisplayed(
        newState.files.length,
        newState.filters.rowDisplayed,
        newState.filters.startPageAt ) ).to.equal( 7 )
    } )

    test( 'should have WRITTEN MORE TESTS', () => {
      expect( true ).to.equal( false )
    } )

    test( 'should filter files created after 20/09/2015', () => {
      //filterDateBegin('20/9')
      //check filters .datebegin
      //reduce
      //check number of files
      expect( true ).to.equal( false )
    } )

    test( 'should filter files created after 20/09/2015 and before 22/09/2015', () => {
      //filterDateBegin('20/9')
      //filterDateEnd('22/9')
      //check filters dateBegin dateEnd
      //reduce
      //check number of files === 5
      expect( true ).to.equal( false )
    } )

    test( 'should filter files created before 22/09/2015', () => {
      //filterDateBegin('22/9')
      //check filters .datebegin
      //reduce
      //check number of files
      expect( true ).to.equal( false )
    } )

    test( 'should select a row', () => {
      //
      expect( true ).to.equal( false )
    } )
    test( 'should deselect a row', () => {
      expect( true ).to.equal( false )
    } )
  } )

  suite( 'Menu filters', () => {

    test( 'should return 3 files when filter reference document = 804', () => {
      expect( state.files.length ).to.equal( TOTAL_FILES ) // check we have all the files
      const newState = reducer( state, actions.filterMenuRef( 804 ) )
      expect( newState.data.length ).to.equal( 3 ) // check the number of files
    } )

    test( 'should return 48 files when filter category document = 2', () => {
      expect( state.files.length ).to.equal( TOTAL_FILES ) // check we have all the files
      const newState = reducer( state, actions.filterMenuCat( [ 112, 737, 803, 804, 806 ] ) )
      expect( newState.data.length ).to.equal( 48 ) // check the number of files
    } )

    test( 'should keep the same number of columns visible across filters', () => {
      expect( _(state.columns).filter( x => x[ 'visible' ]).value().length ).to.equal( TOTAL_VISIBLE_COLUMNS )
      const newState = reducer( reducer( state,
        actions.toggleColumnView( 'path' ) ),
        actions.filterMenuCat( [ 112, 737, 803, 804, 806 ] ) )
      expect( _(newState.columns).filter( x => x[ 'visible' ]).value().length ).to.equal( TOTAL_VISIBLE_COLUMNS + 1 )
    } )

    test( 'should NOT change the number of rowDisplayed when # files > rowDisplayed', () => {
      expect( state.files.length ).to.equal( TOTAL_FILES ) // check we have all the files
      const newState = reducer( reducer( state,
        actions.changeRowDisplayed( 20 ) ),
        actions.filterMenuCat( [ 112, 737, 803, 804, 806 ] ) )
      expect( newState.data.length ).to.equal( 48 )
      expect( newState.filters.rowDisplayed ).to.equal( 20 )
    } )

    test( 'should change the number of rowDisplayed when # files < rowDisplayed', () => {
      expect( state.files.length ).to.equal( TOTAL_FILES ) // check we have all the files
      const newState = reducer( reducer( state,
        actions.changeRowDisplayed( 20 ) ),
        actions.filterMenuRef( 804 ) )
      expect( newState.data.length ).to.equal( 3 ) // check the number of files
      expect( newState.filters.rowDisplayed ).to.equal( 20 )
    } )

    test( 'should keep the same filters when showing all documents', () => {
      expect( state.files.length ).to.equal( TOTAL_FILES ) // check we have all the files
      const newState = /*reducer( reducer( reducer(*/ reducer( reducer( reducer( reducer( state,
        /*actions.toggleMenuColumnView() ),
        actions.toggleColumnView( 'uploadUserName' ) ),
        actions.toggleMenuColumnView() ),*/
        actions.filterSearch( 'group' ) ),
        actions.filterMenuRef( 804 ) ),
        actions.changeRowDisplayed( 20 ) ),
        actions.showAllDocument()
      )
      expect( newState.filters.rowDisplayed ).to.equal( 20 )
      expect( newState.filters.searchKeyword ).to.equal( 'group' )
      expect( newState.data.length ).to.equal( 195 ) // check the number of files
      expect( newState.filters.rowDisplayed ).to.equal( 20 )
    } )

  } )

} )
