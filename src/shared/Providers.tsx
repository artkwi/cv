import React, { ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';
import theme from './theme';

interface Props {
    children: ReactNode;
}

const Providers = ({ children }: Props) => (
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Providers;
