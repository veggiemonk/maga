import m from 'mithril'
import { fromJS as toImmutable } from 'immutable'

import Row from './row'

import { invalidate, inc, dec, fpush } from './utils'
import { defaults } from './settings'
import styles from './css/visibleColumn.css!'

let Table = {}

Table.controller = function controller (attrs) {
  let c = {
    data:             m.prop( [] ),
    files:            attrs.files,
    columnHeader:     attrs.columnHeader,
    toggleVisibility: colId => {
      c.operation(
        c.columnHeader(
          c.columnHeader().setIn( [colId, 'visible'],
            !c.columnHeader().getIn( [colId, 'visible'] ) )
        ),
        'Toggle Visibility: ' + colId
      )
    },
    /**** HISTORY ****/
    //TODO: make it generic!!!
    // * to put into another file ?
    actions:          [],
    history:          m.prop( [] ),
    indexPresent:     m.prop( -1 ),
    operation:        (state = [], action) => {
      // eliminate the future
      c.history( c.history().slice( 0, c.indexPresent() + 1 ) )
      c.actions = c.actions.slice( 0, c.indexPresent() + 1 )
      // create a new version by applying an operation to the head
      fpush( c.history, c.indexPresent, state )
      c.actions.push( action )
      //console.log( 'history:', c.history(), 'actions:', c.actions, 'index:', c.indexPresent() )
    },
    hasUndo:          () => c.indexPresent() > 0,
    hasRedo:          () => c.indexPresent() < c.history().length - 1,
    undo:             () => {
      c.hasUndo()
        ? c.columnHeader( c.history()[dec( c.indexPresent )] )
        : undefined
    },
    redo:             () => {
      c.hasRedo()
        ? c.columnHeader( c.history()[inc( c.indexPresent )] )
        : undefined
    },

    //
    // SORTING
    //
    colSort:         m.prop( 'index' ),
    sort:            colId => {
      if ( c.columnHeader().getIn( [colId, 'sortable'] ) ) {
        c.colSort( colId )

        c.updateColSorted( colId )                      // toggle sort
        //model.startPageAt( defaults.startPageAt );    // reset view
        //model.page( defaults.page );                  // reset page
        if ( !c.columnHeader().getIn( [c.colSort(), 'sorted'] ) ) {
          c.data( c.files().sortBy( x => x.get( 'index' ) ) ) // reset sorting
        } else {
          c.data( c.files().sort( c.sorting ) )           // sort and update data
        }
      }
    },
    sorting:         (a, b) => {
      const desc = c.columnHeader().getIn( [c.colSort(), 'order'] )
      const x    = a.get( c.colSort() )
      const y    = b.get( c.colSort() )

      return desc ? ( y < x ? -1 : 1 ) : ( x < y ? -1 : 1 )
    },
    updateColSorted: colId => {
      let action = ''
      let conf   = c.columnHeader()
      let col    = conf.get( colId ).toJS()
      if ( !col.sorted && !col.order ) {
        col.sorted = !col.sorted      ///* toggle sorted */
        action = 'Sorting: ' + colId + ' in ASC order'
      } else if ( col.sorted && !col.order ) {
        col.order = !col.order        ///* toggle order */
        action = 'Sorting: ' + colId + ' in DESC order'
      } else if ( col.sorted && col.order ) {
        col.sorted = !col.sorted      ///* toggle both sorted and order */
        col.order = !col.order
        action    = 'Reset Sorting: ' + colId
      } else {
        /* Should not reach here !! */
        throw new Error( 'ERROR: Inconsistent state in updateColSorted. ColId = ' + colId )
      }
      // reset other columns
      conf.map( x =>
        x.get( 'id' ) !== colId
          ? x = x.withMutations( map => map.set( 'sorted', defaults.col.sorted )
                                           .set( 'order', defaults.col.order ) )
          : x )
      // update config
      c.operation( c.columnHeader( conf.set( colId, toImmutable( col ) ) ), action )
    },
    vm:              {
      /***
       * show the 3 states of a column sortwise
       * @param: id  id of the column
       * @returns: JSX object
       **/
      cssSortToggle: colId => {
        let col = c.columnHeader().get( colId ).toJS()
        if ( col && col.sortable ) {
          return !col.sorted
            ? ( <i class='fa fa-sort right'></i> )
            : ( col.order
              ? ( <i class='fa fa-sort-desc right'></i> )
              : ( <i class='fa fa-sort-asc right'></i>  ) )
        }
      }
    },
    init:            () => {
      c.operation( c.columnHeader(), 'Init state' )
      c.data( c.files() )
    }
  }

  c.init()

  return c
}

Table.view = function view (c) {
  return (
    <div>
      <h2>Table</h2>
      <ul style='display: inline-block;'>
        {
          c.columnHeader()
            .toList()
            .sortBy( x => x.get( 'index' ) )
            .filter( x => x.get( 'toggle' ) )
            .map( x =>
              <li onclick={ () => { c.toggleVisibility( x.get('id') ) } }>
                { m.trust( x.get( 'name' ) ) }
              </li> ).toJS()
        }
      </ul>
      <ul style='display: inline-block;'>
        { c.actions.map( x => <li>{ x.toUpperCase() }</li> ) }
      </ul>
      <hr/>
      <button disabled={ !c.hasUndo() } onclick={c.undo}>UNDO</button>
      <button disabled={ !c.hasRedo() } onclick={c.redo}>REDO</button>
      <table>
        <thead>
        {
          c.columnHeader()
            .toList()
            .sortBy( x => x.get( 'index' ) )
            .filter( x => x.get( 'visible' ) )
            .map( x =>
              <th
                key={ x.get('id') }
                onclick={() => { c.sort(x.get( 'id' )) } }>
                { m.trust( x.get( 'name' ) ) }
                { c.vm.cssSortToggle( x.get( 'id' ) ) }
              </th> ).toJS()
        }
        </thead>
        <tbody>
        {
          c.data().map( file => (
            <Row
              key={ file.get('index') }
              file={ file }
              columnHeader={ c.columnHeader }>
            </Row> ) ).toJS()
        }
        </tbody>
      </table>
    </div>
  )
}

export default Table
