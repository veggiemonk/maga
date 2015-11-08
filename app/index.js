import m from 'mithril'
import 'fetch';
import Header from './header.js'
import Menu from './menu.js'
import Table from './table.js'
import {
  columnConfig,
  fetchFile,
  fetchCategory,
  headers
} from './settings.js'
import { inc, dec, stackLoader, loaderDisplay } from './utils.js'


// test if creds are there and if they are OK
// forward to login if it is NOT OK

const sanitize = dataArray => {
  return dataArray.map( obj => {
    Object.keys( obj ).map( key => {
      // if (key == 'date') tmp[key] = moment(obj[key]);
      if ( key == 'fileId' ) obj[ key ] = Number( obj[ key ] );
    } );
    return obj;
  } )
};




// fetch data
const fetchFileList = () => fetch( fetchFile, headers( 'GET' ) ).then( res => res.json() )

const fetchCategoryList = () => fetch( fetchCategory, headers( 'GET' ) ).then( res => res.json() )



//TODO: merge user config with default config
//TODO: use immutable.js for configuration --> undo/redo

export default {
  controller: () => {
    var c ={
      files: m.prop( [] ),
      category: m.prop( [] ),
      init: () => {
        inc( stackLoader )
        Promise.all( [ fetchFileList(), fetchCategoryList() ] )
          .then( ( [FileList, CategoryList] ) => {
            m.startComputation();
            //console.log( [ FileList, CategoryList ] );
            c.files( sanitize( FileList ) )
            c.category( CategoryList )
          } ).then( () => {
          console.log( new Date().getMilliseconds() )
          dec( stackLoader )
          m.endComputation();
          //m.redraw();
          //m.render(document, Table)
        });
      }
    }
    c.init();

    return c;
  },
  view: ctrl => {
    return (
      <div>
        <div class="loading" style={ loaderDisplay() }>
          <div class="pulse-loader"></div>
        </div>
        <Header />
        <Menu category={ctrl.category}/>
        <h1>Hello Maga: App</h1>
        <p>
          <a href="/login" config={ m.route }>LOGIN</a>
        </p>
        <Table
          columnConfig={columnConfig}
          files={ctrl.files}
        >
        </Table>
      </div>
    )
  }
}