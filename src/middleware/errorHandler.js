import { HttpError } from 'http-errors';
import multer from 'multer';
export const errorHandler = (err, req, res, next) => {
  if (err instanceof multer.MulterError && err.code === 'LIMIT_FILE_SIZE') {
    return res
      .status(413)
      .json({ message: 'File too large. Maximum size is 2MB.' });
  }
  if (err instanceof HttpError) {
    return res.status(err.status).json({ message: err.message });
  }
  res.status(500).json({ message: 'Something went wrong' });
};
