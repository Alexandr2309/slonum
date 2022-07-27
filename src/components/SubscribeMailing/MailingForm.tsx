import React, { FC, useState } from 'react'
import CheckBox from '../UI/CheckBox'
import { policyText } from '../../helpers/data'
import MailingFormActions from './MailingFormActions'

const MailingForm: FC = () => {
  const [checked, setChecked] = useState<boolean>(true)

  return (
    <div>
      <form action="#">
        <MailingFormActions />
        <CheckBox id="mailing" text={policyText.label} checked={checked} setChecked={setChecked} />
      </form>
    </div>
  )
}

export default MailingForm
