import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faGithubAlt} from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="container">
          @ 2022 - <a href="https://github.com/yrogovich/next-blog" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faGithubAlt}/> yrogovich
        </a>
        </div>
      </footer>
      <style jsx>{`
        .footer {
          padding: 1rem;
          text-align: center;
          margin-top: auto;
        }
      `}</style>
    </>
  )
}

export default Footer
