import { expect } from 'chai'
import _ from 'lodash'
import 'isomorphic-fetch'

import { groupMenu, sanitize } from '../src/data'
import { fetchURLFile, fetchURLCategory, headers, columns } from '../src/settings'
import finalCreateStore from '../src/redux/createStore'
import reducer from '../src/redux/reducers/index'
import { getSortedColumn } from '../src/redux/reducers/columns'
import * as actions from '../src/redux/actions'
import { defaults } from '../src/settings'

const store = finalCreateStore( reducer )
let state

const TOTAL_FILES           = 197
const TOTAL_VISIBLE_COLUMNS = 11


const extractTableData = state => {
  const idColSorted = getSortedColumn( state.columns )
  const orderColSorted = _.result(_.find(state.columns, {id: idColSorted}), 'order') ? 'desc' : 'asc'
  return _(state.data)
    .sortByOrder( idColSorted, orderColSorted)
    .slice( state.filters.startPageAt )
    .take( state.filters.rowDisplayed )
    .map( file => (
    {
      key: file['index'],
      file,
    } ) )
    .value()
}

suite( 'table', function () {

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
      //expect( state.files[0].index ).to.equal( 1 )
      expect( _.result( _.find( state.columns, {id: 'date'} ), 'sorted' ) ).to.equal(false)
      const newState = reducer( state, actions.sortColumn('date'))
      expect( _.result( _.find( newState.columns, {id: 'date'} ), 'sorted' ) ).to.equal(true)
      const newData = extractTableData(newState)
      expect( newData[0].key ).to.equal( 165 )
    } )

    test( 'should have WRITTEN MORE TESTS', () => {
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
      const newState = reducer( reducer( reducer( reducer( reducer( reducer( reducer( state,
        actions.toggleMenuColumnView() ),
        actions.toggleColumnView( 'uploadUserName' ) ),
        actions.toggleMenuColumnView() ),
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
