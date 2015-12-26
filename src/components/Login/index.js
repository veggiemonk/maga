import m from 'mithril'

import styles from './login.css!'

let Login = {}

Login.view = (c, props) => {
  const { i18n, language, display } = props
  return (
    <div class={`${styles.overlay}`}
         style={display ? 'display: block;' : 'display: none;'}>
      <div class={`${styles.body}`}>
        <div class={`${styles.container}`}>
          <div class={`${styles.profile} ${styles.profile_open}`}>
            <button class={`${styles.profile__avatar} ${styles.profile_open} ${styles.button} `}>
              <img src="https://pbs.twimg.com/profile_images/554631714970955776/uzPxPPtr.jpeg" alt="Avatar" />
            </button>
            <div class={`${styles.profile__form}`}>
              <div class={`${styles.profile__fields}`}>
                <div class={`${styles.field}`}>
                  <input type="text" id="fieldUser" class={`${styles.input}`} />
                <label for="fieldUser" class={`${styles.label}`}>{i18n.login[language]}</label>
              </div>
              <div class={`${styles.field}`}>
                <input type="password" id="fieldPassword" class={`${styles.input}`} />
              <label for="fieldPassword" class={`${styles.label}`}>{i18n.password[language]}</label>
            </div>
            <div class={`${styles.profile__footer}`}>
              <button class={`${styles.button} ${styles.btn}`}>{i18n.submit[language]}</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
  )
}

export default Login
