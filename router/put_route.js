const express = require('express')

const router = express.Router()
const UpdateController = require('../Controller/put_demo')

router.put('/:id',UpdateController.update_data)

module.exports =router