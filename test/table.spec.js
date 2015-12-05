import { expect } from 'chai'

import 'fetch'
import { fromJS as toImmutable } from 'immutable'
import { groupMenu, sanitize } from '../src/data'
import { fetchFile, fetchCategory, headers, columnHeader } from '../src/settings'
import finalCreateStore from '../src/redux/createStore'
import reducer from '../src/redux/reducers/index'
import * as actions from '../src/redux/actions'

let store = finalCreateStore( reducer )

//TODO: JUST TEST REDUCERS !!!!! easier and less assle!!

suite('table', function () {

  setup('load data', done => {
    //const unsubscribe = store.subscribe(done)
    const fetchFileList =    () => fetch( fetchFile, headers( 'GET' ) ).then( res => res.json() )
    const fetchCategoryList = () => fetch( fetchCategory, headers( 'GET' ) ).then( res => res.json() )
    const load = () => {
      return Promise.all( [fetchFileList(), fetchCategoryList()] )
        .then( ([FileList, CategoryList]) => {
          const files = toImmutable( sanitize( FileList, CategoryList ) )

          store.dispatch(
              actions.loadData( columnHeader, files, files, 
                toImmutable( groupMenu( CategoryList, FileList ) ) )
          )
          return done
      } )  
    }
    return load().then(done => done())
  })

  suite('Filters for files', () => {
    
    test('should have 3 files left after searching for "fiche" keyword', done => {
      const { files } = store.getState()
      expect(files.count()).to.equal(197) // check we have all the files
      store.dispatch(actions.filterSearch('fiche') )
      const { data } = store.getState()
      expect(data.count()).to.equal(3) // check the number of files
      store.dispatch(actions.resetView())
      expect(files.count()).to.equal(197) // check we have all the files

      //todo test for rowDisplayed and 
      done()
    })

    test('should have ', done => {
      expect(true).to.equal(false)
    })

  })
})
