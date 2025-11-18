/** @type {import('jest').Config} */
module.exports = {
  testEnvironment: "jest-environment-jsdom",

  transform: {
    "^.+\\.(ts|tsx)$": "babel-jest",
    "^.+\\.(js|jsx)$": "babel-jest",
  },

  moduleNameMapper: {
    "^next/image$": "<rootDir>/__mocks__/nextImageMock.js",
    "^next/router$": "<rootDir>/__mocks__/nextRouterMock.js",
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",
    "\\.(jpg|jpeg|png|gif|webp|svg)$": "<rootDir>/__mocks__/fileMock.js",
  },

  setupFilesAfterEnv: ["@testing-library/jest-dom"],
  setupFiles: ["<rootDir>/jest.setup.js"],

  transformIgnorePatterns: ["node_modules/(?!(lucide-react)/)"],
};
