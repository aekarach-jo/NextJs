
module.exports = {
  reactStrictMode: false,

  serverRuntimeConfig: {
      secret: 'THIS IS USED TO SIGN AND VERIFY JWT TOKENS, REPLACE IT WITH YOUR OWN SECRET, IT CAN BE ANY STRING'
  },
  publicRuntimeConfig: {
      apiUrl: process.env.NODE_ENV === 'development'
          ? 'http://192.168.1.51:3000/api' // development api
          : 'http://192.168.1.51:3000/api' // production api
  }
}

