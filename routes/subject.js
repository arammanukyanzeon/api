import express from 'express';
import { Subject } from '../models/index.js';

const router = express.Router();

router.get('/:topicId', async (req, res) => {
    try {
        const subjects = await Subject.get(req.params.topicId);

        if (subjects) {
            res.status(200).json(subjects)
        } else {
            res.status(404).json({ message: "Subjects not found for topic " + req.params.topicId })
        }
    } catch (err) {
        res.status(500).json({ message: "Error getting Subjects", error: err })
    }
});

export default router;