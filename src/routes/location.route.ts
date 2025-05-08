import { Router } from 'express';
import { renderLogin, renderRegister, register, login } from '../controllers/auth.controller';

const router = Router();

router.get('/location', (req, res) => {
    res.render('location'); 
});

export default router;