import  { Map, fromJS as toImmutable } from 'immutable'
import  sortBy from 'lodash/collection/sortBy'
import {i18n, lang} from './i18n.js'

//TODO: Merge all column configuration into one object!!!
const columnConfig = [
  ['date', {
    index: 4,
    id:    'date',
    name:  'Date',
  }], ['employerNumber', {
    index: 5,
    id:    'employerNumber',
    name:  'Employer',
  }], ['fileId', {
    index:   6,
    id:      'fileId',
    name:    'fileId',
    visible: false,
  }], ['fileName', {
    index: 7,
    id:    'fileName',
    name:  'Name',
  }], ['uploadUserName', {
    index:   8,
    id:      'uploadUserName',
    name:    'User',
    visible: false,
  }], ['label', {
    index: 9,
    id:    'label',
    name:  'Label',
  }], ['referenceDocument', {
    index: 10,
    id:    'referenceDocument',
    name:  'No. Doc',
  }], ['size', {
    index: 11,
    id:    'size',
    name:  'Size',
  }], ['extension', {
    index: 12,
    id:    'extension',
    name:  'Type',
  }], ['path', {
    index:   13,
    id:      'path',
    name:    'Path',
    visible: false,
  }], ['referenceClient', {
    index: 14,
    id:    'referenceClient',
    name:  'Ref. Client',
  }], ['counter', {
    index:   15,
    id:      'counter',
    name:    'Counter',
    visible: false,
  }], ['referenceGroupS', {
    index:   16,
    id:      'referenceGroupS',
    name:    'Ref GroupS',
    visible: false,
  }], ['uploadStamp', {
    index:   17,
    id:      'uploadStamp',
    name:    'upload Time',
    visible: false,
  }], ['uploaderComment', {
    index:    18,
    id:       'uploaderComment',
    name:     'Comments',
    cssClass: ['defaultView', 'comment']
  }]
]

const permanentColumn = [
  {
    index:   1,
    id:      'checkbox',
    name:    '<input type="checkbox" />',
    visible: true,
  }, {
    index:   2,
    id:      'download',
    name:    '<i class="fa fa-download"></i>',
    visible: true,
  }, {
    index:   20,
    id:      'delete',
    name:    '<i class="fa fa-ban"></i>',
    visible: true,
  }, ]
const unvisibleColumn = [
  {
    index:   4,
    id:      'date',
    name:    'Date',
    visible: true,
  }, {
    index:   5,
    id:      'employerNumber',
    name:    'Employer',
    visible: true,
  }, {
    index:   6,
    id:      'fileId',
    name:    'fileId',
    visible: false,
  }, {
    index:   7,
    id:      'fileName',
    name:    'Name',
    visible: false,
  }, {
    index:   8,
    id:      'uploadUserName',
    name:    'User',
    visible: false,
  }, {
    index:   9,
    id:      'label',
    name:    'Label',
    visible: true,
  }, {
    index:   10,
    id:      'referenceDocument',
    name:    'No. Doc',
    visible: true,
  }, {
    index:   11,
    id:      'size',
    name:    'Size',
    visible: true,
  }, {
    index:   12,
    id:      'extension',
    name:    'Type',
    visible: true,
  }, {
    index:   13,
    id:      'path',
    name:    'Path',
    visible: false,
  }, {
    index:   14,
    id:      'referenceClient',
    name:    'Ref. Client',
    visible: true,
  }, {
    index:   15,
    id:      'counter',
    name:    'Counter',
    visible: false,
  }, {
    index:   16,
    id:      'referenceGroupS',
    name:    'Ref GroupS',
    visible: false,
  }, {
    index:   17,
    id:      'uploadStamp',
    name:    'upload Time',
    visible: false,
  }, {
    index:    18,
    id:       'uploaderComment',
    name:     'Comments',
    visible:  true,
    cssClass: ['defaultView', 'comment'],
  }, ]
export const visibleColumn = toImmutable( unvisibleColumn )

export const columnHeader = toImmutable( sortBy( permanentColumn.concat( unvisibleColumn ), x => x.index ) )

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

export const defaults = Map( dc.col )
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
      Accept:       'application/json',
      'Content-Type': 'application/json',
      Credentials:  'GroupsFTP username=F00000001 password=P@$$w0rd',
    },
  }

}
