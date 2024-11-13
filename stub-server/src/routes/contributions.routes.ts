import { Request, Response } from 'express';
import { contributionsData } from '../data/contributions-data';

export const handleContributions = (req: Request, res: Response) => {
  const params = req.body.params;
  const contentWithAppliedFilters = contributionsData.content;
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
