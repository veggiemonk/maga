/**
 *  ACTION TYPES
 */

/* HYDRATING STORE */
export const LOAD_DATA = 'LOAD_DATA'
export const loadData  = ( columns, files, data, category ) => ( {
  type:       LOAD_DATA,
  columns,
  files,
  data,
  category,
  receivedAt: Date.now(),
})

export const FETCH_DATA = 'FETCH_DATA'
export const fetchData  = () => (
{ type: FETCH_DATA }
)

export const REFRESH_DATA = 'REFRESH_DATA'
export const refreshData = () => (
  { type: REFRESH_DATA }
)

/* VIEW */
export const RESET_VIEW        = 'RESET_VIEW'
export const resetView         = () => ( { type: RESET_VIEW } )
export const SHOW_ALL_DOCUMENT = 'SHOW_ALL_DOCUMENT'
export const showAllDocument   = () => ( { type: SHOW_ALL_DOCUMENT })

/* COLUMNS */
export const SORT_COLUMN = 'SORT_COLUMN'
export const sortColumn  = id => ( { type: SORT_COLUMN, id } )

export const TOGGLE_COLUMN_VIEW = 'TOGGLE_COLUMN_VIEW'
export const toggleColumnView   = id => ( { type: TOGGLE_COLUMN_VIEW, id } )

/* CONNECTION */
//TODO
export const LOGIN         = 'LOGIN'
export const LOGIN_FAILED  = 'LOGIN_FAILED'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGOUT        = 'LOGOUT'

/* FILTERS */
export const FILTER_DATE_BEGIN = 'FILTER_DATE_BEGIN'
export const filterDateBegin   = date => ( { type: FILTER_DATE_BEGIN, date } )
export const FILTER_DATE_END   = 'FILTER_DATE_END'
export const filterDateEnd     = date => ( { type: FILTER_DATE_END, date } ) //TODO: parse Date with MOMENT
export const FILTER_MENU_REF   = 'FILTER_MENU_REF'
export const filterMenuRef     = ref => ( { type: FILTER_MENU_REF, ref: Number.parseInt( ref ) } )
export const FILTER_MENU_CAT   = 'FILTER_MENU_CAT'
export const filterMenuCat     = cat => ( { type: FILTER_MENU_CAT, cat } )
export const FILTER_SEARCH     = 'FILTER_SEARCH'
export const filterSearch      = search => ( { type: FILTER_SEARCH, search } )

/* FILES */
//TODO
export const DOWNLOAD_SINGLE = 'DOWNLOAD_SINGLE'
export const DOWNLOAD_MULTI  = 'DOWNLOAD_MULTI'
export const UPLOAD          = 'UPLOAD'
export const DELETE_SINGLE   = 'DELETE_SINGLE'
export const DELETE_MULTI    = 'DELETE_MULTI'

/* HELP */
//TODO
export const SHOW_HELP = 'SHOW_HELP'

/* UI */
export const PAGE_NEXT            = 'PAGE_NEXT'
export const pageNext             = filesTotal => ( { type: PAGE_NEXT, filesTotal } )
export const PAGE_PREV            = 'PAGE_PREV'
export const pagePrev             = () => ( { type: PAGE_PREV } )
export const PAGE_FIRST           = 'PAGE_FIRST'
export const pageFirst            = () => ( { type: PAGE_FIRST } )
export const PAGE_LAST            = 'PAGE_LAST'
export const pageLast             = () => ( { type: PAGE_LAST } )
export const CHANGE_ROW_DISPLAYED = 'CHANGE_ROW_DISPLAYED'
export const changeRowDisplayed   = num => ( { type: CHANGE_ROW_DISPLAYED, num })
//TODO
export const TOGGLE_MENU_COLUMN_VIEW = 'TOGGLE_MENU_COLUMN_VIEW'
export const toggleMenuColumnView    = () => ( { type: TOGGLE_MENU_COLUMN_VIEW } )

/* ROWS */
export const TOGGLE_SELECT_ALL = 'TOGGLE_SELECT_ALL'
export const toggleSelectAll   = () => ( { type: TOGGLE_SELECT_ALL } )
export const SELECT_ROW        = 'SELECT_ROW'

/* GLOBALS */
//TODO
export const SET_LANGUAGE = 'SET_LANGUAGE'
export const setLanguage  = lang => ( { type: SET_LANGUAGE, lang } )
export const SET_USERNAME = 'SET_USERNAME'
export const setUsername  = username => ( { type: SET_USERNAME, username } )
