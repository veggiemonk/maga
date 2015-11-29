import { expect } from 'chai'

import 'fetch'
import { fromJS as toImmutable } from 'immutable'
import { groupMenu, sanitize } from '../src/data'
import { fetchFile, fetchCategory, headers, columnHeader } from '../src/settings'
import finalCreateStore from '../src/redux/createStore'
import reducer from '../src/redux/reducers/index'
import { loadData } from '../src/redux/actions'

let store = finalCreateStore( reducer )

before('load data', () => {
	const fetchFileList =    () => fetch( fetchFile, headers( 'GET' ) ).then( res => res.json() )
    const fetchCategoryList = () => fetch( fetchCategory, headers( 'GET' ) ).then( res => res.json() )
    const load = () => {
      Promise.all( [fetchFileList(), fetchCategoryList()] )
        .then( ([FileList, CategoryList]) => {
          const files = toImmutable( sanitize( FileList, CategoryList ) )

          store.dispatch(
              loadData( columnHeader, files, files, 
              	toImmutable( groupMenu( CategoryList, FileList ) ) )
          )
        } )
    }
    load()
})

describe('This is a describe', function () {
  it('sample test that should pass', function () {
    expect(true).to.equal(true)
  })
  it('sample test that should fail', function () {
    expect(true).to.equal(false)
  })
})
