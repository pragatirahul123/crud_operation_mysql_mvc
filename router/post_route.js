const express = require('express')

const router = express.Router()
const CreateController = require('../Controller/post_demo')

router.post('/',CreateController.post_data)

module.exports =router