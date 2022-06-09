import express from 'express';
const router = express.Router();
import {createEvent, getEvents, getEvent} from '../controllers/events.js'

router.post('/', createEvent);
router.get('/', getEvents);
router.get('/:id', getEvent);

export default router;