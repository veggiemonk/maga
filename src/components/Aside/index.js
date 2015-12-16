import m from 'mithril'

import Menu from '../Menu/index'
import Uploader from '../Uploader/index'


let Aside = {}

Aside.controller = (props) => {}

Aside.view = (c, props) => {
  return (
    <aside class="Aside">
      <Uploader {...props}/>
      <Menu {...props}/>
    </aside>
  )
}

export default Aside
