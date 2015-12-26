
import _ from 'lodash'
import {i18n, lang} from './i18n.js'

const permanentColumn = [
  {
    index:      1,
    id:         'checkbox',
    name:       '<input type="checkbox" />',
    visible:    true,
    toggle:     false,
    sortable:   false,
    searchable: false,
  }, {
    index:      2,
    id:         'downloadCount',
    name:       '<i class="fa fa-download"></i>',
    visible:    true,
    toggle:     false,
    dataType:   'number',
    searchable: false,
  }, {
    index:      20,
    id:         'delete',
    name:       '<i class="fa fa-ban"></i>',
    visible:    true,
    toggle:     false,
    sortable:   false,
    searchable: false,
  }, ]

const unvisibleColumn = [
  {
    index:    4,
    id:       'date',
    name:     'Date',
    visible:  true,
    toggle:   true,
    dataType: 'date',
  }, {
    index:   5,
    id:      'uploadUserName',
    name:    'User',
    visible: false,
    toggle:  true,
  }, {
    index:    6,
    id:       'fileId',
    name:     'fileId',
    visible:  false,
    toggle:   false,
    dataType: 'number',
  }, {
    index:   7,
    id:      'fileName',
    name:    'Name',
    visible: false,
    toggle:  true,
  }, {
    index:    8,
    id:       'employerNumber',
    name:     'Employer',
    visible:  true,
    toggle:   true,
    dataType: 'number',
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
    index:    17,
    id:       'uploadStamp',
    name:     'upload Time',
    visible:  false,
    toggle:   true,
    dataType: 'date',
  }, {
    index:   18,
    id:      'uploaderComment',
    name:    'Comments',
    visible: true,
    toggle:  true,
  }, {
    index: 19,
    id: 'index',
    name: 'index',
    sortable: true,
    searchable: false,
    visible: false,
    toggle: false,
    dataType: 'number',
  } ]

export const defaults = {
  col:            {
    /*index:      0,*/ // number to appear
    sorted:     false,
    sortable:   true,
    searchable: true,
    visible:    true,
    toggle:     false,
    order:      false, // desc = true
    name:       'Column',
    dataType:   'string',
    tdMinWidth: '60px',
    tdMaxWidth: '300px',
  },
  index:          'index', //column that contains the index of the table
  rowDisplayed:   10,
  page:           1,
  startPageAt:    0,
  dateBegin:      '',
  dateEnd:        '',
  menuFilter:     { cat: undefined, ref: undefined },
  searchKeyword:  '',
  menuColumnView: false,
}

export const initialState = {
  columns: [],
  filters: {
    startPageAt:    defaults.startPageAt,
    page:           defaults.page,
    rowDisplayed:   defaults.rowDisplayed,
    dateBegin:      defaults.dateBegin,
    dateEnd:        defaults.dateEnd,
    menuFilter:     defaults.menuFilter,
    searchKeyword:  defaults.searchKeyword,
    menuColumnView: defaults.menuColumnView
  },
  category:   [],
  files:   [],
  data:    [],
  selectedRow: [],
  language: 'en',
  username: 'username',
  isAuthenticated: false,
  isFetching: false,
  didInvalidate: false,
  lastUpdated: Date.now(),
}


//sort then merge with default config
export const columns = _( [ ...permanentColumn, ...unvisibleColumn ] )
  .sortBy( x => x.index )
  .map( x => Object.assign( {}, defaults.col, x ))
  .value()

//TODO: URL FOR TEST, DEV, QA and PROD???
export const urlServer = 'http://localhost:8019'
export const urlEchoServer = 'http://localhost:3246/echo/json'
export const fetchURL  = urlServer + '/file/list'
//export const fetchURLFile     = '/test/fileListF01.json'
export const fetchURLFile     = 'test/fileList.json'
export const fetchURLCategory = 'test/category.json'
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
