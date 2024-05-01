import BillRepository from '../domain/BillRepository';
import { Bill } from '../domain/Bill';
import { BillId } from '../domain/BillId';
import { CreateBillRequest } from './CreateBillRequest';
import { BillName } from '../domain/BillName';
import { BillDuration } from '../domain/BillDuration';

export default class BillCreate {
  private readonly repository: BillRepository;

  constructor(repository: BillRepository) {
    this.repository = repository;
  }

  async run(request: CreateBillRequest): Promise<void> {
    const course = new Bill({ id: new BillId(request.id), name: new BillName(request.name), duration: new BillDuration(request.duration) });

    return await this.repository.save(course);
  }
}
