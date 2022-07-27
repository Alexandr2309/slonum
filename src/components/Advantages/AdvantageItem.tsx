import React, { FC } from 'react'
import cl from '../../styles/Advantage.module.scss'

const AdvantageItem: FC<{ img: string; text: string }> = ({ img, text }) => {
  return (
    <div className={cl.item}>
      <div className={cl.image}>
        <img src={img} alt="advantage" />
      </div>
      <div className={cl.text} dangerouslySetInnerHTML={{ __html: text }} />
    </div>
  )
}

export default AdvantageItem
