import { check } from "express-validator";

export const createUserValidator = [

    check('username').isString().withMessage('Username must be string'),
]
