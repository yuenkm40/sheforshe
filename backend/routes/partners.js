import express from 'express';
import { getPartners, createPartner} from '../controllers/partners.js'
const router = express.Router();

router.get('/', getPartners);
router.post('/', createPartner);

export default router;