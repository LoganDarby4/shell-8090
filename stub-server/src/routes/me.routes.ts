import { Request, Response } from 'express';
import { meData } from '../data/me-data';

export const handleMe = (req: Request, res: Response) => {
  setTimeout(() => {
    res.json(meData);
  }, Math.random() * 2000);
};
