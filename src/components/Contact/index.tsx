import React from 'react';
import * as Styled from './styled';

import { IconManager } from './../../components'

const Contact: React.FunctionComponent = () => {
  return (
    <Styled.Wrapper>
      <Styled.IconWrapper>
        <IconManager name='Mail' />
      </Styled.IconWrapper>
      <Styled.IconWrapper>
        <IconManager name='LinkedIn' />
      </Styled.IconWrapper>
      <Styled.IconWrapper>
        <IconManager name='GitHub' />
      </Styled.IconWrapper>
      <Styled.IconWrapper>
        <IconManager name='CV' />
      </Styled.IconWrapper>
    </Styled.Wrapper>
  );
};

export default Contact;
