module.exports = {
  server: {
    command: `npm start`,
    port: 3000,
    launchTimeout: 30000,
  },
  launch: {
    headless: false,
    slowMo: 50,
    args: [
      '--window-size=1920,1080',
    ],
  },
};
