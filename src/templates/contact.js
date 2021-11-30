import React from 'react'
import Seo from '../components/seo'
import Layout from '../components/layout'
import Contact from '../components/contact'

import Hero from '../components/hero'

class ContactIndex extends React.Component {
  render() {
    return (
      <Layout location={this.props.location}>
       <Seo title="Contact" />
        <Hero title="Contact Us" />
        <Contact />
      </Layout>
      
    )
  }
}

export default ContactIndex

