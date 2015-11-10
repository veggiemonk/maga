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
    visible: false,
  }], ['checkbox', {
    name:     '<input type="checkbox" disabled aria-disabled="true" name="notification" value="value">',
    content:  '<input type="checkbox" />',
    index:    1,
    dataType: false,
    cssClass: ['defaultView']
  }], ['notDownloaded', {
    index:    2,
    name:     'DL',
    dataType: typeof true,
    cssClass: ['defaultView']
  }], ['downloadCount', {
    name:     '<i class="fa fa-download"></i>',
    index:    3,
    dataType: typeof true,
    cssClass: ['defaultView']
  }], ['date', {
    name:     'date',
    index:    4,
    dataType: typeof '',
    cssClass: ['defaultView']
  }], ['fileId', {
    name:     'fileId',
    dataType: typeof 0,
    index:    5,
    cssClass: ['defaultView']
  }], ['fileName', {
    name:     'filename',
    dataType: typeof '',
    index:    6,
    cssClass: ['defaultView']
  }], ['uploadUserName', {
    name:     'uploader',
    dataType: typeof '',
    index:    7,
    cssClass: ['defaultView']
  }], ['label', {
    name:     'Label',
    dataType: typeof '',
    index:    8,
    cssClass: ['defaultView']
  }], ['referenceDocument', {
    name:     'RefDoc',
    dataType: typeof '',
    index:    9,
    cssClass: ['defaultView']
  }], ['size', {
    name:     'Size',
    dataType: typeof '',
    index:    10,
    cssClass: ['defaultView']
  }], ['extension', {
    name:     'Type',
    dataType: typeof '',
    index:    11,
    cssClass: ['defaultView']
  }], ['path', {
    name:     'Path',
    dataType: typeof '',
    index:    12,
    cssClass: ['defaultView']
  }], ['referenceClient', {
    name:     'RefClient',
    dataType: typeof '',
    index:    13,
    cssClass: ['defaultView']
  }], ['counter', {
    name:     'Counter',
    dataType: typeof '',
    index:    14,
    cssClass: ['defaultView']
  }], ['referenceGroupS', {
    name:     'RefGS',
    dataType: typeof '',
    index:    15,
    cssClass: ['defaultView']
  }], ['uploadStamp', {
    name:     'uploadStamp',
    dataType: typeof '',
    index:    16,
    cssClass: ['defaultView']
  }], ['uploaderComment', {
    name:     'uploaderComment',
    dataType: typeof '',
    index:    17,
    cssClass: ['defaultView', 'comment']
  }], ['remove', {
    name:     'remove',
    index:    18,
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

export const basicConfig = Map( columnConfig ).sortBy(o => o.index).map( x => Object.assign( x, dc.toJS() ) )

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
