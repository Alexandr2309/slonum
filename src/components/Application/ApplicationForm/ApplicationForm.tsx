import React, { FC, useState } from 'react'
import { policyText } from '../../../helpers/data'
import ApplicationFormInputs from './ApplicationFormInputs'
import CheckBox from '../../UI/CheckBox'
import ApplicationSubmit from './ApplicationSubmit'

const ApplicationForm: FC = () => {
  const [isChecked, setIsChecked] = useState<boolean>(true)

  return (
    <form action="#" className="app-form">
      <ApplicationFormInputs />
      <CheckBox
        id="application"
        text={policyText.label}
        checked={isChecked}
        setChecked={setIsChecked}
      />
      <ApplicationSubmit />
    </form>
  )
}

export default ApplicationForm
