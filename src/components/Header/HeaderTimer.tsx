import React, { FC } from 'react'
import cl from '../../styles/Header.module.scss'
import { timeInfo } from '../../helpers/data'
import { formatDate, getLabel } from '../../helpers/helperFunc'
import { labelValue } from '../../types'

const TimerPart: FC<{ label: labelValue; text: string }> = ({ label, text }) => {
  return (
    <div>
      <div className={cl.timerItem}>{text}</div>
      <span className={cl.timerLabel}>{label}</span>
    </div>
  )
}

const HeaderTimer: FC = () => {
  return (
    <div className={cl.timer}>
      {timeInfo.map((elem, i) => (
        <TimerPart label={getLabel(i)} text={formatDate(elem)} key={i} />
      ))}
    </div>
  )
}

export default HeaderTimer
