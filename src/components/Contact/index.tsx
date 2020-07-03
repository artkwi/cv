import React from 'react';
import * as Styled from './styled';

import { IconManager } from './../../components'

const Contact: React.FunctionComponent = () => {
  return (
    <div>contact
      <IconManager name='Mail' />
      <IconManager name='LinkedIn' />
      <IconManager name='GitHub' />
      <IconManager name='CV' />
    </div>
  );
};

export default Contact;
