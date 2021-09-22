// http://pm2.keymetrics.io/docs/usage/application-declaration/

module.exports = {
  apps: [
    {
      name: 'nodejs-typescript-api',
      script: 'yarn start:production',
      args: [],
      watch: false,
      time: true
    }
  ]
}
