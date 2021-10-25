module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  testMatch: [
    '**/tests/integration/**/*.spec.[jt]s?(x)',
    '**/tests/unit/**/*.spec.[jt]s?(x)',
    '**/_tests_/*.[jt]s?(x)',
  ],
  transform: {
    '\\.[jt]sx?$': 'babel-jest',
  },
};
