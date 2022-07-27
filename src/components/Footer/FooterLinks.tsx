import React from 'react'
import cl from '../../styles/Footer.module.scss'
import { footerLinks } from '../../helpers/data'

const FooterLinks = () => {
  return (
    <nav className={cl.links}>
      {footerLinks.map((link, i) => (
        <a href="#" key={i} className={cl.linkItem}>
          {link.title}
        </a>
      ))}
    </nav>
  )
}

export default FooterLinks
