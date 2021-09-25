const path = require('path');

module.exports = {
  // NOTE: warnは出ますが、webpackの設定部分でaliasを書いてるため読み込めます
  stories: ['components/**/*.stories.tsx'],
  addons: [
    '@storybook/addon-actions/register',
    '@storybook/addon-knobs/register',
    '@storybook/addon-notes/register',
    'themeprovider-storybook/register'
  ],
  webpackFinal: async config => {
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      loader: require.resolve('babel-loader'),
      options: {
        presets: [['react-app', { flow: false, typescript: true }]],
      },
    });

    /* storybookでSVGをimportするための設定 */
    config.resolve.extensions.push('.svg')
    config.module.rules = config.module.rules.map(data => {
      if (/svg\|/.test( String(data.test)))
        data.test = /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|cur|ani)(\?.*)?$/
      return data
    })
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    /* storybookでSVGをimportするための設定 */

    config.resolve.extensions.push('.ts', '.tsx');
    config.resolve.alias['components'] = path.resolve(__dirname, '../components');
    config.resolve.alias['modules'] = path.resolve(__dirname, '../modules');
    config.resolve.alias['assets'] = path.resolve(__dirname, '../assets');
    return config;
  },
};