const express = require('express')
const router = express.Router()
module.exports = router

const { getPoke } = require('../controllers/index')

router.get('/', getPoke)
