import React from 'react'
import * as Styled from './styled'

interface IProps {
    title: string;
}

const SectionTitle: React.FunctionComponent<IProps> = ({ title }) => {
  return (
    <Styled.Heading>
      {title}
    </Styled.Heading>
  )
}

export default SectionTitle
