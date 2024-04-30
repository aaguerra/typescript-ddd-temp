import { Request, Response } from 'express';
import httpStatus from 'http-status';
import { Controller } from './Controller';
import BillCreate from '../../Contexts/Bills/application/BillCreate';
import Logger from '../../Contexts/Bills/domain/Logger';

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
  constructor(private billCreate: BillCreate, private readonly logger: Logger ) { }

  async run(req: BillPutRequest, res: Response) {
    try {
      const { id, name, duration } = req.body;
      this.logger.info(`${id} = ${name}`)
      await this.billCreate.run( id, name, duration)
      res.status(httpStatus.CREATED).send();
    } catch (error) {
      this.logger.error(`${error}`)
      res.status(httpStatus.INTERNAL_SERVER_ERROR).send();
    }
  }
}
