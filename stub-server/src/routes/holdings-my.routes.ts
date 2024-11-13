import { Request, Response } from 'express';
import { holdingsMyData } from '../data/holdings-my-data';

export const handleHoldingsMy = (req: Request, res: Response) => {
  setTimeout(() => {
    res.json(holdingsMyData);
  }, Math.random() * 2000);
};
