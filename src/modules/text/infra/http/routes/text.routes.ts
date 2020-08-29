import { Router } from 'express';
import { store } from '../controllers/text';

const routes = Router();

routes.post('/text', store);

export default routes;
