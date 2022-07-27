import React, { FC } from 'react'
import path from '../../../helpers/imgPass'
import cl from '../../../styles/Application.module.scss'
import Button from '../../UI/Button'

const ApplicationSubmit: FC = () => {
  return (
    <div className={cl.submit}>
      <Button cl="" />
      <div>
        <img src={path.plain} alt="plain" />
      </div>
    </div>
  )
}

export default React.memo(ApplicationSubmit)
