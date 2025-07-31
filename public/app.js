"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const authRouter_1 = __importDefault(require("./routes/authRouter"));
const app = (0, express_1.default)();
app.use(express_1.default.urlencoded({ extended: true }));
app.use(express_1.default.json());
app.set('view engine', 'ejs');
app.use('/auth', authRouter_1.default);
app.get('/', (req, res) => {
    res.render('index');
});
app.use((req, res) => {
    res.status(404).send('Error 404');
});
app.listen(3000, () => { console.log('server is running'); });
