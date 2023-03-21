"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _multer = require('multer'); var _multer2 = _interopRequireDefault(_multer);
var _path = require('path');

exports. default = {
  fileFilter: (req, file, cb) => {
    if (file.mimetype !== 'image/png' && file.mimetype !== 'image/jpeg') {
      return cb(new _multer2.default.MulterError('Arquivo deve ser PNG ou JPG'));
    }

    return cb(null, true);
  },
  storage: _multer2.default.diskStorage({
    destination: (req, file, cb) => {
      cb(null, _path.resolve.call(void 0, __dirname, '..', '..', 'uploads', 'images'));
    },

    filename: (req, file, cb) => {
      const uniqueSuffix = `${Date.now()}-${Math.floor(Math.random() * 1e9)}`;
      cb(
        null,
        `image-${
          uniqueSuffix
        }${_path.extname.call(void 0, file.originalname)}`,
      );
    },
  }),
};
