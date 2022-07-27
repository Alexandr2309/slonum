import React, { FC } from 'react'
import { ICheckBoxProps } from '../../types'

const CheckBox: FC<ICheckBoxProps> = ({ text, checked = true, setChecked, id }) => {
  return (
    <div className="checkbox-block">
      <input
        type="checkbox"
        checked={checked}
        className="custom-checkbox"
        id={id}
        value="yes"
        onChange={() => (setChecked ? setChecked(!checked) : null)}
      />
      <label htmlFor={id} dangerouslySetInnerHTML={{ __html: text }}></label>
    </div>
  )
}
export default CheckBox
