import cl from '../../styles/Header.module.scss'
import path from '../../helpers/imgPass'
import Button from '../UI/Button'
import React from 'react'

export default function HeaderTop() {
  return (
    <div className={cl.top}>
      <div className={cl.topLogo}>
        <img src={path.logo} alt="logo" />
        <div className={cl.topText}>
          Слон<span>УМ</span>
        </div>
      </div>
      <Button cl={cl.topAuth} text="Войти" />
    </div>
  )
}
