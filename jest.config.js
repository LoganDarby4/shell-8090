/** @type {import('ts-jest').JestConfigWithTsJest} **/
module.exports = {
  preset: "jest-preset-angular",
  setupFilesAfterEnv: ["<rootDir>/setup-jest.js"],
  transformIgnorePatterns: ["node_modules/(?!.*\\.mjs$)"],
  moduleDirectories: ["node_modules", "<rootDir>"],
  moduleNameMapper: {
    "^@store/(.*)$": "<rootDir>/src/app/store/$1",
    "^@shared/(.*)$": "<rootDir>/src/app/shared/$1",
    "^@core/(.*)$": "<rootDir>/src/app/core/$1",
    "^@api/(.*)$": "<rootDir>/src/app/core/api/$1",
    "^@models/(.*)$": "<rootDir>/src/app/core/models/$1",
  },
  coverageThreshold: {
    global: {
      statements: 80,
    },
  },
};
