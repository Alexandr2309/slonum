import React, { FC } from 'react'
import Heading from '../shared/Heading'
import { headingText } from '../../helpers/data'

const DiplomaInfo: FC = () => {
  return (
    <div>
      <Heading text={headingText.diploma} />
      <p>
        Жюри конкурса рассмотрит работы и выделит победителей по городам и возрастным категориям, а
        также определит другие номинации, подчеркнув уникальную особенность каждого конкретного
        рисунка — дипломы получат все дети!
      </p>
      <p>
        Скачать диплом можно будет в личном кабинете через сутки после окончания конкурса,
        дополнительно вышлем его на e-mail.{' '}
      </p>
      <p>Со слоном к победам напролом!</p>
    </div>
  )
}

export default DiplomaInfo
