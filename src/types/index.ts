import React from 'react'

/* INTERFACES */
export interface IButtonProps {
  cl: string
  text?: string
}
export interface ICSSModuleProp {
  cl: { [propName: string]: string }
}
export interface IAccordionProps {
  title: string
  children: React.ReactElement | React.ReactNode
}
export interface IQuesAndAns {
  question: string
  answer: string
}
export interface IFooterLinks {
  title: string
  path: string
}
export interface IAdvantages {
  img: string
  text: string
}
export interface IPlanItems {
  num: number
  text: string
}
export interface ICheckBoxProps {
  text: string
  checked: boolean
  setChecked?: React.Dispatch<React.SetStateAction<boolean>>
  id: string
}
/* TYPES */
export type labelValue = 'дней' | 'часов' | 'минут' | ''

export interface IAnimateParamsWithRef {
  timing: (x: number) => number
  draw: (x: number, ref: React.RefObject<HTMLDivElement>) => void
  duration: number
  ref: React.RefObject<HTMLDivElement>
  obsRef: React.RefObject<IntersectionObserver>
}

export interface IPlanet {
    left: number
    top: number
    src: string
    delay?: number
    duration: number
    direction?: string
    alt: string
}
export interface IStar {
    left: number
    top: number
    src: string
    delay?: number
    duration?: number
    direction?: string
}

export interface IMathItem {
    left: number;
    top: number;
    src: string;
    alt: string
}