const cracoAlias = require('craco-alias');

// webpack configuration
module.exports = {
  plugins: [
    {
      plugin: cracoAlias,
      options: {
        baseUrl: './src',
        source: 'jsconfig',
      },
    },
  ],
};
