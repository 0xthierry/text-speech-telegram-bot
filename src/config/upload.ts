import multer from 'multer';
import { v4 as uuid } from 'uuid';
import { ApplicationConfig } from '@config/env';


const storageDisk = multer.diskStorage({
  destination: ApplicationConfig.storagePath,
  filename(request, file, callback) {
    const fileName = `${uuid()}-${file.originalname}`;
    return callback(null, fileName);
  },
});

const storateStrategy = storageDisk;

export default {
  storage: storateStrategy,
};
