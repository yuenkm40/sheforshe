import express from 'express';
import { getPartnersBySearch, getPartners, getPartner,createPartner} from '../controllers/partners.js'
const router = express.Router();
router.get('/search',getPartnersBySearch);
router.get('/', getPartners);
router.get('/:id',getPartner);
router.post('/', createPartner);

export default router;