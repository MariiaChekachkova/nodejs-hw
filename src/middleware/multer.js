import multer from 'multer';
import createHttpError from 'http-errors';

export const upload = multer({
  storage: multer.memoryStorage(),
  limits: {
    fileSize: 2 * 1024 * 1024, // 2MB
  },
  fileFilter: (req, file, callback) => {
    if (!file.mimetype.startsWith('image/')) {
      return callback(createHttpError(400, 'Only images allowed'));
    }

    callback(null, true);
  },
});
