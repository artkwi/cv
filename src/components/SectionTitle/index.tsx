import React from 'react'
import * as Styled from './styled'

interface IProps {
    title: string;
    id: string;
}

const SectionTitle: React.FunctionComponent<IProps> = ({ title, id }) => {
  return (
    <Styled.Heading id={id}>
      {title}
    </Styled.Heading>
  )
}

export default SectionTitle
