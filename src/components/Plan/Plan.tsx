import React, { FC } from 'react'
import cl from '../../styles/Plan.module.scss'
import Container from '../Layout/Container'
import Heading from '../shared/Heading'
import { headingText } from '../../helpers/data'
import PlanBasic from './PlanBasic'

const Plan: FC = () => {
  return (
    <Container cl={cl.plan}>
      <Heading text={headingText.plan} />
      <PlanBasic />
    </Container>
  )
}

export default Plan
