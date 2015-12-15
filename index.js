import m from 'mithril'
import App from 'src/index'
//import Root from 'src/components/Root/index'
import finalCreateStore from 'src/redux/createStore'
import reducer from 'src/redux/reducers/index'

let store = finalCreateStore( reducer )
store.subscribe( m.redraw )
//store.subscribe( () => {console.log('STATE SUBSCRIBED!!!!!!')})

m.mount( document.getElementById( 'app' ),
  m.component( App, { store: store } ) )
// m.mount(document.getElementById( 'app' ), (<Root store={store} />));
