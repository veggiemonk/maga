import m from 'mithril'
import { setLanguage, login, loginFailed } from '../../redux/actions'
import {defaults} from '../../settings'

import styles from './login.css!'
import styleR from '../../css/radio.css!'

let Login = {}

const parseField = (dispatch) => {
  const username = String(document.querySelector('#fieldUser').value)
  const password = String(document.querySelector('#fieldPassword').value)
  if (username === '' || username === defaults.username ) {
    dispatch(loginFailed('ERROR: empty username or username === ' +  defaults.username ))
    return
  }
  if (password === '') {
    dispatch(loginFailed('ERROR: empty password '))
    return
  }
  return {
    username,
    password,
  }
}
const submitLogin = (dispatch) => {
  const o = parseField(dispatch)
  o ?  dispatch( login( o ) ) : alert('ERROR')
}

Login.view = ( c, props ) => {
  const { i18n, language, display, dispatch } = props
  return (
    <div class={`${styles.overlay}`}
         style={display ? 'display: block;' : 'display: none;'}>
      <div class={`${styles.body}`}>
        <div class={`${styles.container}`}>
          <div class={`${styles.profile} ${styles.profile_open}`}>
            <button class={`${styles.profile__avatar} ${styles.profile_open} ${styles.button} `}>
              <img class={`${styles.img}`} src="../../../src/css/img/groupsLOGO.jpg" alt="Avatar">
              </img>
            </button>
            <div class={`${styles.profile__form}`}>
              <div class={`${styles.profile__fields}`}>
                <div class={`${styles.field}`}>
                  <input type="text" id="fieldUser" class={`${styles.input}`} required/>
                  <label for="fieldUser" class={`${styles.label}`}>{i18n.login[ language ]}</label>
                </div>
                <div class={`${styles.field}`}>
                  <input type="password" id="fieldPassword" class={`${styles.input}`} required/>
                  <label for="fieldPassword" class={`${styles.label}`}>{i18n.password[ language ]}</label>
                </div>
                <div class={`${styles.grid}`}>
                  <div class={`${styles.col_1_3} `}>
                    <input class={`${styleR.input}`} type="radio" id="radio1" name="radio"
                           checked={language.toLowerCase() === 'en'}/>
                    <label class={`${styleR.label}`} for="radio1"
                           onclick={() => {dispatch(setLanguage('en'))}}>
                      <span></span>
                      EN
                    </label>
                  </div>
                  <div class={`${styles.col_1_3}`}>
                    <input class={`${styleR.input}`} type="radio" id="radio2" name="radio"
                           checked={language.toLowerCase() === 'fr'}/>
                    <label class={`${styleR.label}`} for="radio2"
                           onclick={() => {dispatch(setLanguage('fr'))}}>
                      <span></span>
                      FR
                    </label>
                  </div>
                  <div class={`${styles.col_1_3}`}>
                    <input class={`${styleR.input}`} type="radio" id="radio3" name="radio"
                           checked={language.toLowerCase() === 'nl'}/>
                    <label class={`${styleR.label}`} for="radio3"
                           onclick={() => {dispatch(setLanguage('nl'))}}>
                      <span></span>
                      NL
                    </label>
                  </div>
                </div>
                <div class={`${styles.profile__footer}`}>
                  <button class={`${styles.button} ${styles.btn}`}
                          onclick={() => { submitLogin(dispatch) } }>
                    {i18n.submit[ language ]}
                  </button>
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
