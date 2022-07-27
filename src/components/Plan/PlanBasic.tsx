import React, { FC } from 'react'
import PlanItems from './PlanItems'
import PlanDashedWrapper from './PlanDashedWrapper'

const PlanBasic: FC = () => {
  return (
    <PlanDashedWrapper>
      <PlanItems />
    </PlanDashedWrapper>
  )
}

export default PlanBasic
