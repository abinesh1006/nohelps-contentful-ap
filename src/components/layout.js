import React from 'react'

import './variables.css'
import './global.css'
import './all.scss'
import Seo from './seo'
import Navigation from './navigation'
import Footer from './footer/footer'

class Template extends React.Component {
  render() {
    const { children } = this.props

    return (
      <>
        <Seo />
        <Navigation />
        <main>{children}</main>
        <Footer />
      </>
    )
  }
}

export default Template
