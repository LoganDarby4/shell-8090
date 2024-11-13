import { Request, Response } from 'express';

import { accountsMyData } from '../data/accounts-my-data';

export const handleAccountsMy = (req: Request, res: Response) => {
  setTimeout(() => {
    res.json(accountsMyData);
  }, Math.random() * 2000);
};
