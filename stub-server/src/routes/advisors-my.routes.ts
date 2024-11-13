import { Request, Response } from 'express';
import { advisorsData } from '../data/advisors-my-data';

export const handleAdvisorsMy = (req: Request, res: Response) => {
  setTimeout(() => {
    res.json(advisorsData);
  }, Math.random() * 2000);
};
