import 'isomorphic-fetch';

import { groupMenu, sanitize } from './data';
import { fetchDataSuccess, fetchData, sendLogin, loginSuccess, loginFailed } from './redux/actions';
import { columns, headers, fetchURLFile, fetchURLCategory, urlServer} from './settings';
import { parseErrorResponse } from './utils';

/* ASYNC */
export const fetchFileList     = (url) => fetch( url, headers( 'GET' ) ).then( res => res.json() );
export const fetchCategoryList = (url) => fetch( url, headers( 'GET' ) ).then( res => res.json() );
export const fetching          = ( dispatch ) => {

  dispatch( fetchData() );
  return Promise.all( [ fetchFileList( fetchURLFile ), fetchCategoryList( fetchURLCategory ) ] )
    .then( ( [FileList, CategoryList] ) => {
      const files = sanitize( FileList, CategoryList );
      dispatch(
        fetchDataSuccess( columns,
          files,
          files,
          groupMenu( CategoryList, FileList ) )
      );
    } ).catch( ( error ) => {
      console.error( error );
      error.response && error.response.status
        ? dispatch( loginFailed( parseErrorResponse( error.response.status ) ) )
        : dispatch( loginFailed( 'Error parsing status response:' + JSON.stringify( error ) ) );
    } );
};

export const dispatchLogin = ( {dispatch, login, password} ) => {
  dispatch( sendLogin( login, password ) );
  return fetch( urlServer, {
    credentials: 'same-origin',
    method:      'POST',
    headers:     {
      Accept:         'application/json',
      'Content-Type': 'application/json',
    },
  } ).then( res => res.json() )
    .then( data => {
      dispatch( loginSuccess( { ...data } ) );
    } ).catch( ( error ) => {
      console.error( error );
      error.response && error.response.status
        ? dispatch( loginFailed( parseErrorResponse( error.response.status ) ) )
        : dispatch( loginFailed( 'Error parsing status response:' + JSON.stringify( error ) ) );
    } );
};

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
