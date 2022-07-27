import React, { FC } from 'react'
import { advantages, headingText } from '../../helpers/data'
import AdvantageItem from './AdvantageItem'
import cl from '../../styles/Advantage.module.scss'
import Heading from '../shared/Heading'
import Container from '../Layout/Container'

const Advantages: FC = () => {
  return (
    <Container cl={cl.advantage}>
      <Heading text={headingText.advantage} />
      <div className={cl.block}>
        {advantages.map((advantage, i) => (
          <AdvantageItem {...advantage} key={i} />
        ))}
      </div>
    </Container>
  )
}

export default Advantages
