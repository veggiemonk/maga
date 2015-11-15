import  { Map, fromJS as toImmutable } from 'immutable'
import  sortBy from 'lodash/collection/sortBy'
import {i18n, lang} from './i18n.js'

//TODO: Merge all column configuration into one object!!!
/*const columnConfig = [
  [ 'date', {
    index: 4,
    id:    'date',
    name:  'Date',
  } ], [ 'employerNumber', {
    index: 5,
    id:    'employerNumber',
    name:  'Employer',
  } ], [ 'fileId', {
    index:   6,
    id:      'fileId',
    name:    'fileId',
    visible: false,
  } ], [ 'fileName', {
    index: 7,
    id:    'fileName',
    name:  'Name',
  } ], [ 'uploadUserName', {
    index:   8,
    id:      'uploadUserName',
    name:    'User',
    visible: false,
  } ], [ 'label', {
    index: 9,
    id:    'label',
    name:  'Label',
  } ], [ 'referenceDocument', {
    index: 10,
    id:    'referenceDocument',
    name:  'No. Doc',
  } ], [ 'size', {
    index: 11,
    id:    'size',
    name:  'Size',
  } ], [ 'extension', {
    index: 12,
    id:    'extension',
    name:  'Type',
  } ], [ 'path', {
    index:   13,
    id:      'path',
    name:    'Path',
    visible: false,
  } ], [ 'referenceClient', {
    index: 14,
    id:    'referenceClient',
    name:  'Ref. Client',
  } ], [ 'counter', {
    index:   15,
    id:      'counter',
    name:    'Counter',
    visible: false,
  } ], [ 'referenceGroupS', {
    index:   16,
    id:      'referenceGroupS',
    name:    'Ref GroupS',
    visible: false,
  } ], [ 'uploadStamp', {
    index:   17,
    id:      'uploadStamp',
    name:    'upload Time',
    visible: false,
  } ], [ 'uploaderComment', {
    index:    18,
    id:       'uploaderComment',
    name:     'Comments',
    cssClass: [ 'defaultView', 'comment' ]
  } ]
]*/

const permanentColumn = [
  {
    index:   1,
    id:      'checkbox',
    name:    '<input type="checkbox" />',
    visible: true,
    toggle:  false,
  }, {
    index:   2,
    id:      'download',
    name:    '<i class="fa fa-download"></i>',
    visible: true,
    toggle:  false,
  }, {
    index:   20,
    id:      'delete',
    name:    '<i class="fa fa-ban"></i>',
    visible: true,
    toggle:  false,
  }, ]
const unvisibleColumn = [
  {
    index:   4,
    id:      'date',
    name:    'Date',
    visible: true,
    toggle:  true,
  }, {
    index:   5,
    id:      'uploadUserName',
    name:    'User',
    visible: false,
    toggle:  true,
  }, {
    index:   6,
    id:      'fileId',
    name:    'fileId',
    visible: false,
    toggle:  false,
  }, {
    index:   7,
    id:      'fileName',
    name:    'Name',
    visible: false,
    toggle:  true,
  }, {
    index:   8,
    id:      'employerNumber',
    name:    'Employer',
    visible: true,
    toggle:  true,
  }, {
    index:   9,
    id:      'label',
    name:    'Label',
    visible: true,
    toggle:  true,
  }, {
    index:   10,
    id:      'referenceDocument',
    name:    'No. Doc',
    visible: true,
    toggle:  true,
  }, {
    index:   11,
    id:      'size',
    name:    'Size',
    visible: true,
    toggle:  true,
  }, {
    index:   12,
    id:      'extension',
    name:    'Type',
    visible: true,
    toggle:  true,
  }, {
    index:   13,
    id:      'path',
    name:    'Path',
    visible: false,
    toggle:  true,
  }, {
    index:   14,
    id:      'referenceClient',
    name:    'Ref. Client',
    visible: true,
    toggle:  true,
  }, {
    index:   15,
    id:      'counter',
    name:    'Counter',
    visible: false,
    toggle:  true,
  }, {
    index:   16,
    id:      'referenceGroupS',
    name:    'Ref GroupS',
    visible: false,
    toggle:  true,
  }, {
    index:   17,
    id:      'uploadStamp',
    name:    'upload Time',
    visible: false,
    toggle:  true,
  }, {
    index:    18,
    id:       'uploaderComment',
    name:     'Comments',
    visible:  true,
    toggle:  true,
  }, ]

const dc = {
  col:         {
    /*index:      0,*/ // number to appear
    sorted:     false,
    sortable:   true,
    searchable: true,
    visible:    true,
    order:      false,
    name:       'Column',
    dataType:   typeof 'data',
    tdWidth:    '50px',
  },
  index:       'index', //column that contains the index of the table
  rowDisplay:  10,
  page:        1,
  startPageAt: 0,
  searchTerms: '',
}

const col = Map( dc.col )

//concat arrays into immutable object
const _columnHeader = sortBy( permanentColumn.concat( unvisibleColumn ), x => x.index )
//merge with default config
export const columnHeader = toImmutable( _columnHeader.map( x => Object.assign( col.toJS(), x ) ) )


/* Convert array of object to become a map, keys are a prop in the objects.
export const columnHeader = Map( tmp.reduce(
 (acc, x) => {
 acc[x.get( 'id' )] = x
 return acc
 }, {} ) )*/


//export const basicConfig = Map( columnConfig ).sortBy( o => o.index ).map( x => Object.assign( dc.toJS(), x ) )

export const urlServer     = 'http://localhost:8019'
export const fetchURL      = urlServer + '/file/list'
export const fetchFile     = '/test/fileList.json'
export const fetchCategory = '/test/category.json'
export const headers       = method => {
  return {
    credentials: 'same-origin',
    method:      method,
    headers:     {
      Accept:         'application/json',
      'Content-Type': 'application/json',
      Credentials:    'GroupsFTP username=F00000001 password=P@$$w0rd',
    },
  }

}
