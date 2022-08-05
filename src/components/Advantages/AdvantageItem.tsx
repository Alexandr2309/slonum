import React, { FC, useEffect, useRef } from 'react'
import cl from '../../styles/Advantage.module.scss'
import useAnimate from '../../hooks/useAnimate'
import { cssChangeObj as cssChange } from '../../helpers/helperFunc'

const AdvantageItem: FC<{ img: string; text: string }> = ({ img, text }) => {
  const ref = useRef<HTMLDivElement>(null)

  const animate = useAnimate(ref, cssChange.advantages)

  return (
    <div className={cl.item} ref={ref}>
      <div className={cl.image}>
        <img src={img} alt="advantage" />
      </div>
      <div className={cl.text} dangerouslySetInnerHTML={{ __html: text }} />
    </div>
  )
}

export default AdvantageItem
