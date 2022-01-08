import React from 'react'
import { Link } from 'gatsby'
import pic from '../../img/black_logo.png';
import * as styles from './navigation.module.css'

const Navigation = () => (
  <nav role="navigation" className={styles.container} aria-label="Main">
    <Link to="/" className={styles.logoLink}>
      <span ><img className={styles.logo} src={pic} alt="NoHelps"></img></span>
      <span className={`${styles.navigationItem} text-red-600 justify-center items-center italic font-bold transition-shadow duration-150`}>NOHELPS</span>
    </Link>
    <ul className={styles.navigation}>
      <li className={styles.navigationItem}>
        <Link to="/" activeClassName="active">
          Home
        </Link>
      </li>
      <li className={styles.navigationItem}>
        <Link to="/blog/"  partiallyActive={true} activeClassName="active">
          Blog
        </Link>
      </li>
      <li className={styles.navigationItem}>
        <Link to="/contact/" activeClassName="active">
          Contact
        </Link>
      </li>
      <li className={styles.navigationItem}>
        <Link to="/signup/" activeClassName="active">
          Sign Up
        </Link>
      </li>
      
    </ul>
  </nav>
)

export default Navigation
