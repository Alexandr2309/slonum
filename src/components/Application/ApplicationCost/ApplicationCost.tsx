import React, { FC } from 'react'
import { ICSSModuleProp } from '../../../types'
import { ApplicationCostDiscount } from './ApplicationCostDiscount'
import { ApplicationCostBookmark } from './ApplicationCostBookmark'
import { ApplicationCostPrice } from './ApplicationCostPrice'

const ApplicationCost: FC<ICSSModuleProp> = ({ cl }) => {
  return (
    <div>
      <div className={cl.costWrapper}>
        <ApplicationCostBookmark cl={cl} />
        <ApplicationCostPrice cl={cl} />
        <ApplicationCostDiscount cl={cl} />
      </div>
    </div>
  )
}

export default ApplicationCost
