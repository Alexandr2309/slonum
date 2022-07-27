import React, { FC } from 'react'
import { headingText } from '../../helpers/data'
import cl from '../../styles/Application.module.scss'
import Heading from '../shared/Heading'
import Container from '../Layout/Container'
import ApplicationCost from './ApplicationCost/ApplicationCost'
import ApplicationForm from './ApplicationForm/ApplicationForm'

const Application: FC = () => {
  return (
    <Container cl={cl.app}>
      <Heading text={headingText.application} />
      <div className={cl.appBlock}>
        <ApplicationCost cl={cl} />
        <ApplicationForm />
      </div>
    </Container>
  )
}

export default Application
