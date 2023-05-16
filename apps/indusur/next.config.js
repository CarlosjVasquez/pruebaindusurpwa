//@ts-check

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { withNx } = require('@nrwl/next/plugins/with-nx');
const withPWA = require('next-pwa')({
  dest: 'public',
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === 'development',
});

/**
 * @type {import('@nrwl/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: true,
  },
  // output: 'standalone',
  nx: {
    // Set this to true if you would like to to use SVGR
    // See: https://github.com/gregberge/svgr
    svgr: false,
  },
  // assetPrefix: '/cuadroVenta',
  // basePath: '/cuadroVenta',
  // trailingSlash: true,
  // exportPathMap: function () {
  //   return {
  //     '/': { page: '/' },
  //     '/sales': { page: '/sales' },
  //   };
  // },
};

module.exports = withPWA(withNx(nextConfig));
