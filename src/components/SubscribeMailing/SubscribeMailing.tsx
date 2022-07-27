import React, { FC } from 'react'
import Heading from '../shared/Heading'
import Container from '../Layout/Container'
import { headingText } from '../../helpers/data'
import MailingForm from './MailingForm'

const SubscribeMailing: FC = () => {
  return (
    <Container cl="mailing">
      <Heading text={headingText.mailing} />
      <div className="mailing__subtitle">Обещаем присылать только самое важное и интересное :)</div>
      <MailingForm />
    </Container>
  )
}

export default SubscribeMailing
