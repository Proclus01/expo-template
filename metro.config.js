// Firebase/Expo SDK 53 workaround metro.config.js
const { getDefaultConfig } = require('expo/metro-config');

// Get the default Metro config for the project
const config = getDefaultConfig(__dirname);

// Add 'cjs' extension support
config.resolver.sourceExts.push('cjs');

// Disable package exports enforcement for compatibility
config.resolver.unstable_enablePackageExports = false;

// Export the modified configuration
module.exports = config;
