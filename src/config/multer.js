import multer from 'multer';
import { extname, resolve } from 'path';

export default {
  fileFilter: (req, file, cb) => {
    if (file.mimetype !== 'image/png' && file.mimetype !== 'image/jpeg') {
      return cb(new multer.MulterError('Arquivo deve ser PNG ou JPG'));
    }

    return cb(null, true);
  },
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, resolve(__dirname, '..', '..', 'uploads', 'images'));
    },

    filename: (req, file, cb) => {
      const uniqueSuffix = `${Date.now()}-${Math.floor(Math.random() * 1e9)}`;
      cb(
        null,
        `image-${
          uniqueSuffix
        }${extname(file.originalname)}`,
      );
    },
  }),
};
