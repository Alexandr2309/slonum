import React, { FC } from 'react'
import HeaderTop from './HeaderTop'
import HeaderInfo from './HeaderInfo'
import HeaderSpace from './HeaderSpace'

const Header: FC = () => {
  return (
    <header>
      <HeaderSpace />
      <div className="container">
        <HeaderTop />
        <HeaderInfo />
      </div>
    </header>
  )
}

export default Header
