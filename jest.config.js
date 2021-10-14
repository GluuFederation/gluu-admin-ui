module.exports = {
  verbose: true,
  moduleDirectories: ["node_modules", "app","plugins"],
  moduleNameMapper: {
    "\\.(css|scss|less)$": "identity-obj-proxy"
  },
  transform: {
    "^.+\\.[t|j]sx?$": "babel-jest"
  },
  transformIgnorePatterns: ["<rootDir>/node_modules/"],
  // testPathIgnorePatterns: ['\\.snap$', '<rootDir>/node_modules/'],
  globals: {
    "window": {}
  }
}