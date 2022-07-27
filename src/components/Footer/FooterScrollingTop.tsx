import React, { FC } from 'react'
import path from '../../helpers/imgPass'
import cl from '../../styles/Footer.module.scss'

function FooterScrollButton() {
  return (
    <div className={cl.scroll}>
      <img src={path.arrow} alt="arrow" />
    </div>
  )
}

const FooterScrollingTop: FC = () => {
  return (
    <div className={cl.scrollBlock}>
      <h5>Наши соцсети: </h5>
      <FooterScrollButton />
    </div>
  )
}

export default FooterScrollingTop
