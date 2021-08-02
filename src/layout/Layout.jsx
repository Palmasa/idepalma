import React from 'react'
import Helmet from "react-helmet";
import Footer from '../components/Footer/Footer';
import Navbar from '../components/Navbar/Navbar'
import './Layout.scss'

const Layout = ({ children }) => {
  return (
    <>
      <Helmet>
        <html lang="en" />
        <title>Inés de Palma</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        ></meta>
      </Helmet>
      <main>
        <Navbar />
        {children}
        <Footer />
      </main>
    </>
  )
}

export default Layout
