import m from 'mithril'

import styles from './login.css!'
import styleR from '../../css/radio.css!'

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
              <div class={`${styles.img}`} alt="Avatar">
              </div>
            </button>
            <div class={`${styles.profile__form}`}>
              <div class={`${styles.profile__fields}`}>
                <div class={`${styles.field}`}>
                  <input type="text" id="fieldUser" class={`${styles.input}`} required />
                <label for="fieldUser" class={`${styles.label}`}>{i18n.login[language]}</label>
              </div>
              <div class={`${styles.field}`}>
                <input type="password" id="fieldPassword" class={`${styles.input}`} required />
                <label for="fieldPassword" class={`${styles.label}`}>{i18n.password[language]}</label>
              </div>
              <div class={`${styles.grid}`}>
                <div class={`${styles.col_1_3} `}>
                  <input class={`${styleR.input}`} type="radio" id="radio1" name="radio" checked={language.toLowerCase() === 'en'} />
                  <label class={`${styleR.label}`} for="radio1"><span></span>EN</label>
                </div>
                <div class={`${styles.col_1_3}`}>
                  <input class={`${styleR.input}`} type="radio" id="radio2" name="radio" checked={language.toLowerCase() === 'fr'}/>
                  <label class={`${styleR.label}`} for="radio2"><span></span>FR</label>
                </div>
                <div class={`${styles.col_1_3}`}>
                  <input class={`${styleR.input}`} type="radio" id="radio3" name="radio" checked={language.toLowerCase() === 'nl'}/>
                  <label class={`${styleR.label}`} for="radio3"><span></span>NL</label>
                </div>
              </div>
              <div class={`${styles.profile__footer}`}>
                <button class={`${styles.button} ${styles.btn}`}
                        onclick={() => { dispatch(login())}}
                >{i18n.submit[language]}</button>
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
