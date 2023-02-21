import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faGithubAlt} from '@fortawesome/free-brands-svg-icons'
import styles from './Footer.module.scss'

const Footer = () => {
  return (
    <>
      <footer className={styles.footer}>
        <div className="container">
          @ 2022 - <a href="https://github.com/yrogovich/next-blog" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faGithubAlt}/> yrogovich
        </a>
        </div>
      </footer>
    </>
  )
}

export default Footer
