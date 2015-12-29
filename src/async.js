import 'isomorphic-fetch'

import { groupMenu, sanitize } from './data'
import { loadData, fetchData } from './redux/actions'
import { columns, headers, fetchURLFile, fetchURLCategory} from './settings'

/* ASYNC */
export const fetchFileList     = ( url ) => fetch( url, headers( 'GET' ) ).then( res => res.json() )
export const fetchCategoryList = ( url ) => fetch( url, headers( 'GET' ) ).then( res => res.json() )
export const fetching          = ( dispatch ) => {

  dispatch( fetchData() )
  return Promise.all( [ fetchFileList( fetchURLFile ), fetchCategoryList( fetchURLCategory ) ] )
    .then( ( [FileList, CategoryList] ) => {
      const files = sanitize( FileList, CategoryList )

      dispatch(
        loadData( columns,
          files,
          files,
          groupMenu( CategoryList, FileList ) )
      )
    } ) //TODO: dispatch error loading data!
}


export const login = ({login, password}) => {
  dispatch( 'LOGIN ')
}

/* DOWNLOAD A FILE */
/*
 let saveData = (function () {
 let a = document.createElement('a')
 document.body.appendChild(a)
 a.style = 'display: none'
 return function (data, fileName) {
 let json = JSON.stringify(data),
 blob = new Blob([json], {type: 'octet/stream'}),
 url = window.URL.createObjectURL(blob)
 a.href = url
 a.download = fileName
 a.click()
 window.URL.revokeObjectURL(url)
 }
 }())


 let data = { x: 42, s: 'hello, world', d: new Date() },
 fileName = 'my-download.json'

 saveData(data, fileName)
 */
