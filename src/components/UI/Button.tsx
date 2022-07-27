import React, { FC } from 'react'
import { IButtonProps } from '../../types'

const Button: FC<IButtonProps> = ({ cl, text = 'Участвовать' }) => {
  return <button className={cl ? `primary-btn ${cl}` : 'primary-btn'}>{text}</button>
}

export default Button
