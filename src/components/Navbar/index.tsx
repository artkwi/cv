import React, { useState } from 'react'
import * as Styled from './styled'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav>

      <Styled.Items>
        <Styled.MenuBtn isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} role="button"><Styled.Lines isOpen={isOpen}/></Styled.MenuBtn>
        <Styled.Item title="o mnie">O mnie</Styled.Item>
        <Styled.Item title="wykształcenie">Wykształcenie</Styled.Item>
        <Styled.Item title="Doświadczenie">Doświadczenie</Styled.Item>
        <Styled.Item title="Umiejętności">Umiejętności</Styled.Item>
      </Styled.Items>
    </nav>
  )
}

export default Navbar
