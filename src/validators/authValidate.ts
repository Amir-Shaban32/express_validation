import { body } from "express-validator";

export const registerValidate = [

  body('name').notEmpty().withMessage('Full name must be typed')
    .matches(/^[A-Za-z\s]+$/).withMessage("name just contain letters not numbers"),

  body('email').isEmail().withMessage('This Email isn\'t valid')
    .matches(/^[a-z0-9._%+-]+@gmail\.com$/).withMessage('email must be at lower case and @gmail.com'),

  body('password').isLength({ min: 8, max: 64 }).withMessage('Password must be more than 7 characters')
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/)
    .withMessage("password must have at least one lowercase character , one uppercase and one number"),

  body('confirmPassword').custom((value, { req }) => {
    if (value !== req.body.password) {
      throw new Error('Confirm password does not match password');
    }
    return true;
  }),

  body('birthdate').isDate().withMessage('Invalid date format')
];
