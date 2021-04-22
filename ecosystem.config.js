module.exports = {
    apps: [
      {
        name: 'my-express-app',
        script: 'npm',
        args: 'run start',
        interpreter: 'none',
        env: {
          NODE_ENV: 'development',
        },
      },
    ],
  }