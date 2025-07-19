import express from 'express';
import { addBirthday, getAllBirthdays } from '../controllers/BirthdayController.js';

const router = express.Router();

router.post('/', addBirthday);
router.get('/', getAllBirthdays);


export default router;
