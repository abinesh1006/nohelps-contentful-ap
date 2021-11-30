import React from 'react'
import { Link } from 'gatsby'
import pic from '../img/black_logo.png';
import * as styles from './navigation.module.css'

const Navigation = () => (
  <nav role="navigation" className={`${styles.container} justify-center items-center  transition-shadow duration-150`} aria-label="Main">
    <Link to="/" className={styles.logoLink}>
      <span ><img className={styles.logo} src={pic} alt="NoHelps"></img></span>
      <span className="font-black text-red-600 hover:underline uppercase  {styles.navigationItem}">NoHelps</span>
    </Link>
    <ul className={styles.navigation}>
      <li className={styles.navigationItem}>
        <Link to="/" activeClassName="active">
          Home
        </Link>
      </li>
      <li className={styles.navigationItem}>
        <Link to="/blog/" activeClassName="active">
          Blog
        </Link>
      </li>
      <li className={styles.navigationItem}>
        <Link to="/shop/" activeClassName="active">
          Products
        </Link>
      </li>
      <li className={styles.navigationItem}>
        <Link to="/contact/" activeClassName="active">
          Contact
        </Link>
      </li>
      <li>
      </li>
    </ul>
  </nav>
)

export default Navigation
