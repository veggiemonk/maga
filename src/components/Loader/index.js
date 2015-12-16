import m from 'mithril'
import styles from './style.css!'
let Loader = {}

Loader.controller = (props, children) => {
  let c = {
    init: () => {
      console.log('Loader controller init')
    }
  }

  c.init()

  return c
}

Loader.view = (c, props, children) => {
  return (
    m('div', {class: styles.Loader}, [
      m('div', [
        m('svg', {viewBox: '25 25 50 50'}, [
          m('circle', {cx: '50', cy: '50', r: '20', fill: 'none', 'stroke-width': '3'})
        ])
      ])
    ])
  )
}


export default Loader