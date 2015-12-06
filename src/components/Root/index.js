import m from 'mithril'
import App from '../../index'
import { Provider } from '../../redux/mithril-redux'

import styles from './index.css!'

let Root  = {}
Root.view = (controller, props) => {
  const {store} = props
  return (
    <Provider store={store}>
      {App}
    </Provider>
  )
}

export default Root
