import FormInput from '../shared/FormInput'
import React, {FC} from 'react'
import {BlobButton} from "../UI/BlobButton";

const MailingFormActions: FC = () => {
  return (
    <div className="mailing__actions">
      <FormInput ph="Email" />
      <BlobButton reverse={true}/>
    </div>
  )
}
export default React.memo(MailingFormActions)
