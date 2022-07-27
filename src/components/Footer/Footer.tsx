import React, { FC } from 'react'
import Container from '../Layout/Container'
import FooterSocials from './FooterSocials'
import cl from '../../styles/Footer.module.scss'
import FooterLinks from './FooterLinks'
import FooterScrollingTop from './FooterScrollingTop'

const Footer: FC = () => {
  return (
    <footer className={cl.footer}>
      <Container cl="" additionalCl={cl.footerBlock}>
        <FooterSocials />
        <FooterLinks />
        <FooterScrollingTop />
      </Container>
      <div className={cl.law}>@ Все права защищены. ООО”Слонум” 2022</div>
    </footer>
  )
}

export default Footer
