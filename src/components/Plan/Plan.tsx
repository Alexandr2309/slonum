import React, { FC, useEffect, useRef } from 'react'
import cl from '../../styles/Plan.module.scss'
import Container from '../Layout/Container'
import Heading from '../shared/Heading'
import { headingText } from '../../helpers/data'
import PlanBasic from './PlanBasic'
import { animate, step } from '../../helpers/helperFunc'

const Plan: FC = () => {
  const ref = useRef<HTMLDivElement>(null)
  const obsRef = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    const options = { rootMargin: '-220px', thresholds: 1 }
    function onEntry(entry: any) {
      if (entry[0].isIntersecting) {
        console.log('ff')
        animate({
          timing(timeFraction) {
            return timeFraction
          },
          duration: 2600,
          draw: step,
          ref: ref,
          obsRef,
        })
      }
    }
    obsRef.current = new IntersectionObserver(onEntry, options)
    console.log(obsRef.current, ref.current)
    obsRef.current.observe(ref.current!)
  }, [])

  return (
    <Container cl={cl.plan} refProp={ref}>
      <Heading text={headingText.plan} />
      <PlanBasic />
    </Container>
  )
}

export default Plan
