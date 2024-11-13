import { Request, Response } from 'express';
import { transactionsData } from '../data/transactions-data';

export const handleTransactions = (req: Request, res: Response) => {
  const params = req.body.params;
  console.log('params', params);
  const contentWithAppliedFilters = transactionsData.content;
  // .filter(el => (req.query.type ? el.type === req.query.type : true));

  //@ts-ignore
  const content = contentWithAppliedFilters.slice(
    params.pagination.size * params.pagination.page,
    params.pagination.size * (params.pagination.page + 1),
  );

  console.log('content...', content.length);

  setTimeout(() => {
    res.json({
      content,
      totalElements: contentWithAppliedFilters.length,
    });
  }, Math.random() * 2000);
};
