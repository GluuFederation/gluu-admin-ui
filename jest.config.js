module.exports = {
  verbose: true,
  moduleDirectories: ["node_modules", "app","plugins"],
  moduleNameMapper: {
    "\\.(css|scss|less)$": "identity-obj-proxy"
  },
  transform: {
    "^.+\\.[t|j]sx?$": "babel-jest"
  },
  testPathIgnorePatterns: ['\\.snap$', '<rootDir>/node_modules/']
}