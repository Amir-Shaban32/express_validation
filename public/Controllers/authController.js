"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.register = void 0;
const express_validator_1 = require("express-validator");
const register = (req, res) => {
    const errors = (0, express_validator_1.validationResult)(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    res.status(200).json({ message: 'User registered successfully' });
};
exports.register = register;
