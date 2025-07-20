import express from 'express';
import { addBirthday, getAllBirthdays, updateBirthday, deleteBirthday } from '../controllers/BirthdayController.js';

const router = express.Router();

router.post('/', addBirthday);           // Add a new birthday
router.get('/', getAllBirthdays);        // Get all birthdays
router.put('/:id', updateBirthday);      // Update birthday by ID
router.delete('/:id', deleteBirthday);   //  Delete birthday by ID


export default router;
