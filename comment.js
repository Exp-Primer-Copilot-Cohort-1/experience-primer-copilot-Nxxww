const express = require('express');
const router = express.Router();
const commentController = require('../controllers/comment')

router.get('/', commentController.comment_list);
router.get('/create', commentController.comment_create_get);
router.pst('/create', commentController.comment_create_post);
router.get('/:id/delete', commentController.comment_delete);