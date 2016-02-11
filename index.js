import m from 'mithril'
import App from 'src/index'

import finalCreateStore from 'src/redux/createStore'
import reducer from 'src/redux/reducers/index'
import Header from './src/components/Header/index'
import Footer from './src/components/Footer/index'
import styles from './src/components/Header/style.css!'

let store = finalCreateStore( reducer )
store.subscribe( m.redraw.bind( m ) )

m.mount( document.getElementById( 'header' ), m.component( Header ) )

m.mount( document.getElementById( 'transfer' ), m.component( App, { store: store } ) )

m.mount( document.getElementById( 'footer' ), m.component( Footer ) )
