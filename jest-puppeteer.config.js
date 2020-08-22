module.exports = {
  server: {
    command: `npm start`,
    port: 3000,
    launchTimeout: 5000,
  },
  launch: {
    headless: false,
    slowMo: 250,
    executablePath:
      "/usr/local/Cellar/node/14.8.0/lib/node_modules/puppeteer/.local-chromium/mac-782078/chrome-mac/Chromium.app/Contents/MacOS/Chromium",
  },
};
