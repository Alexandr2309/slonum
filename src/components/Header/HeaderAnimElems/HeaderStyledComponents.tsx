import React from 'react'
import styled from 'styled-components'
import path from '../../../helpers/imgPass'
import { mathItemsElements, planetElements, starItemsElements } from './severalAnimElements'
import { r } from '../../../helpers/helperFunc'
import {
  airBalloonProperty,
  atomProperty,
  clockProperty,
  elephantProperty,
  lampProperty,
  paletteProperty,
  pencilProperty,
  planeProperty,
} from './propsElementsData'

const Atom = styled.img.attrs((p) => ({
  alt: 'атом',
  src: path.atom,
}))`
  ${atomProperty}
`

const Clock = styled.img.attrs((p) => ({
  alt: 'часики',
  src: path.clock,
}))`
  ${clockProperty}
`

const PencilShip = styled.img.attrs((p) => ({
  alt: 'карандаш',
  src: path.spacePencil,
}))`
  ${pencilProperty}
`

const AirBalloon = styled.img.attrs((props) => ({
  alt: 'воздушный шар',
  src: path.airBalloon,
}))`
  ${airBalloonProperty}
`

const Lamp = styled.img.attrs((props) => ({
  alt: 'лампочка',
  src: path.lamp,
}))`
  ${lampProperty}
`

const Elephant = styled.img.attrs((props) => ({
  alt: 'слон',
  src: path.elephant,
}))`
  ${elephantProperty}
`

const Plane = styled.img.attrs((props) => ({
  alt: 'самолёт',
  src: path.plane,
}))`
  ${planeProperty}
`

const Palette = styled.img.attrs((props) => ({
  alt: 'палитра',
  src: path.palette,
}))`
  ${paletteProperty}
`

const componentsArr = [
  <Atom key={r()} />,
  <Clock key={r()} />,
  <PencilShip key={r()} />,
  ...planetElements,
  ...mathItemsElements,
  <AirBalloon key={r()} />,
  <Lamp key={r()} />,
  <Elephant key={r()} />,
  <Plane key={r()} />,
  <Palette key={r()} />,
  ...starItemsElements,
]

export default componentsArr
