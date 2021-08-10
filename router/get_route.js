const express = require('express')

const router = express.Router()
const GetController = require('../Controller/get_demo')

router.get('/',GetController.get_data)

module.exports =router