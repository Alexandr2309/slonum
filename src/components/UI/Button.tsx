import React, { FC } from 'react'
import { IButtonProps } from '../../types'

const Button: FC<IButtonProps> = ({ cl, text = 'Участвовать' }) => {
  return <button className={cl}>{text}</button>
}

export default Button
