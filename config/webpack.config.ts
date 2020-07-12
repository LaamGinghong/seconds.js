import { BannerPlugin, Configuration } from 'webpack'
import { resolve } from 'path'
import WebpackBar from 'webpackbar'
import FriendlyErrorsWebpackPlugin from 'friendly-errors-webpack-plugin'
import SizePlugin from 'size-plugin'
import TerserPlugin from 'terser-webpack-plugin'
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin'
import HardSourceWebpackPlugin from 'hard-source-webpack-plugin'

import { PROJECT_ROOT, PROJECT_NAME } from '../constants/env'
import { CleanWebpackPlugin } from 'clean-webpack-plugin'

const configuration: Configuration = {
  entry: resolve(PROJECT_ROOT, 'src', 'index.ts'),
  context: resolve(PROJECT_ROOT),
  output: {
    libraryTarget: 'umd',
    filename: 'index.js',
    path: resolve(PROJECT_ROOT, 'lib'),
  },
  resolve: {
    extensions: ['.ts'],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        options: {
          experimentalFileCaching: true,
          configFile: resolve(PROJECT_ROOT, 'tsconfig.json'),
        },
      },
    ],
  },
  plugins: [
    new WebpackBar(),
    new BannerPlugin({
      raw: true,
      banner: `/** @preserve Powered by ${PROJECT_NAME} (https://github.com/LaamGinghong/seconds.js) */`,
    }),
    new FriendlyErrorsWebpackPlugin(),
    new ForkTsCheckerWebpackPlugin({
      typescript: {
        memoryLimit: 4096,
        configFile: resolve(PROJECT_ROOT, 'tsconfig.json'),
      },
    }),
    new CleanWebpackPlugin(),
    new SizePlugin({ writeFile: false }),
    new HardSourceWebpackPlugin({ info: { mode: 'none', level: 'warn' } }),
  ],
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin({ extractComments: false })],
  },
}

export default configuration
