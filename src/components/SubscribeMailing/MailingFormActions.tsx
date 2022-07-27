import FormInput from '../shared/FormInput'
import Button from '../UI/Button'
import React, { FC } from 'react'

const MailingFormActions: FC = () => {
  return (
    <div className="mailing__actions">
      <FormInput ph="Email" />
      <Button cl="" />
    </div>
  )
}
export default React.memo(MailingFormActions)
