module.exports = {
  testIgnorePatterns: ["/node_modules/"],
  setupFilesAfterEnv: [
    "<rootDir>/src/tests/setupTest.ts"
  ],
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "<rootDir>/node_modules/babel-jest"
  },
  testEnvironment: 'jsdom',
  extensionsToTreatAsEsm: [".ts", ".tsx"],
  transformIgnorePatterns: ['/node_modules/(?!(axios)/)'],
}