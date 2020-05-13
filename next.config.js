require('dotenv').config()

module.exports = {
  env: {
    MY_PUBLIC_KEY: process.env.MY_PUBLIC_KEY,
    MY_SECRET_KEY: process.env.MY_SECRET_KEY,
  },
}
