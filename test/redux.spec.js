import { expect } from 'chai'

import 'isomorphic-fetch'
import { fromJS as toImmutable } from 'immutable'
import { groupMenu, sanitize } from '../src/data'
import { fetchFile, fetchCategory, headers, columnHeader } from '../src/settings'
import finalCreateStore from '../src/redux/createStore'
import reducer from '../src/redux/reducers/index'
import * as actions from '../src/redux/actions'
import { defaults } from '../src/settings'

const store = finalCreateStore( reducer )
let state

const TOTAL_FILES           = 197
const TOTAL_VISIBLE_COLUMNS = 11


suite( 'table', function () {

  setup( 'load data', done => {

    const fetchFileList     = () => fetch( fetchFile, headers( 'GET' ) ).then( res => res.json() )
    const fetchCategoryList = () => fetch( fetchCategory, headers( 'GET' ) ).then( res => res.json() )
    const load              = () => {
      return Promise.all( [ fetchFileList(), fetchCategoryList() ] )
        .then( ([FileList, CategoryList]) => {
          const files = toImmutable( sanitize( FileList, CategoryList ) )

          store.dispatch(
            actions.loadData( columnHeader, files, files,
              toImmutable( groupMenu( CategoryList, FileList ) ) )
          )
          return done
        } )
    }
    return load().then( done => {
      state = store.getState()
      return done()
    } )
  } )

  suite( 'UI Filters', () => {
    test( 'should change the number of column dispayed', () => {
      expect( state.columns.filter( x => x.get( 'visible' ) ).count() ).to.equal( TOTAL_VISIBLE_COLUMNS )
      const newState = reducer( state, actions.toggleColumnView( 'path' ) )
      expect( newState.columns.filter( x => x.get( 'visible' ) ).count() ).to.equal( TOTAL_VISIBLE_COLUMNS + 1 )
    } )

    test( 'should change the number of row dispayed', () => {
      expect( state.filters.rowDisplayed ).to.equal( defaults.rowDisplayed )
      const newState = reducer( state, actions.changeRowDisplayed( 50 ) )
      expect( newState.filters.rowDisplayed ).to.equal( 50 )
    } )
  } )

  suite( 'Table filters', () => {

    test( 'should have 3 files left after searching for "fiche" keyword', () => {
      expect( state.files.count() ).to.equal( TOTAL_FILES ) // check we have all the files
      const newStore = reducer( state, actions.filterSearch( 'fiche' ) )
      expect( newStore.data.count() ).to.equal( 3 ) // check the number of files
    } )

    test( 'should have WRITTEN MORE TESTS', () => {
      expect( true ).to.equal( false )
    } )

  } )

  suite( 'Menu filters', () => {

    test( 'should return 3 files when filter reference document = 804', () => {
      expect( state.files.count() ).to.equal( TOTAL_FILES ) // check we have all the files
      const newStore = reducer( state, actions.filterMenuRef( 804 ) )
      expect( newStore.data.count() ).to.equal( 3 ) // check the number of files
    } )

    test( 'should return 48 files when filter category document = 2', () => {
      expect( state.files.count() ).to.equal( TOTAL_FILES ) // check we have all the files
      const newStore = reducer( state, actions.filterMenuCat( [ 112, 737, 803, 804, 806 ] ) )
      expect( newStore.data.count() ).to.equal( 48 ) // check the number of files
    } )

    test( 'should keep the same number of columns visible across filters', () => {
      expect( state.columns.filter( x => x.get( 'visible' ) ).count() ).to.equal( TOTAL_VISIBLE_COLUMNS )
      const newState = reducer( reducer( state,
        actions.toggleColumnView( 'path' ) ),
        actions.filterMenuCat( [ 112, 737, 803, 804, 806 ] ) )
      expect( newState.columns.filter( x => x.get( 'visible' ) ).count() ).to.equal( TOTAL_VISIBLE_COLUMNS + 1 )
    } )

    test( 'should NOT change the number of rowDisplayed when # files > rowDisplayed', () => {
      expect( state.files.count() ).to.equal( TOTAL_FILES ) // check we have all the files
      const newState = reducer( reducer( state,
        actions.changeRowDisplayed( 20 ) ),
        actions.filterMenuCat( [ 112, 737, 803, 804, 806 ] ) )
      expect( newState.data.count() ).to.equal( 48 )
      expect( newState.filters.rowDisplayed ).to.equal( 20 )
    } )

    test( 'should change the number of rowDisplayed when # files < rowDisplayed', () => {
      expect( state.files.count() ).to.equal( TOTAL_FILES ) // check we have all the files
      const newState = reducer( reducer( state,
        actions.changeRowDisplayed( 20 ) ),
        actions.filterMenuRef( 804 ) )
      expect( newState.data.count() ).to.equal( 3 ) // check the number of files
      expect( newState.filters.rowDisplayed ).to.equal( 20 )
    } )

    test( 'should keep the same filters when showing all documents', () => {
      expect( state.files.count() ).to.equal( TOTAL_FILES ) // check we have all the files
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
      expect( newState.data.count() ).to.equal( 195 ) // check the number of files
      expect( newState.filters.rowDisplayed ).to.equal( 20 )
    } )

  } )

} )
