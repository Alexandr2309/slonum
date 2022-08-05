import React, { FC } from 'react'
import path from '../../helpers/imgPass'
import cl from '../../styles/Footer.module.scss'

function FooterScrollButton() {
  const scrollToBegin = () => {
    window.scrollTo({ left: 0, top: 0, behavior: 'smooth' })
  }

  return (
    <div className={cl.scroll} onClick={scrollToBegin}>
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
