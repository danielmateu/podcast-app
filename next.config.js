/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: ['is1-ssl.mzstatic.com', 'is2-ssl.mzstatic.com', "is4-ssl.mzstatic.com", "is5-ssl.mzstatic.com", "is3-ssl.mzstatic.com"],
  },
}

module.exports = nextConfig

// const withImages = require('next-images');
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const TerserPlugin = require('terser-webpack-plugin');
// const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

// module.exports = withImages({
//   webpack: (config, { isServer, dev }) => {
//     if (!dev && !isServer) {
//       // Configurar MiniCssExtractPlugin para extraer los estilos en un archivo separado
//       config.plugins.push(
//         new MiniCssExtractPlugin({
//           filename: 'static/css/[name].[contenthash].css',
//         })
//       );
//     }

//     if (dev) {
//       // Configurar el devtool para generar source maps
//       config.devtool = 'cheap-module-source-map';
//     } else {
//       // Configurar la optimización de JavaScript y CSS para producción
//       config.optimization.minimizer = [
//         new TerserPlugin({
//           terserOptions: {
//             compress: {
//               drop_console: true,
//             },
//           },
//         }),
//         new CssMinimizerPlugin(),
//       ];
//     }

//     return config;
//   },
//   reactStrictMode: false,
//   images: {
//     domains: [
//       'is1-ssl.mzstatic.com',
//       'is2-ssl.mzstatic.com',
//       'is4-ssl.mzstatic.com',
//       'is5-ssl.mzstatic.com',
//       'is3-ssl.mzstatic.com',
//     ],
//   },
// });