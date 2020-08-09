import React from 'react';
// eslint-disable-next-line no-unused-vars
import { IconNames } from './../../types/commonTypes';
import * as Icons from './../../shared/SVGs';
import * as Styled from './styled';

interface IProps {
    name: IconNames;
    className?: string;
}

const IconManager: React.FunctionComponent<IProps> = ({ name, className }) => {
  const Icon = Icons[name];
  return (
    <Styled.IconHolder className={className}>
      <Icon />
    </Styled.IconHolder>
  );
};

export default IconManager;
