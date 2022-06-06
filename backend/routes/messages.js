import express from 'express';
const router = express.Router();
import {createMessage, getMessages} from '../controllers/messages.js';

router.get('/:conversationId',getMessages);
router.post('/',createMessage);

export default router;