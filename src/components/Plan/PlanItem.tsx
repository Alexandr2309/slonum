import React, { FC } from 'react'
import cl from '../../styles/Plan.module.scss'

const PlanItem: FC<{ num: number; text: string }> = ({ num, text }) => {
  return (
    <div className={cl.planItem}>
      <div className={cl.planNum}>{num}</div>
      <div className={cl.planText} dangerouslySetInnerHTML={{ __html: text }} />
    </div>
  )
}

export default PlanItem
