import { mathItemsProps, planetProps, starsItemsProps } from '../../../helpers/data'
import styled, { css } from 'styled-components'
import { IMathItem, IPlanet, IStar } from '../../../types'
import { rotation, shineStar } from './HeaderKeyframes'

const Star = styled(
  styled.img.attrs((props) => ({
    alt: 'звезда',
    src: props.src,
  }))`
    position: absolute;
  `,
)<IStar>`
  left: ${({ left }) => left}px;
  top: ${({ top }) => top}px;
  animation: ${shineStar} 1.7s infinite ${(props) => props.direction || ''} alternate linear
    ${(props) => props.delay || 0}s;
`

const Planet = styled.img<IPlanet>`
  position: absolute;
  left: ${(props) => props.left}px;
  top: ${(props) => props.top}px;
  animation: ${rotation} ${(props) => props.duration}s infinite ${(props) => props.direction || ''}
    linear ${(props) => props.delay || 0}s;
`

const MathItem = styled.img<IMathItem>`
  position: absolute;
  left: ${(props) => props.left}px;
  top: ${(props) => props.top}px;
`

export const starItemsElements = starsItemsProps.map((props) => (
  <Star {...props} key={Math.random()} />
))

export const mathItemsElements = [
  <MathItem key={Math.random()} {...mathItemsProps.plus} />,
  <MathItem key={Math.random()} {...mathItemsProps.division} />,
  <MathItem key={Math.random()} {...mathItemsProps.zero} />,
  <MathItem key={Math.random()} {...mathItemsProps.unit} />,
]

export const planetElements = [
  <Planet key={Math.random()} {...planetProps.planet2} />,
  <Planet key={Math.random()} {...planetProps.planet1} />,
  <Planet key={Math.random()} {...planetProps.bigPlanet} />,
]
