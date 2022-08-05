import React from 'react'
import cl from '../../styles/Footer.module.scss'
import { footerLinks } from '../../helpers/data'

const FooterLinks = () => {
  return (
    <nav className={cl.links}>
      {footerLinks.map((link, i) => (
        <a href="#" key={i} className={cl.linkItem}>
          <span>{link.title}</span>
        </a>
      ))}
    </nav>
  )
}

export default FooterLinks
