/**
 *  ACTION TYPES
 */

/* HYDRATING STORE */
export const LOAD_COLUMN_HEADER = 'LOAD_COLUMN_HEADER'
export const loadColumnHeader   = columnHeader => ( { type: LOAD_COLUMN_HEADER, columnHeader } )

/* VIEW */
export const RESET_VIEW = 'RESET_VIEW'
export const resetView = () => ( { type: RESET_VIEW } )

/* COLUMNS */
export const SORT_COLUMN = 'SORT_COLUMN'
export const sortColumn  = id => ( { type: SORT_COLUMN, id } )

export const TOGGLE_COLUMN_VIEW = 'TOGGLE_COLUMN_VIEW'
export const toggleColumnView   = id => ( { type: TOGGLE_COLUMN_VIEW, id } )

/* CONNECTION */
export const LOGIN  = 'LOGIN'
export const LOGOUT = 'LOGOUT'

/* FILTERS */
export const FILTER_DATE_BEGIN = 'FILTER_DATE_BEGIN'
export const filterDateBegin   = date => ( { type: FILTER_DATE_BEGIN, date } )
export const FILTER_DATE_END   = 'FILTER_DATE_END'
export const filterDateEnd     = date => ( { type: FILTER_DATE_END, date } )
export const FILTER_MENU_REF   = 'FILTER_MENU_REF'
export const filterMenuRef     = ref => ( { type: FILTER_MENU_REF, ref } )
export const FILTER_MENU_CAT   = 'FILTER_MENU_CAT'
export const filterMenuCat     = cat => ( { type: FILTER_MENU_CAT, cat } )
export const FILTER_SEARCH     = 'FILTER_SEARCH'
export const filterSearch      = search => ( { type: FILTER_SEARCH, search } )

/* FILES */
export const DOWNLOAD_SINGLE = 'DOWNLOAD_SINGLE'
export const DOWNLOAD_MULTI  = 'DOWNLOAD_MULTI'
export const UPLOAD          = 'UPLOAD'
export const DELETE_SINGLE   = 'DELETE_SINGLE'
export const DELETE_MULTI    = 'DELETE_MULTI'

/* HELP */
export const SHOW_HELP = 'SHOW_HELP'

/* UI */
export const PAGE_NEXT            = 'PAGE_NEXT'
export const pageNext             = filesTotal => ( { type: PAGE_NEXT, filesTotal } )
export const PAGE_PREV            = 'PAGE_PREV'
export const pagePrev             = () => ( { type: PAGE_PREV } )
export const CHANGE_ROW_DISPLAYED = 'CHANGE_ROW_DISPLAYED'
export const changeRowDisplayed   = num => ( { type: CHANGE_ROW_DISPLAYED, num })

/* ROWS */
export const TOGGLE_SELECT_ALL = 'TOGGLE_SELECT_ALL'
export const toggleSelectAll   = () => ( { type: TOGGLE_SELECT_ALL } )
export const SELECT_ROW        = 'SELECT_ROW'

/* GLOBALS */
export const SET_LANGUAGE = 'SET_LANGUAGE'
export const setLanguage = lang => ( { type: SET_LANGUAGE, lang } )
export const SET_USERNAME = 'SET_USERNAME'
export const setUsername = username => ( { type: SET_USERNAME, username } )
