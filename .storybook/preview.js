import { theme as mui } from 'modules/styles/muiTheme';
import { muiTheme } from 'storybook-addon-material-ui';
import { theme } from 'modules/styles/theme';
import { withThemesProvider } from "themeprovider-storybook";
import 'modules/styles/reset.css';
import './main.css';
import './nextRouterMock.js';

const themes = [theme];

// FIXME-UI: styled-components / material-ui 使う方に合わせて不要なproviderのdecoratorを削除してください

// NOTE: muiTheme(mui) → Material-UIのテーマプロバイダ
// NOTE: withThemesProvidder(themes) → styled-componentsのテーマプロバイダ
export const decorators = [muiTheme(mui), withThemesProvider(themes)];
