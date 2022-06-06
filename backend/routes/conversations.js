import express from 'express';
const router = express.Router();
import {createConversation, getConversations} from '../controllers/conversations.js'

router.post('/',createConversation);
router.get('/:userId', getConversations);

export default router;