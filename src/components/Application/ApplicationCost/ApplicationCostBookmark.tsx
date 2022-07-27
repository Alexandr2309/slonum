import { ICSSModuleProp } from '../../../types'
import React, { FC } from 'react'

export function ApplicationCostBookmark(props: ICSSModuleProp): React.FunctionComponentElement<FC> {
  return (
    <>
      <div className={props.cl.bookmark}>
        Скидка за репост <span className={props.cl.triangle}></span>
      </div>
    </>
  )
}
