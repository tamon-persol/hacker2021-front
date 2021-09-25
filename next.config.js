const withOffline = require('next-offline');
const path = require('path');
const withPlugins = require('next-compose-plugins');

// NOTE: swrは現状(2020/06)ES6になっていおり、IE11で動かないので個別にトランスパイル
// https://github.com/vercel/swr/issues/278#issuecomment-620387841
const withTM = require('next-transpile-modules')([
  'swr'
]);


const workboxOpts = {
  clientsClaim: true,
  skipWaiting: true,
  cleanupOutdatedCaches: true,
  runtimeCaching: [
    {
      // sample runtime caching
      urlPattern: '/api/*',
      handler: 'NetworkFirst',
      options: {
        cacheableResponse: {
          statuses: [0, 200]
        }
      }
    }
  ]
};

const nextConfig = {
  trailingSlash: true,
  workboxOpts,
  images: {
    // REFER: https://nextjs.org/docs/basic-features/image-optimization#disable-static-imports
    disableStaticImages: true,
  },
  webpack: config => {
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
    };

    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    config.module.rules.push({
      test: /\.(png|jpg|gif)$/,
      type: 'asset/inline',
    });

    return config;
  }
};

module.exports = withPlugins([withTM, withOffline], nextConfig);
