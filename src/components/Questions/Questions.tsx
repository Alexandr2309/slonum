import React, { FC } from 'react'
import { quesAndAns, headingText } from '../../helpers/data'
import Accordion from '../UI/Accordion'
import Container from '../Layout/Container'
import Heading from '../shared/Heading'

const Questions: FC = () => {
  return (
    <Container cl="questions">
      <Heading text={headingText.question} />
      {quesAndAns.map(({ question, answer }, i) => (
        <Accordion title={question} key={i}>
          <p>{answer}</p>
        </Accordion>
      ))}
    </Container>
  )
}

export default Questions
