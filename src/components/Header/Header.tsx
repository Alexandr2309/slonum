import React, { FC } from 'react'
import HeaderTop from './HeaderTop'
import HeaderInfo from './HeaderInfo'
import path from '../../helpers/imgPass'

const Header: FC = () => {
  return (
    <header>
      <div>
        <img src={path.cover} alt="cover" />
      </div>
      <div className="container">
        <HeaderTop />
        <HeaderInfo />
      </div>
    </header>
  )
}

export default Header
