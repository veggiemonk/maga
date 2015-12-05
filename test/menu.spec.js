import { expect } from 'chai'

import 'fetch'
import { fromJS as toImmutable } from 'immutable'
import { groupMenu, sanitize } from '../src/data'
import { fetchFile, fetchCategory, headers, columnHeader } from '../src/settings'
import finalCreateStore from '../src/redux/createStore'
import reducer from '../src/redux/reducers/index'
import * as actions from '../src/redux/actions'

let store = finalCreateStore( reducer )

suite('MENU', function () {
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
    return load().then( done => done() )
  } )

  suite('Filter document according to their reference', () => {
    teardown('reset the view', () => {
      
    })
    test('should return 3 files when filter reference document = 804', () => {
      const state = store.getState()
      expect( state.files.count() ).to.equal( 197 ) // check we have all the files
      const newStore = reducer( state, actions.filterMenuRef( '804' ) )
      expect( newStore.data.count() ).to.equal( 3 ) // check the number of files
    })
  })

})
