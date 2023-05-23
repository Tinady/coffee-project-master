// jest.config.js
exports = {
  // Other Jest configuration options...
  testMatch: [
    "**/tests/**/index.test.js", // Match test files in the 'tests' folder and its subfolders
    // "**/__tests__/**/*.test.js", // Match test files in the '__tests__' folder and its subfolders
    // "**/*.test.js", // Match test files in the project root directory
  ],
  collectCoverageFrom: [
    "**/tests/**",
    "!**/*.js", // Include all JavaScript and JSX files
    // "!**/node_modules/**", // Exclude files in the 'node_modules' folder
    // "**/*.test.js", // Exclude files ending with '.test.js'
    // "!**/*.spec.js", // Exclude files ending with '.spec.js'
  ],
};
