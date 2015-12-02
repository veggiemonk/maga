import styles from './index.css!'

let Header = {}

Header.view = c => (
  <div class={styles.container}>
    <div class={`${styles.codrops_top} ${styles.clearfix}`}>
      <a href="http://tympanus.net/Tutorials/BasicReadyToUseCSSStyles/">
        <strong>TRANSFER</strong>
      </a>
			<span class={styles.right}>
				<a href="http://tympanus.net/codrops/?p=11775">
          <strong>HEADER RIGHT</strong>
        </a>
			</span>
    </div>
  </div>
)

export default Header
