import { Map } from 'immutable'

//TODO: make it dynamic
export const lang = 'fr';

//TODO: extract in another module
export const i18n = {
  "column": {
    "name": {
      'fileId': {
        'fr': 'ID',
        'en': 'ID',
        'nl': 'ID',
      }
    }
  }
}

const columnConfig = [
  ['index', {
    index:   0,
    id:      'index',
    visible: false,
  }], ['checkbox', {
    name:     '<input type="checkbox" checked disabled aria-disabled="true" name="notification" value="value">',
    content:  '<input type="checkbox" />',
    index:    1,
    id:      'checkbox',
    dataType: false,
    cssClass: ['defaultView']
  }], ['notDownloaded', {
    index:    2,
    id:      'notDownloaded',
    name:     'DL',
    dataType: typeof true,
    cssClass: ['defaultView']
  }], ['downloadCount', {
    name:     '<i class="fa fa-download"></i>',
    index:    3,
    id:      'downloadCount',
    dataType: typeof true,
    cssClass: ['defaultView']
  }], ['date', {
    name:     'date',
    index:    4,
    id:      'date',
    dataType: typeof '',
    cssClass: ['defaultView']
  }], ['fileId', {
    name:     'fileId',
    index:    5,
    id:      'fileId',
    dataType: typeof 0,
    cssClass: ['defaultView']
  }], ['fileName', {
    name:     'filename',
    index:    6,
    id:      'fileName',
    dataType: typeof '',
    cssClass: ['defaultView']
  }], ['uploadUserName', {
    name:     'uploader',
    dataType: typeof '',
    index:    7,
    id:      'uploadUserName',
    cssClass: ['defaultView']
  }], ['label', {
    name:     'Label',
    dataType: typeof '',
    index:    8,
    id:      'label',
    cssClass: ['defaultView']
  }], ['referenceDocument', {
    name:     'RefDoc',
    dataType: typeof '',
    index:    9,
    id:      'referenceDocument',
    cssClass: ['defaultView']
  }], ['size', {
    name:     'Size',
    dataType: typeof '',
    index:    10,
    id:      'size',
    cssClass: ['defaultView']
  }], ['extension', {
    name:     'Type',
    dataType: typeof '',
    index:    11,
    id:      'extension',
    cssClass: ['defaultView']
  }], ['path', {
    name:     'Path',
    dataType: typeof '',
    index:    12,
    id:      'path',
    cssClass: ['defaultView']
  }], ['referenceClient', {
    name:     'RefClient',
    dataType: typeof '',
    index:    13,
    id:      'referenceClient',
    cssClass: ['defaultView']
  }], ['counter', {
    name:     'Counter',
    dataType: typeof '',
    index:    14,
    id:      'counter',
    cssClass: ['defaultView']
  }], ['referenceGroupS', {
    name:     'RefGS',
    dataType: typeof '',
    index:    15,
    id:      'referenceGroupS',
    cssClass: ['defaultView']
  }], ['uploadStamp', {
    name:     'uploadStamp',
    dataType: typeof '',
    index:    16,
    id:      'uploadStamp',
    cssClass: ['defaultView']
  }], ['uploaderComment', {
    name:     'uploaderComment',
    dataType: typeof '',
    index:    17,
    id:      'uploaderComment',
    cssClass: ['defaultView', 'comment']
  }], ['remove', {
    name:     'delete',
    index:    18,
    id:      'remove',
    cssClass: ['defaultView']
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

export const basicConfig = Map( columnConfig ).sortBy(o => o.index).map( x => Object.assign( dc.toJS(), x ) )

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
