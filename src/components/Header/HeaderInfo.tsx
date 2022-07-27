import React, { FC } from 'react'
import cl from '../../styles/Header.module.scss'
import Button from '../UI/Button'
import HeaderTimer from './HeaderTimer'

function Info() {
  return (
    <>
      <div className={cl.mainLabel}>от компании слонум</div>
      <h1 className={cl.mainTitle}>Всероссийский конкурс Детского рисунка</h1>
      <p className={cl.mainSubtitle}>
        Участвуйте в конкурсе и получайте призы в различных номинациях детского рисунка для всех
        возрастов
      </p>
    </>
  )
}

const HeaderInfo: FC = () => {
  return (
    <div className={cl.main}>
      <Info />
      <div className={cl.mainAction}>
        <Button cl={cl.mainBtn} />
        <HeaderTimer />
      </div>
    </div>
  )
}

export default HeaderInfo
