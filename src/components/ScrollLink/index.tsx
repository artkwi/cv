import React from 'react';
import { Link, ScrollLinkProps } from 'react-scroll';

interface IProps extends Pick<ScrollLinkProps<HTMLElement>, 'to' | 'spy' | 'activeClass' | 'smooth' | 'offset' | 'duration'> {
    children: React.ReactNode;
}

const ScrollLink: React.FunctionComponent<IProps> = ({ children, to }) => {
  return (
    <Link
      style={{ flex: 1, height: '100%' }}
      activeClass="active"
      to={to}
      spy={true}
      smooth={true}
      offset={-60}
      duration={500}
    >
      {children}
    </Link>
  );
};

export default ScrollLink;
