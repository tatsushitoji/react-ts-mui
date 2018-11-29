import * as React from 'react';
import styled from '@emotion/styled';
import { theme } from '../theme';
import Typography, { TypographyProps } from '@material-ui/core/Typography';

const Wrapper = styled.div`
  display: flex;
  margin-bottom: ${theme.spacing.unit * 2}px;
`;

const OverLine = styled(Typography as React.SFC<TypographyProps>)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CounterNumber = styled(Typography as React.SFC<TypographyProps>)`
  padding: ${theme.spacing.unit * 2}px;
`;

interface Props {
  count: number;
}

export const CounterCount: React.SFC<Props> = ({ count }) => (
  <Wrapper>
    <OverLine variant="overline">count is ...</OverLine>
    <CounterNumber component="h3" variant="h1">
      {count}
    </CounterNumber>
  </Wrapper>
);
