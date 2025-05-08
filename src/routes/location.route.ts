import { Router } from 'express';
import { authenticateJWT } from '../middleware/auth.middleware';

const router = Router();

router.get('/location', authenticateJWT, (req, res) => {
    res.setHeader('Cache-Control', 'no-store');
    res.render('location'); 
});

export default router;
