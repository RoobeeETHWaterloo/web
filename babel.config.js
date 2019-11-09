const config = {
  presets: [
    [
      '@babel/preset-env', {
        targets: {
          browsers: [
            'last 2 major versions',
            'not dead',
            'safari >= 9',
            'iOS >= 9',
          ],
          node: 'current',
        },
        useBuiltIns: 'usage',
        corejs: '3',
      },
    ],
    '@babel/preset-react',
  ],
  plugins: [
    '@babel/plugin-transform-runtime',
    '@babel/plugin-transform-destructuring',
    '@babel/plugin-proposal-object-rest-spread',
  ],
}

if (process.env.ENV === 'production') {
  config.plugins.push('transform-react-remove-prop-types')
}


module.exports = config
