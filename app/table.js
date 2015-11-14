import m from 'mithril'
import Row from './row'

import { invalidate, inc, dec } from './utils'

import styles from './css/visibleColumn.css!'

let Table = {}

Table.controller = function controller( attrs ) {
  let c = {
    files:            attrs.files,
    columnHeader:     attrs.columnHeader,
    toggleVisibility: colId => {
      c.operation(
        c.columnHeader( c.columnHeader()
          .map( x =>
            x.get( 'id' ) === colId
              ? x.set( 'visible', !x.get( 'visible' ) )
              : x ) ),
        'Toggle Column Visibility: ' + colId )
      //invalidate()
    },
    init:             () => { c.history[ c.historyIndex() ] = c.columnHeader() },
    actions:          [],
    history:          [],
    historyIndex:     m.prop( 0 ),
    operation:        ( state = [], action ) => {

      // eliminate the future
      c.history = c.history.slice( 0, c.historyIndex() + 1 )

      // create a new version by applying an operation to the head
      c.history.push( state )
      c.actions.push( action )
      inc( c.historyIndex ) // TOFIX mistake by one somewhere !!!! TODO
      console.log( 'history:', c.history, 'actions:', c.actions, 'index:', c.historyIndex() )
    },
    hasUndo:          () => c.historyIndex() > 0,
    hasRedo:          () => c.historyIndex() < c.history.length - 1,
    undo:             () => {
      c.hasUndo() ? dec( c.historyIndex ) : 0
      console.log( '<<< UNDO: ' + c.historyIndex() );
      //invalidate()
    },
    redo:             () => {
      c.hasRedo() ? inc( c.historyIndex ) : c.history().length
      console.log( '>>> REDO: ' + c.historyIndex() );
      //invalidate()
    },
    //TODO:
    // c.files() doesn't change so the redraw doesn't change the tbody
    //
    getMapColHeader:  () => (
      c.history[ c.historyIndex() ]
        .filter( x => x.get( 'visible' ) )
        .map( x => x.get( 'id' ) )
        .toMap()
        .flip()
    ),
    //TODO
    sort:             k => {
      alert( 'TODO SORT: ' + k )
    }
  }

  c.init()

//console.log( c.files() )
  return c
}

Table.view = function view( c ) {
  return (
    <div>
      <h2>Table</h2>
      <ul>
        {
          c.columnHeader().map( x =>
            <li onclick={ () => { c.toggleVisibility( x.get('id') ) } }>
              { m.trust( x.get( 'name' ) ) }
            </li> ).toJS()
        }
      </ul>
      <button disabled={ !c.hasUndo() } onclick={c.undo}>UNDO</button>
      <button disabled={ !c.hasRedo() } onclick={c.redo}>REDO</button>
      <table>
        <thead>
        {
          c.history[ c.historyIndex() ]
            .filter( x => x.get( 'visible' ) /*!== undefined*/ )
            .map( x =>
              <th
                key={ x.get('id') }
                onclick={() => { c.sort(x.get( 'id' )) } }>
                { m.trust( x.get( 'name' ) ) }
              </th> ).toJS()
        }
        </thead>
        <tbody>
        {
          c.files().map( file => (
            <Row
              key={ file.get('index') }
              file={ file }
              columnHeader={ c.getMapColHeader() }>
            </Row> ) ).toJS()
        }
        </tbody>
      </table>
    </div>
  )
}

export default Table
