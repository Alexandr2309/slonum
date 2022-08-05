import React, { FC, PropsWithChildren, useEffect, useRef } from 'react'
import cl from '../../styles/Plan.module.scss'
import path from '../../helpers/imgPass'

const PlanDashedWrapper: FC<PropsWithChildren> = ({ children }) => {

  return (
    <div className={cl.dashed}>
      <div className={cl.image}>
        <img src={path.dashed} alt="Пунктир" />
        {children}
      </div>
    </div>
  )
}

export default PlanDashedWrapper
