import BillRepository from '../domain/BillRepository';
import Bill from '../domain/Bill';

export default class BillCreate {
  private readonly repository: BillRepository;

  constructor(repository: BillRepository) {
    this.repository = repository;
  }

  async run(id: string, name: string, duration: string): Promise<void> {
    const course = new Bill(id, name, duration);

    return await this.repository.save(course);
  }
}
