import React, { FC } from 'react'
import { planItems } from '../../helpers/data'
import PlanItem from './PlanItem'

const PlanItems: FC = () => {
  return (
    <div>
      {planItems.map((item) => (
        <PlanItem {...item} key={item.num} />
      ))}
    </div>
  )
}

export default PlanItems
