import { Router } from 'express';
import auth from '../middleware/auth'
import { getPosts, getPostsBySearch, createPosts, updatePost, deletePost, likePost, getPost } from '../controllers/posts'
const router = Router();

router.get('/', getPosts);
router.get('/:id', getPost);
router.get('/search', getPostsBySearch);
router.post('/', auth, createPosts);
router.patch('/:id', auth, updatePost);
router.delete('/:id', auth, deletePost);
router.patch('/:id/likePost', auth, likePost);

export default router;