const {
  VantResolver
} = require('unplugin-vue-components/resolvers');
const ComponentsPlugin = require('unplugin-vue-components/webpack');
module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        'src': '@',
        'assets': '@/assets',
        'common': '@/common',
        'components': '@/components',
        'network': '@/network',
        'views': '@/views'
      }
    },
    plugins: [
      ComponentsPlugin({
        resolvers: [VantResolver()],
      }),
    ],
  }
}
