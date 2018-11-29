import * as React from 'react';
import Paper, { PaperProps } from '@material-ui/core/Paper';
import styled from '@emotion/styled';
import { theme } from '../theme';

const StyledPaper = styled(Paper as React.SFC<PaperProps>)`
  padding: ${theme.spacing.unit * 2}px;
  & + & {
    margin-top: ${theme.spacing.unit * 4}px;
  }
  & + a {
    margin-top: ${theme.spacing.unit * 4}px;
  }
`;

export const PaperComponent: React.SFC = ({ children, ...props }) => (
  <StyledPaper theme={theme} {...props}>
    {children}
  </StyledPaper>
);
