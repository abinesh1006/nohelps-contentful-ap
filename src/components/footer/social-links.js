import React from "react"
import SocialIcon from "./social-icon"
import { SocialType, arrayOf, shape } from "../../types"
import * as styles from './footer.module.css'

const SocialLinks = ({ social }) => {
  return (
    <div className="pl-3 column is-4">
      {social.map(({ name, url }, i) => {
        const colorsClass ="bg-back-light text-front"
        return (
          
          <a
            aria-label={name}
            className={`${styles.navitems} inline-flex w-12 h-12 justify-center items-center rounded-full m-2 ${colorsClass} hover:shadow-lg transition-shadow duration-150`}
            href={url}
            key={name}
            rel="noopener noreferrer"
            target="_blank"
          >
            <SocialIcon name={name} className="w-6 h-6" />
          </a>
       
        )
      })}
     
    </div>
  )
}

SocialLinks.propTypes = {
  social: arrayOf(shape(SocialType)),
}

export default SocialLinks
