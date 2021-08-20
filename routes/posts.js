import express from "express";
import {isAuth} from '../middleware/auth.js';
import {create,favorite,comment, getFeed, getPost,sendText} from '../controllers/postControllers.js';
const router = express.Router();

router.post('/create',isAuth,create);

router.post('/like-post',isAuth,favorite)


router.post('/add-comment',isAuth,comment)

router.get('/get-feed',getFeed)

router.get('/:id', getPost)

router.post('/send-text',sendText)


export default router;