import m from 'mithril'

import styles from './buttons.css!'

let Button = {}

Button.view = (c, props, children) => {
  const { className } = props
  return(
    <button
      class={`${styles.button} ${styles.button_primary} ${className}`}
      onclick={props.onclick}>
      {children}
    </button>
  )
}

export default Button
