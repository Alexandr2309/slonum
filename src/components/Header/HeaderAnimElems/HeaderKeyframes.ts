import { keyframes } from 'styled-components'

export const rotation = keyframes`
0% {
transform: rotateZ(0deg);
}
100% {
transform: rotateZ(360deg);
}
`

export const shakeClock = keyframes`
0% { transform: translate(-8px, -14px); }
  33% { transform: translate(-9.5px, -15px); }
  66% { transform: translate(-9.5px, -15px); }
  100% { transform: translate(-8px, -14px); }
`
export const shakeElephant = keyframes`
0% { transform: translate(-2px, -1px); }
  33% { transform: translate(-4px, -2px); }
  66% { transform: translate(-4px, -2px); }
  100% { transform: translate(-2px, -1px); }
`

export const shineLamp = keyframes`
0% {
filter: drop-shadow(0 0 1px #FFF405);
}
100% {
filter: drop-shadow(0 0 18px #FFF405);
}
`

export const planeFly = keyframes`
0% {
transform: translate(0px, 0px);
}
100% {
transform: translate(600px, -90px);
}
`

export const shineStar = keyframes`
0% {
filter: drop-shadow(0 0 0px #ffffff);
}
100% {
filter: drop-shadow(0 0 5px #ffffff);
}
`
