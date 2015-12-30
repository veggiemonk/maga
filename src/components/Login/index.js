import m from 'mithril'
import { setLanguage, login, loginFailed } from '../../redux/actions'
import { urlEchoServer } from '../../settings'

import styles from './login.css!'
import styleR from '../../css/radio.css!'

let Login = {}

const parseField = ( dispatch ) => {
  const username = String( document.querySelector( '#fieldUser' ).value )
  const password = String( document.querySelector( '#fieldPassword' ).value )
  if ( !username && username === '' ) {
    dispatch( loginFailed( 'ERROR: empty username' ) )
    return
  }
  if ( password === '' ) {
    dispatch( loginFailed( 'ERROR: empty password ' ) )
    return
  }
  return {
    username,
    password,
  }
}
//TODO: make middleware
const submitLogin = ( dispatch ) => {
  const o = parseField( dispatch )
  o ? dispatch( login( o ) ) : alert( 'ERROR' )
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
              <form class={`${styles.profile__fields}`} action={urlEchoServer} method="post">
                <p class={`${styles.field}`}>
                  <input type="text" name="username" id="fieldUser" class={`${styles.input}`} required/>
                  <label for="fieldUser" class={`${styles.label}`}>{i18n.login[ language ]}</label>
                </p>
                <p class={`${styles.field}`}>
                  <input type="password" name="password" id="fieldPassword" class={`${styles.input}`} required/>
                  <label for="fieldPassword" class={`${styles.label}`}>{i18n.password[ language ]}</label>
                </p>
                <div class={`${styles.grid}`}>
                  <div class={`${styles.col_1_3} `}>
                    <input class={`${styleR.input}`} type="radio" id="radio1" name="en"
                           checked={language.toLowerCase() === 'en'}/>
                    <label class={`${styleR.label}`} for="radio1"
                           onclick={() => {dispatch(setLanguage('en'))}}>
                      <span></span>
                      EN
                    </label>
                  </div>
                  <div class={`${styles.col_1_3}`}>
                    <input class={`${styleR.input}`} type="radio" id="radio2" name="fr"
                           checked={language.toLowerCase() === 'fr'}/>
                    <label class={`${styleR.label}`} for="radio2"
                           onclick={() => {dispatch(setLanguage('fr'))}}>
                      <span></span>
                      FR
                    </label>
                  </div>
                  <div class={`${styles.col_1_3}`}>
                    <input class={`${styleR.input}`} type="radio" id="radio3" name="nl"
                           checked={language.toLowerCase() === 'nl'}/>
                    <label class={`${styleR.label}`} for="radio3"
                           onclick={() => {dispatch(setLanguage('nl'))}}>
                      <span></span>
                      NL
                    </label>
                  </div>
                </div>
                <div class={`${styles.profile__footer}`}>
                  <button type="submit"
                          class={`${styles.button} ${styles.btn}`}
                          onclick={() => { submitLogin(dispatch) } }>
                    {i18n.submit[ language ]}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
