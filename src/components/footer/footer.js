import React from "react"
import { Link } from 'gatsby'
import { StaticQuery, graphql } from "gatsby"
import * as styles from './footer.module.css'
import SocialLinks from "../social-links/social-links"
export default function Footer() {
  return (
    <StaticQuery
      query={graphql`
        query HeadingQuery {
          social: allSocialYaml(filter: { url: { ne: null } }) {
            nodes {
              ...SocialFragment
            }
          }
        }
      `}
     
      render={data => (
        
        <footer className="footer has-background-white has-text-black-ter">
        <div className="content has-text-centered has-background-white has-text-black-ter">
          <div className="has-background-white has-text-black-ter">
            <div style={{ maxWidth: '80vw', margin: '0 auto' }} className="columns">
              <div className="column is-4">
                <section className="menu">
                  <ul className="menu-list">
                    <li>
                      <Link to="/" className={styles.navitems}>
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link className={styles.navitems} to="/about">
                        About
                      </Link>
                    </li>
                    <li>
                      <a
                        className={styles.navitems}
                        href="/admin/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Admin
                      </a>
                    </li>
                  </ul>
                </section>
              </div>
              <div className="column is-4">
                <section>
                  <ul className="menu-list">
                    <li>
                      <Link className={styles.navitems} to="/blog">
                        Latest Stories
                      </Link>
                    </li>
                    <li>
                      <Link className={styles.navitems} to="/about/#contact">
                        Contact
                      </Link>
                    </li>
                  </ul>
                </section>
              </div>
             
                <SocialLinks social={data.social.nodes} />
          
            </div>
          </div>
          <p style={{paddingBottom:'1em', color:'#00000'}}>Copyright © nohelps.com | 2021</p>
        </div>
      </footer>
      )}
    />
  )
}