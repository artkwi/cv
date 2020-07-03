import styled from 'styled-components';

export const Wrapper = styled.div<{ size?: number }>`
    font-size: ${({ size }) => (size ? `${size}px` : '40px')};
`;
