module.exports = {
  plugins: {
    'posthtml-include': {
      root: './src/partials'
    },
    'posthtml-expressions': {
      locals: {title: 'Great WebApp'}
    }
  }
}