const path = require('path');
module.exports = {
  enhanceAppFiles: [
    path.resolve(__dirname, 'enhanceAppFile.js'),
    // path.resolve(__dirname, 'snap.js'),
  ],
  globalUIComponents: 'ErraticSignals',
};
