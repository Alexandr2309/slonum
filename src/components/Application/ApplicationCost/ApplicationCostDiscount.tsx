import { ICSSModuleProp } from '../../../types'
import React, { FC, FunctionComponentElement } from 'react'
import path from '../../../helpers/imgPass'

export function ApplicationCostDiscount(props: ICSSModuleProp): FunctionComponentElement<FC> {
  return (
    <div className={props.cl.bottom}>
      <div className={props.cl.bottomLabel}>Получить скидку:</div>
      <div className={props.cl.social}>
        <img src={path.vk} alt="vk" />
      </div>
      <div className={props.cl.social}>
        <img src={path.ok} alt="ok" />
      </div>
    </div>
  )
}
