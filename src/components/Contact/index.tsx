import React from 'react';
import * as Styled from './styled';

import { IconManager } from './../../components'

const Contact: React.FunctionComponent = () => {
  return (
    <Styled.Wrapper>
      <Styled.IconWrapper href="mailto:kwiatkowski.artur.poczta@gmail.com" target="_blank" title="E-mail: kwiatkowski.artur.poczta@gmail.com">
        <IconManager name='Mail' />
      </Styled.IconWrapper>
      <Styled.IconWrapper href="https://www.linkedin.com/in/artur-kwiatkowski-7b9b71166/" target="_blank" title="LinkedIn">
        <IconManager name='LinkedIn' />
      </Styled.IconWrapper>
      <Styled.IconWrapper href="https://github.com/artkwi" target="_blank" title="GitHub">
        <IconManager name='GitHub' />
      </Styled.IconWrapper>
      <Styled.IconWrapper title="CV">
        <IconManager name='CV' />
      </Styled.IconWrapper>
    </Styled.Wrapper>
  );
};

export default Contact;
