import * as React from 'react';
import styled from '@emotion/styled';
import { theme } from '../theme';
import { Header } from '../organisms';

const MainWrapper = styled.div`
  display: flex;
`;

const MainContainer = styled.div`
  flex-grow: 1;
  padding: ${theme.spacing.unit * 3}px;
  margin-top: ${theme.spacing.unit * 7}px;
  @media (min-width: ${theme.breakpoints.values
      .xs}px) and (orientation: landscape) {
    margin-top: ${theme.spacing.unit * 6}px;
  }
  @media (min-width: ${theme.breakpoints.values.sm}px) {
    margin-top: ${theme.spacing.unit * 8}px;
  }
`;

export const Main: React.SFC = ({ children }) => (
  <MainWrapper>
    <Header />
    <MainContainer theme={theme}>{children}</MainContainer>
  </MainWrapper>
);
