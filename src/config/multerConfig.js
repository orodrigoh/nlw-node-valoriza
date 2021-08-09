"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.dataUri = exports.upload = void 0;
var multer_1 = __importDefault(require("multer"));
var path_1 = require("path");
var parser_1 = __importDefault(require("datauri/parser"));
//**** For own server ****
// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, resolve(__dirname, '..', '..', 'uploads' ))
//   },
//   filename: function (req, file, cb) {
//     const uniqueSuffix = `${Date.now()}_${Math.round(Math.random() * 1E9)}${extname(file.originalname)}`;
//     cb(null, uniqueSuffix)
//   }
// })
var storage = multer_1.default.memoryStorage();
function fileFilter(req, file, cb) {
    var ext = path_1.extname(file.originalname.toLowerCase());
    if (ext !== ".jpg" && ext !== ".jpeg" && ext !== ".png") {
        cb(new Error("File type is not supported"), false);
        return;
    }
    cb(null, true);
}
var parser = new parser_1.default();
exports.upload = multer_1.default({ storage: storage, fileFilter: fileFilter }).single('image');
var dataUri = function (req) { return parser.format(path_1.extname(req.file.originalname).toString().toLowerCase(), req.file.buffer); };
exports.dataUri = dataUri;
