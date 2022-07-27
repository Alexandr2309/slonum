import { labelValue } from '../types'
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
