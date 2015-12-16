import m from 'mithril'
import styles from './style.css!'
let Header = {}

Header.controller = (props, children) => {
  let c = {
    init: () => {
      //console.log(styles);
    }
  }
  c.init()
  return c
}

Header.view = (c, props, children) => {
  return m('ul', [

      // left side
      m('li', {class: styles.HeaderBrand}, [
        m('ul', [
          m('li', {class: styles.HeaderBrandLogo}, [
            m('a', {href: ''}) // back to portal
          ]),
          m('li', {class: `${styles.HeaderBrandUnivers} ${styles.librebaskervilleitalic}`}, [
            'Group S Online',
            m('div', {class: styles.HeaderBrandUniversClientName}, 'PreStaWeb BENELUX SA')
          ])
        ])
      ]),

      // right side
      m('li', {class: styles.HeaderMenu}, [

        m('ul', [

          // my account ( CSS Dropdown menu )
          m('li', {class: `${styles.HeaderMenuAccount} ${styles.Dropdown}`}, [
            m('div', [
              m('span', {class: styles.Username}, 'Username'),
              m('i', {class: `${styles.Hico} ${styles.Hico_user}`})
            ]),
            m('ul', [
              m('li', [
                m('a', {href: '/account.html'}, [
                  m('i', {class: `${styles.Hico} ${styles.Hico_user}`}),
                  m('span', 'Mon compte')
                ])
              ]),
              m('li', [
                m('a', {href: '#contact'}, [
                  m('i', {class: `${styles.Hico} ${styles.Hico_book}`}),
                  m('span', 'Contacts')
                ])
              ])
            ])
          ]),

          // inbox
          m('li', {class: `${styles.HeaderMenuInbox} ${styles.Dropdown}`}, [
            m('div', [
              m('i', {class: `${styles.Hico} ${styles.Hico_bell}`})
            ]),
            m('ul', [
              // looping
              m('li', [
                m('a', {href: '#'}, [
                  m('i', {class: `${styles.Hico} ${styles.Hico_envelope}`}),
                  m('span', 'test')
                ])
              ])
            ])
          ]),

          // news
          m('li', {class: styles.HeaderMenuNews}, [
            // todo: m.component news
            m('i', {class: `${styles.Hico} ${styles.Hico_newspaper}`})
          ]),

          // apps
          m('li', {class: `${styles.HeaderMenuApplication} ${styles.Dropdown}`}, [

            m('div', [
              m('i', {class: `${styles.Hico} ${styles.Hico_apps}`})
            ]),
            m('ul', [
              // looping
              m('li', [
                m('a', {href: '#'}, [
                  m('span', 'test')
                ])
              ])
            ])
          ]),

          // faq
          m('li', {class: styles.HeaderMenuFaq}, [
            m('i', {class: `${styles.Hico} ${styles.Hico_question}`})
          ]),

          // log out
          m('li', {class: styles.HeaderMenuLogout}, [
            m('i', {class: `${styles.Hico} ${styles.Hico_poweroff}`})
          ])
        ])
      ])

  ])
}


export default Header
