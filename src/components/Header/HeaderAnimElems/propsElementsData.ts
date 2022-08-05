import { planeFly, rotation, shakeClock, shakeElephant, shineLamp } from './HeaderKeyframes'
import { css } from 'styled-components'

export const airBalloonProperty = ` position: absolute;
  left: 372px;
  top: 300px;
  transition: all 0.7s ease-in-out;
  &:hover {
    transform: translateY(-50px);
  }`

export const lampProperty = css`
  position: absolute;
  left: 498px;
  top: 342px;
  animation: ${shineLamp} 1.7s infinite alternate linear;
`

export const elephantProperty = css`
  position: absolute;
  left: 595.5px;
  top: 228px;
  &:hover {
    animation: ${shakeElephant} 0.15s 2 alternate linear;
  }
`

export const planeProperty = css`
  position: absolute;
  left: 736px;
  top: 329px;
  &:active {
    animation: ${planeFly} 2.5s 1 linear;
  }
`

export const paletteProperty = css`
  position: absolute;
  left: 739px;
  top: 123px;
  transition: all 0.5s ease;
  transform-origin: 70% 70%;
  &:hover {
    transform: rotate(180deg);
  }
`

export const pencilProperty = css`
  position: absolute;
  left: 106px;
  top: 357px;
  transition: all 0.25s ease-in;
  &:hover {
    transform: translate(10px, -25px);
  }
  z-index: 9999;
`

export const clockProperty = css`
  position: absolute;
  left: 135px;
  top: 223px;
  animation: ${shakeClock} 0.2s infinite linear alternate;
`

export const atomProperty = css`
  position: absolute;
  left: 94px;
  top: 138px;
  animation: ${rotation} 7s infinite linear;
`

