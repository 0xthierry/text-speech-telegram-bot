import express, { Request, Response, NextFunction } from 'express';
import 'express-async-errors';
import AppError from '../../errors/AppError';
import { ApplicationConfig } from '@config/env';
import { logger } from '../providers/Logger';
import routes from './routes';

const app = express();

app.use(express.json());
app.use('/files', express.static(ApplicationConfig.storagePath));
app.use(routes);

app.use(
  (error: Error, request: Request, response: Response, _: NextFunction) => {


    if (error instanceof AppError) {
      return response
        .status(error.statusCode)
        .json({ error: error.message, status: 'error' });
    }

    logger.error(error.message);

    return response
      .status(500)
      .json({ status: 'error', message: 'Internal server error' });
  },
);

app.listen(ApplicationConfig.server.port, () => {
  logger.info(`Server started on port ${ApplicationConfig.server.port}!`);
});
