import React, { FC } from 'react'

const FormInput: FC<{ ph: string }> = ({ ph }) => {
  return (
    <div className="form-input">
      <input type="text" placeholder={ph} />
    </div>
  )
}

export default FormInput
