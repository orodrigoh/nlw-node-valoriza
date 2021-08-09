"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
var express_1 = require("express");
var CreateUserController_1 = require("./controllers/CreateUserController");
var CreateTagController_1 = require("./controllers/CreateTagController");
var ensureAdmin_1 = require("./middlewares/ensureAdmin");
var AuthenticateUserController_1 = require("./controllers/AuthenticateUserController");
var CreateComplimentController_1 = require("./controllers/CreateComplimentController");
var ensureAuthenticated_1 = require("./middlewares/ensureAuthenticated");
var ListUserSendComplimentsController_1 = require("./controllers/ListUserSendComplimentsController");
var ListUserReceiveComplimentsController_1 = require("./controllers/ListUserReceiveComplimentsController");
var ListTagController_1 = require("./controllers/ListTagController");
var ListUserController_1 = require("./controllers/ListUserController");
var PhotoController_1 = require("./controllers/PhotoController");
var multerConfig_1 = require("./config/multerConfig");
var cloudinaryConfig_1 = require("./config/cloudinaryConfig");
var router = express_1.Router();
exports.router = router;
var createTagController = new CreateTagController_1.CreateTagController();
var createUserController = new CreateUserController_1.CreateUserController();
var authenticateUserController = new AuthenticateUserController_1.AuthenticateUserController();
var createComplimentController = new CreateComplimentController_1.CreateComplimentController();
var listUserSendComplimentsController = new ListUserSendComplimentsController_1.ListUserSendComplimentsController();
var listUserReceiveComplimentsController = new ListUserReceiveComplimentsController_1.ListUserReceiveComplimentsController();
var listTagController = new ListTagController_1.ListTagController();
var listUserController = new ListUserController_1.ListUserController();
var photoControler = new PhotoController_1.PhotoController();
router.post('/users', createUserController.handle);
router.post('/tags', ensureAuthenticated_1.ensureAuthenticated, ensureAdmin_1.ensureAdmin, createTagController.handle);
router.post('/login', authenticateUserController.handle);
router.post('/compliments', ensureAuthenticated_1.ensureAuthenticated, createComplimentController.handle);
router.post('/users/photo', ensureAuthenticated_1.ensureAuthenticated, multerConfig_1.upload, cloudinaryConfig_1.cloudinaryConfig, photoControler.handle);
router.get('/users/compliments/send', ensureAuthenticated_1.ensureAuthenticated, listUserSendComplimentsController.handle);
router.get('/users/compliments/receive', ensureAuthenticated_1.ensureAuthenticated, listUserReceiveComplimentsController.handle);
router.get('/tags', ensureAuthenticated_1.ensureAuthenticated, listTagController.handle);
router.get('/users', ensureAuthenticated_1.ensureAuthenticated, listUserController.handle);