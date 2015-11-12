import {
  fetchFile,
  fetchCategory,
  headers
} from './settings'

//MODEL
export const App = {
  fetchFileList:     () => fetch( fetchFile, headers( 'GET' ) ).then( res => res.json() ),
  fetchCategoryList: () => fetch( fetchCategory, headers( 'GET' ) ).then( res => res.json() )
}
