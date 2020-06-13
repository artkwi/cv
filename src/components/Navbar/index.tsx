import React from 'react'
import * as Styled from './styled'

const Navbar = () => {
  return (
    <nav>

      <Styled.Items>
        <Styled.Item title="o mnie">O mnie</Styled.Item>
        <Styled.Item title="wykształcenie">Wykształcenie</Styled.Item>
        <Styled.Item title="Doświadczenie">Doświadczenie</Styled.Item>
        <Styled.Item title="Umiejętności">Umiejętności</Styled.Item>
      </Styled.Items>
    </nav>
  )
}

export default Navbar
