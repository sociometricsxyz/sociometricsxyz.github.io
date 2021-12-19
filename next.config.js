const optimizedImages = require('next-optimized-images');
const withPlugins = require('next-compose-plugins');

const nextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      include: /\.(js|ts)x?$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            svgoConfig: {
              plugins: {
                removeViewBox: false,
              },
            },
          },
        },
      ],
    });

    return config;
  },
  publicRuntimeConfig: {
    NODE_ENV: process.env.NODE_ENV,
    BASE_PATH: process.env.BASE_PATH,
    RECAPTCHA_CLIENT_KEY: process.env.RECAPTCHA_CLIENT_KEY,
  },
  serverRuntimeConfig: {
    RECAPTCHA_SERVER_KEY: process.env.RECAPTCHA_SERVER_KEY,
  },
  reactStrictMode: true,
};

module.exports = withPlugins(
  [
    [
      optimizedImages,
      {
        responsive: {
          adapter: require('responsive-loader/sharp'),
        },
      },
    ],
  ],
  nextConfig
);
