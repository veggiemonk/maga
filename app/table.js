import m from 'mithril'
import Row from './row'

import { invalidate, inc, dec, fpush } from './utils'

import styles from './css/visibleColumn.css!'

let Table = {}

Table.controller = function controller( attrs ) {
  let c = {
    // get the value otherwise `files` doesn't get re-evalutated when other values change
    files:            attrs.files,
    columnHeader:     attrs.columnHeader,
    toggleVisibility: colId => {
      c.operation(
        c.columnHeader( c.columnHeader()
          .map( x =>
            x.get( 'id' ) === colId
              ? x.set( 'visible', !x.get( 'visible' ) )
              : x )
        ),
        'Toggle Column Visibility: ' + colId )
    },
    init:             () => {
      c.operation( c.columnHeader(), 'Init state' );
    },
    actions:          [],
    history:          m.prop( [] ),
    indexPresent:     m.prop( -1 ),
    operation:        ( state = [], action ) => {

      // eliminate the future
      c.history( c.history().slice( 0, c.indexPresent() + 1 ) )

      // create a new version by applying an operation to the head
      fpush(c.history, c.indexPresent, state)
      c.actions.push( action )
      // TOFIX mistake by one somewhere !!!! TODO
      console.log( 'history:', c.history(), 'actions:', c.actions, 'index:', c.indexPresent() )
    },
    hasUndo:          () => c.indexPresent() > 0,
    hasRedo:          () => c.indexPresent() < c.history().length - 1,
    undo:             () => {
      c.hasUndo()
        ? c.columnHeader( c.history()[dec( c.indexPresent )])
        : undefined
      console.log( '<<< UNDO: ' + c.indexPresent() );
      //invalidate()
    },
    redo:             () => {
      c.hasRedo()
        ? c.columnHeader( c.history()[inc( c.indexPresent )])
        : undefined
      console.log( '>>> REDO: ' + c.indexPresent() );
      //invalidate()
    },
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
          c.columnHeader()
            .filter( x => x.get( 'toggle' ) )
            .map( x =>
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
          c.columnHeader()
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
              columnHeader={ c.columnHeader }>
            </Row> ) ).toJS()
        }
        </tbody>
      </table>
    </div>
  )
}

export default Table
