import React, { FC } from 'react'
import cl from '../../styles/Diploma.module.scss'
import DiplomaInfo from './DiplomaInfo'
import DiplomaImage from './DiplomaImage'
import Container from '../Layout/Container'

const Diploma: FC = () => {
  return (
    <Container cl={cl.diploma} additionalCl={cl.block}>
      <DiplomaInfo />
      <DiplomaImage />
    </Container>
  )
}

export default Diploma
