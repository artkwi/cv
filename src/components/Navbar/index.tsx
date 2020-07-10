import React, { useState } from 'react';
import * as Styled from './styled';
import { ScrollLink } from './../../components';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Styled.Nav isOpen={isOpen}>
      <Styled.MenuBtn
        isOpen={isOpen}
        onClick={() => setIsOpen(!isOpen)}
        role="button"
        aria-label="menu"
      >
        <Styled.Lines isOpen={isOpen} />
      </Styled.MenuBtn>
      <Styled.Items isOpen={isOpen}>
        <ScrollLink to="about-me">
          <Styled.Item
            onClick={() => setIsOpen(!isOpen)} title="o mnie">O mnie</Styled.Item>
        </ScrollLink>
        <ScrollLink to="education">
          <Styled.Item onClick={() => setIsOpen(!isOpen)} title="wykształcenie">
                        Wykształcenie
          </Styled.Item>
        </ScrollLink>
        <ScrollLink to="work-experience">
          <Styled.Item onClick={() => setIsOpen(!isOpen)} title="Doświadczenie">
                        Doświadczenie
          </Styled.Item>
        </ScrollLink>
        <ScrollLink to="skills">
          <Styled.Item onClick={() => setIsOpen(!isOpen)} title="Umiejętności">Umiejętności</Styled.Item>
        </ScrollLink>
        <ScrollLink to="contact">
          <Styled.Item onClick={() => setIsOpen(!isOpen)} title="Kontakt">Kontakt</Styled.Item>
        </ScrollLink>
      </Styled.Items>
    </Styled.Nav>
  );
};

export default Navbar;
