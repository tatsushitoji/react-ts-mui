import * as styledComponents from 'styled-components';

const {
  default: styled,
  css,
  keyframes,
  createGlobalStyle,
  ThemeProvider,
  ThemeConsumer,
} = styledComponents as styledComponents.ThemedStyledComponentsModule<
  ThemeInterface
>;

export interface ThemeInterface {
  primaryColor: string;
  primaryColorInverted: string;
}

export { css, createGlobalStyle, keyframes, ThemeProvider, ThemeConsumer };
export default styled;
