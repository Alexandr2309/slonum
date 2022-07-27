import React, { FC } from 'react'
import { FooterIcons } from './FooterIcons'
import cl from '../../styles/Footer.module.scss'

const FooterSocials: FC = () => {
  return (
    <div className={cl.socials}>
      <h5>Наши соцсети:</h5>
      <FooterIcons cl={cl} />
    </div>
  )
}

export default FooterSocials
