import React from 'react';
import * as Styled from './styled';

import { IconManager } from './../../components'

const Contact: React.FunctionComponent = () => {
  return (
    <Styled.Wrapper data-aos="fade-up" data-aos-offset="0">
      <Styled.IconWrapper href="mailto:kwiatkowski.artur.poczta@gmail.com" target="_blank" title="E-mail: kwiatkowski.artur.poczta@gmail.com" data-aos="fade-right" data-aos-offset="0">
        <IconManager name='Mail' />
      </Styled.IconWrapper>
      <Styled.IconWrapper href="https://www.linkedin.com/in/artur-kwiatkowski-7b9b71166/" target="_blank" title="LinkedIn" data-aos="fade-right" data-aos-offset="0">
        <IconManager name='LinkedIn' />
      </Styled.IconWrapper>
      <Styled.IconWrapper href="https://github.com/artkwi" target="_blank" title="GitHub" data-aos="fade-right" data-aos-offset="0">
        <IconManager name='GitHub' />
      </Styled.IconWrapper>
      <Styled.IconWrapper href={process.env.PUBLIC_URL + '/docs/CV_Artur_Kwiatkowski_EN.pdf'} target="_blank" title="CV" data-aos="fade-right" data-aos-offset="0">
        <IconManager name='CV'/>
      </Styled.IconWrapper>
    </Styled.Wrapper>
  );
};

export default Contact;
