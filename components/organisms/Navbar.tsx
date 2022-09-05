import ThemeToggle from '../atoms/ThemeToggle/ThemeToggle'
import Link from 'next/link'

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <div className="container">
          <div className="navbar__inner">
            <div className="navbar__logo">
              <Link href="/">{process.env.NEXT_PUBLIC_BLOG_NAME}</Link>
            </div>
            <ThemeToggle/>
          </div>
        </div>
      </div>
      <style jsx>{`
        .navbar {
          padding: 2rem 0;
        }

        .navbar__inner {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 1rem;
        }

        .navbar__logo {
          font-size: 2.6rem;
          font-weight: 700;
        }
      `}</style>
    </>
  )
}

export default Navbar
