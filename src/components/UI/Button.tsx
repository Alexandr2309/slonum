import React, { FC } from 'react'
import { IButtonProps } from '../../types'

const Button: FC<IButtonProps> = ({ cl, text = '<a>Участвовать</a>' }) => {
  return <button className={cl ? `primary-btn ${cl}` : 'primary-btn'} dangerouslySetInnerHTML={{__html: text}}></button>
}

export default Button
