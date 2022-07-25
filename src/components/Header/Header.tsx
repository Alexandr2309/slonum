import React, { FC } from 'react'
import Button from '../UI/Button'
import path from '../../helpers/imgPass'
import cl from '../../styles/Header.module.scss';

const Header: FC = () => {
  return (
    <header>
      <div></div>
      <div className="container">
        <div className={cl.top}>
            <div className={cl.topLogo}>
                <img src={path.logo} alt="logo" />
                <div>
                    Слон<span>УМ</span>
                </div>
            </div>
        <Button cl={'fesf'} />
        </div>
      </div>
    </header>
  )
}

export default Header
