import { Router, Request, Response } from 'express';

import textRoutes from 'modules/text/infra/http/routes/text.routes';

const routes = Router();

routes.use(textRoutes);

routes.get('/health', (req: Request, res: Response) => {
  return res.json({ ok: true });
});

export default routes;
