let router = require('express').Router();
let commentsController = require('../controllers/comments') 

 router.route('/comments').get(commentsController.query).post(commentsController.create)

 module.exports = router