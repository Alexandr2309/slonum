import React, { FC } from 'react'
import path from '../../helpers/imgPass'

const DiplomaImage: FC = () => {
  return (
    <div>
      <img src={path.diploma} alt="пример диплома" />
    </div>
  )
}

export default DiplomaImage
