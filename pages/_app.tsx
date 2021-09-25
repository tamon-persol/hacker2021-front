import React from 'react';
import App, { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { theme } from 'modules/styles/theme';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { theme as muiTheme } from 'modules/styles/muiTheme';
import 'modules/styles/reset.css';

export default class extends App<AppProps> {
  public render(): JSX.Element {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const { Component, pageProps } = this.props;

    return (
      // FIXME-UI: styled-components / material-ui 使う方に合わせて不要なproviderを削除してください
      <ThemeProvider theme={theme}>
        <MuiThemeProvider theme={muiTheme}>
          <Component {...pageProps} />
        </MuiThemeProvider>
      </ThemeProvider>
    );
  }
}
