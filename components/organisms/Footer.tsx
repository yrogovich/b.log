import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faGithubAlt} from '@fortawesome/free-brands-svg-icons'
import ThemeToggle from '../atoms/ThemeToggle'

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="container">
          @ 2022 - <a href="https://github.com/yrogovich/next-blog" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faGithubAlt}/> yrogovich
        </a>
        </div>
        <ThemeToggle/>
      </footer>
      <style jsx>{`
        .footer {
          padding: 1rem;
          background-color: #f5f5f5;
          text-align: center;
        }
      `}</style>
    </>
  )
}

export default Footer
