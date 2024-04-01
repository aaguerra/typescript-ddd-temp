import { Request, Response } from 'express';
import httpStatus from 'http-status';
import { Controller } from './Controller';
import BillCreate from '../../Contexts/Bills/application/BillCreate';

type BillPutRequest = Request & {
  body: {
    id: string;
    name: string;
    duration: string;
  };
};
export class BillPutController implements Controller {
    /**
   * @param {BillCreate} billCreate
   */
  constructor(private billCreate: BillCreate) {}

  async run(req: BillPutRequest, res: Response) {
    try {
      const { id, name, duration } = req.body;
      console.log(`${id} = ${name}`)
      await this.billCreate.run( id, name, duration)
      res.status(httpStatus.CREATED).send();
    } catch (error) {
      res.status(httpStatus.INTERNAL_SERVER_ERROR).send();
    }
  }
}
