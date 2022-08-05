import {IAnimateParamsWithRef, labelValue} from '../types'
import React from 'react'

export const formatDate = (time: number): string => `0${time.toString()}`.slice(-2)

export function getLabel(index: number): labelValue {
  switch (index) {
    case 0:
      return 'дней'
    case 1:
      return 'часов'
    case 2:
      return 'минут'
    default:
      return ''
  }
}

export function animate({ timing, draw, duration, ref, obsRef }: IAnimateParamsWithRef) {
  const start = performance.now()

  window.requestAnimationFrame(function animate(time) {
    let timeFraction: number = (time - start) / duration
    if (timeFraction > 1) timeFraction = 1

    const progress = timing(timeFraction)

    draw(progress, ref)
    if (timeFraction < 1) {
      window.requestAnimationFrame(animate)
    }
  })
  obsRef.current!.unobserve(ref.current!)
}
function makeEaseOut(timing: (x: number) => number | any) {
  return function (timeFraction: number) {
    return 1 - timing(1 - timeFraction)
  }
}

function bounce(timeFraction: number) {
  for (let a = 0, b = 1; ; a += b, b /= 2) {
    if (timeFraction >= (7 - 4 * a) / 11) {
      return -Math.pow((11 - 6 * a - 11 * timeFraction) / 4, 2) + Math.pow(b, 2.1)
    }
  }
}

export const bounceEaseOut = makeEaseOut(bounce)

export function step(progress: number, ref: React.RefObject<HTMLDivElement>) {
  let value = progress * 100 + 10
  if (value > 100) value = 100
  ref.current!.style.clipPath = `polygon(0% 0%, 100% 0%, 100% ${value}%, 0% ${value}%)`
}
export function plainFlight(progress: number, ref: React.RefObject<HTMLDivElement>) {
  let translateX = 500 - progress * 500
  const translateY = progress <= 0.5 ? 0 - 75 * progress * 2 : -150 + 75 * progress * 2
  const rotate = progress <= 0.5 ? 15 * progress * 2 : 30 - 15 * progress * 2
  if (translateX < 0) translateX = 0
  ref.current!.style.transform = `translate(${translateX}px, ${translateY}px) rotate(${rotate}deg)`
}

export const cssChangeObj: { [p: string]: (elem: HTMLElement) => void } = {
  advantages: (elem: HTMLElement) => {
    elem.style.transform = 'translateY(0)'
    elem.style.opacity = '1'
  },
  appPrice: (elem: HTMLElement) => {
    const supElem = elem.querySelector('sup')!
    supElem.style.textDecoration = 'line-through'
    supElem.style.transform = 'unset'
  },
}

export const randomInt = (min: number, max: number): number => +(Math.random() * (max - min) + min).toFixed(2)
export const r = () => Math.random()