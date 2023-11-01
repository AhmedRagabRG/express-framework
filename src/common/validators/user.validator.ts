import { body } from "express-validator";

export const createUserValidator = [
    body('username').isEmail().withMessage('Username must be string'),
]
