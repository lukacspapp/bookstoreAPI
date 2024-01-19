"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const books_1 = __importDefault(require("./routes/books"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((req, _res, next) => {
    console.log(`🚨🚨 Incoming request ${req.method} = ${req.url}`);
    next();
});
app.use('/api', books_1.default);
app.use('*', (_req, res) => {
    res.status(404).json({ message: 'Resource not found' });
});
exports.default = app;
