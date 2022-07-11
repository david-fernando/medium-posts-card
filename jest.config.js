module.exports = {
  "transform": {
    "^.+\\.[t|j]sx?$": "babel-jest",
  },
  "extensionsToTreatAsEsm": [".ts", ".jsx", ".tsx"],
  "setupFilesAfterEnv": ["./src/tests/SetupTests.ts"],
  "moduleNameMapper": {
    "\\.(css)$": "identity-obj-proxy"
  }
};