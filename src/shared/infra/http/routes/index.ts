import { Router, Request, Response } from 'express';

import textRoutes from '@modules/text/infra/http/routes/text.routes';
import audioRoutes from '@modules/audio/infra/http/routes/audio.routes';

const routes = Router();

routes.use(audioRoutes);
routes.use(textRoutes);

routes.get('/health', (req: Request, res: Response) => {
  return res.json({ ok: true });
});

export default routes;
