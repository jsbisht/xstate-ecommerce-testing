module.exports = {
  server: {
    command: `npm start`,
    port: 3000,
    launchTimeout: 5000,
  },
  launch: {
    headless: false,
    slowMo: 50,
    executablePath:
      "/home/jsbisht/.nvm/versions/node/v10.21.0/lib/node_modules/puppeteer/.local-chromium/linux-782078/chrome-linux/chrome",
  },
};
