import { Router, Request, Response } from 'express';
import container from '../dependency-injection';
import { body } from 'express-validator';
import { validateReqSchema } from '.';

export const register = (router: Router) => {
  const reqSchema = [
    body('id').exists().isString(),
    body('name').exists().isString(),
    body('duration').exists().isString()
  ];

  const billPutController = container.get('Apps.controllers.BillPutController');
  router.put('/bills/:id', reqSchema, validateReqSchema, (req: Request, res: Response) =>
    billPutController.run(req, res)
  );
};
