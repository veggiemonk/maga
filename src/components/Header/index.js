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
  return (
    <ul>
      <li class={styles.HeaderBrand}>
        <ul>
          <li class={styles.HeaderBrandLogo}>
            <a href=''></a>
          </li>
          <li class={`${styles.HeaderBrandUnivers} ${styles.librebaskervilleitalic}`}>
            Group S Online
            <div class={styles.HeaderBrandUniversClientName}>PreStaWeb BENELUX SA</div>
          </li>
        </ul>
      </li>
      <li class={styles.HeaderMenu}>
        <ul>
          <li class={`${styles.HeaderMenuAccount} ${styles.Dropdown}`}>
            <div>
              <span class={styles.Username}>Username</span>
              <i class={`${styles.Hico} ${styles.Hico_user}`}></i>
            </div>
            <ul>
              <li>
                <a href="/account.html">
                  <i class={`${styles.Hico} ${styles.Hico_user}`}></i>
                  <span>Mon Compte</span>
                </a>
              </li>
              <li>
                <a href="#contact">
                  <i class={`${styles.Hico} ${styles.Hico_book}`}></i>
                  <span>Contacts</span>
                </a>
              </li>
            </ul>
          </li>
          <li class={`${styles.HeaderMenuInbox} ${styles.Dropdown}`}>
            <div>
              <i class={`${styles.Hico} ${styles.Hico_bell}`}></i>
            </div>
            <ul>
              <li>
                <a>
                  <i class={`${styles.Hico} ${styles.Hico_envelope}`}></i>
                  <span>test</span>
                </a>
              </li>
              <li>
                <a>
                  <i class={`${styles.Hico} ${styles.Hico_envelope}`}></i>
                  <span>test2</span>
                </a>
              </li>
            </ul>
          </li>
          <li class={styles.HeaderMenuNews}>
            <i class={`${styles.Hico} ${styles.Hico_newspaper}`}></i>
          </li>
          <li class={`${styles.HeaderMenuApplication} ${styles.Dropdown}`}>
            <div>
              <i class={`${styles.Hico} ${styles.Hico_apps}`}></i>
            </div>
            <ul>
              <li>
                <a href="#">
                  <span>test</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span>test2</span>
                </a>
              </li>
            </ul>
          </li>
          <li class={styles.HeaderMenuFaq}>
            <i class={`${styles.Hico} ${styles.Hico_question}`}></i>
          </li>
          <li class={styles.HeaderMenuLogout}>
            <i class={`${styles.Hico} ${styles.Hico_poweroff}`}></i>
          </li>
        </ul>
      </li>
    </ul>

  )
}


export default Header
