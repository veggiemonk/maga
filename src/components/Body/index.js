import m from 'mithril'

// Components
import Filter from './../Filter/index'
import Menu   from './../Menu/index'
import Table  from './../Table/index'
import ColumnVisibility  from './../ColumnVisibility/index'
import Uploader from './../Uploader/index'

import styles from './index.css!'

let Body = {}

Body.view = (c, props) => {
  const { filters, files } = props
  return (
    <div>
      <ColumnVisibility display={filters.menuColumnView} {...props}/>
      <Filter  {...props}/>
      <Uploader {...props}/>
      <Menu  {...props}/>
      <Table display={files.count() > 0} {...props} />
    </div>
  )
}

export default Body
