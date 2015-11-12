import { Map } from 'immutable'
import {i18n, lang} from './i18n.js'


const columnConfig = [
  ['date', {
    index:    4,
    id:       'date',
    name:     'Date',
  }], ['employerNumber', {
    index:    5,
    id:       'employerNumber',
    name:     'Employer',
  }], ['fileId', {
    index:    6,
    id:       'fileId',
    name:     'fileId',
    visible:  false,
  }], ['fileName', {
    index:    7,
    id:       'fileName',
    name:     'Name',
  }], ['uploadUserName', {
    index:    8,
    id:       'uploadUserName',
    name:     'User',
    visible:  false,
  }], ['label', {
    index:    9,
    id:       'label',
    name:     'Label',
  }], ['referenceDocument', {
    index:    10,
    id:       'referenceDocument',
    name:     'No. Doc',
  }], ['size', {
    index:    11,
    id:       'size',
    name:     'Size',
  }], ['extension', {
    index:    12,
    id:       'extension',
    name:     'Type',
  }], ['path', {
    index:    13,
    id:       'path',
    name:     'Path',
    visible:  false,
  }], ['referenceClient', {
    index:    14,
    id:       'referenceClient',
    name:     'Ref. Client',
  }], ['counter', {
    index:    15,
    id:       'counter',
    name:     'Counter',
    visible:  false,
  }], ['referenceGroupS', {
    index:    16,
    id:       'referenceGroupS',
    name:     'Ref GroupS',
    visible:  false,
  }], ['uploadStamp', {
    index:    17,
    id:       'uploadStamp',
    name:     'upload Time',
    visible:  false,
  }], ['uploaderComment', {
    index:    18,
    id:       'uploaderComment',
    name:     'Comments',
    cssClass: ['defaultView', 'comment']
  }]
]

export const defaults = {
  col:         {
    index:      0, // number to appear
    sorted:     false,
    sortable:   true,
    searchable: true,
    visible:    true,
    order:      false,
    name:       'Column',
    dataType:   typeof 'data',
    tdWidth:    '50px'
  },
  index:       'index', //column that contains the index of the table
  rowDisplay:  10,
  page:        1,
  startPageAt: 0,
  searchTerms: ''
};

const dc = Map( defaults.col );

export const basicConfig = Map( columnConfig ).sortBy( o => o.index ).map( x => Object.assign( dc.toJS(), x ) )

export const urlServer     = 'http://localhost:8019';
export const fetchURL      = urlServer + '/file/list';
export const fetchFile     = '/test/fileList.json';
export const fetchCategory = '/test/category.json';
export const headers       = method => {
  return {
    credentials: 'same-origin',
    method:      method,
    headers:     {
      'Accept':       'application/json',
      'Content-Type': 'application/json',
      'Credentials':  'GroupsFTP username=F00000001 password=P@$$w0rd'
    }
  }

};
