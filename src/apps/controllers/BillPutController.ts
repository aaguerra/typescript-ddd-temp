import { Request, Response } from 'express';
import httpStatus from 'http-status';
import { Controller } from './Controller';

type BillPutRequest = Request & {
  body: {
    id: string;
    name: string;
    duration: string;
  };
};
export class BillPutController implements Controller {
  //constructor(private courseCreator: CourseCreator) {}

  async run(req: BillPutRequest, res: Response) {
    try {
      const { id, name, duration } = req.body;
      console.log(`${id} = ${name} = ${duration} `);
      res.status(httpStatus.CREATED).send();
    } catch (error) {
      res.status(httpStatus.INTERNAL_SERVER_ERROR).send();
    }
  }
}
