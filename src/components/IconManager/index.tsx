import React from 'react';
// eslint-disable-next-line no-unused-vars
import { IconNames } from './../../types/commonTypes';
import * as Icons from './../../shared/SVGs';

interface IProps {
    name: IconNames;
}

const IconManager: React.FunctionComponent<IProps> = ({ name }) => {
  const Icon = Icons[name];
  return (
    <Icon/>
  );
};

export default IconManager;
