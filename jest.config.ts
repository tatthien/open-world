/* eslint-disable */
export default {
  testEnvironment: 'node',
  transform: {
    '^.+\\.[tj]s$': ['ts-jest', { tsconfig: './tsconfig.spec.json' }],
  },
  testMatch: ['**/*.spec.ts?(x)'],
  moduleFileExtensions: ['ts', 'js', 'html'],
}
