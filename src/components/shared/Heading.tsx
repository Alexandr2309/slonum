import React, { FC } from 'react'

const Heading: FC<{ text: string }> = ({ text }) => {
  return <h2 className="section-title" dangerouslySetInnerHTML={{ __html: text }} />
}

export default Heading
