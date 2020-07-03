import React from 'react';
import * as Styled from './styled';
// eslint-disable-next-line no-unused-vars
import { IconNames } from './../../types/commonTypes';
import * as Icons from './../../shared/SVGs';

interface IProps {
    name: IconNames;
    size?: number;
}

const IconManager: React.FunctionComponent<IProps> = ({ name, size }) => {
  const Icon = Icons[name];
  return (
    <Styled.Wrapper size={size}>
      <Icon/>
    </Styled.Wrapper>
  );
};

export default IconManager;
