import React, { FC, PropsWithChildren } from 'react'
import { inputPlaceholders } from '../../../helpers/data'
import FormInput from '../../shared/FormInput'

const ApplicationFormInputs: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="form__inputs">
      <div className="form__content">
        {inputPlaceholders.map((ph, i) => (
          <FormInput ph={ph} key={i} />
        ))}
      </div>
    </div>
  )
}

export default React.memo(ApplicationFormInputs)
