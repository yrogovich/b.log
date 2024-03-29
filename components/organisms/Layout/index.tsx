import Footer from 'components/organisms/Footer'
import Navbar from 'components/organisms/Navbar'
import React from 'react'

type Props = {
  children: React.ReactNode
}

const Layout = ({children}: Props) => {
  return (
    <>
      <Navbar/>
      <main>{children}</main>
      <Footer/>
    </>
  )
}

export default Layout
