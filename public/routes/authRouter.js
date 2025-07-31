"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const authValidate_1 = require("../validators/authValidate");
const authController_1 = require("../Controllers/authController");
const router = (0, express_1.Router)();
router.post('/', authValidate_1.registerValidate, authController_1.register);
router.get('/test', (req, res) => res.send('Auth router works'));
exports.default = router;
