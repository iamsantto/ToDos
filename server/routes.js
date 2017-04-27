const express = require('express')

const router = express.Router()
const protectedRouter = express.Router()

router.route('/test')
  .get((req, res) => {console.log("test")})

protectedRouter.route('/sample')
  .get((req, res) => {console.log("sample")})

module.exports = {
  router,
  protectedRouter
}
