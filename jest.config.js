/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
const config = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  transform: {
    // 将.js后缀的文件使用babel-jest处理
    "^.+\\.(ts|tsx)$": "ts-jest"
  },
  testMatch: ["<rootDir>/tests/**/*.(spec|test).ts?(x)"]
};

export default config