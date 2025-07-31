import { Router } from 'express';
import { registerValidate } from '../validators/authValidate';
import { register } from '../Controllers/authController';
const router = Router();

router.post('/', registerValidate, register);
router.post('/auth', registerValidate, register);
export default router;
