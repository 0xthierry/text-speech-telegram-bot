import { Router } from 'express';
import multer from 'multer';
import uploadConfig from '@config/upload';
import { store } from '../controllers/audio';

const routes = Router();
const upload = multer(uploadConfig);

routes.post('/audio', upload.single('audio'), store);

export default routes;
