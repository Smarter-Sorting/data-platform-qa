module.exports = {
  extends: 'eslint:recommended',
  parserOptions: {
    ecmaVersion: 9,
    sourceType: 'module',
  },
  globals: {
    require: true,
  },
  extends: ['plugin:mocha/recommended'],
  plugins: ['mocha'],
};
