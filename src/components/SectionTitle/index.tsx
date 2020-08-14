import React from 'react'
import * as Styled from './styled'

interface IProps {
    title: string;
    id: string;
}

const SectionTitle: React.FunctionComponent<IProps> = ({ title, id }) => {
  return (
    <Styled.Heading id={id} data-aos="fade-up">
      {title}
    </Styled.Heading>
  )
}

export default SectionTitle
