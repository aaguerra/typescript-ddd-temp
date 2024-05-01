import { Bill } from '../../../../src/Contexts/Bills/domain/Bill';
import FileBillRepository from '../../../../src/Contexts/Bills/infrastructure/FileBillRepository';
import { BillMother } from '../domain/BillMother';

describe('Save Course', () => {
  it('should have a course', () => {
    const repository = new FileBillRepository();
    const course: Bill = BillMother.random();
    repository.save(course);
  });
});
