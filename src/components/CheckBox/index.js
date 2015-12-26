import m from 'mithril'

import styles from './checkbox.css!'

let CheckBox = {}

CheckBox.view = (c, props, children) => {
  return (
  <div class={styles.squaredFour}>
    <input type="checkbox"
           value={props.checked}
           name="squaredFour"
           checked={props.checked}
           onclick={props.onclick}
    />
    <label for="squaredFour">{props.label}</label>
  </div>
  )
}

export default CheckBox
