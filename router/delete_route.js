const express = require('express')

const router = express.Router()
const DeleteController = require('../Controller/delete_demo')

router.delete('/:id',DeleteController.delete_data)

module.exports =router