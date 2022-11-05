import ThemeToggle from 'components/atoms/ThemeToggle'
import Link from 'next/link'
import styles from './Navbar.module.scss'

const Navbar = () => {
  return (
    <>
      <div className={styles.navbar}>
        <div className="container">
          <div className={styles.row}>
            <div className={styles.logo}>
              <Link href="/pages">{process.env.NEXT_PUBLIC_BLOG_NAME}</Link>
            </div>
            <ThemeToggle/>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar
