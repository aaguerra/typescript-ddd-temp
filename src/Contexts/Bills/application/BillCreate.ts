import BillRepository from '../domain/BillRepository';
import Bill from '../domain/Bill';

export default class BillCreate {
  private repository: BillRepository;

  constructor(repository: BillRepository) {
    this.repository = repository;
  }

  async run(id: string, name: string, duration: string): Promise<void> {
    console.log(`${id} = ${name}`)
    const course = new Bill(id, name, duration);

    return await this.repository.save(course);
  }
}
