import { Request, Response } from 'express';
import { validationResult } from 'express-validator';

export const register = (req: Request, res: Response) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  res.status(200).json({ message: 'User registered successfully' });
};

