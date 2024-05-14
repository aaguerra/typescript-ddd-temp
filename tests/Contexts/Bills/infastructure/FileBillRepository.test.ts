import { Bill } from '../../../../src/Contexts/Bills/domain/Bill';
import FileBillRepository from '../../../../src/Contexts/Bills/infrastructure/FileBillRepository';
import { BillMother } from '../domain/BillMother';

describe('Save Course', () => {
  it('should have a course', async () => {
    const repository = new FileBillRepository();
    const expectedBill: Bill = BillMother.random();
    await repository.save(expectedBill);

    const course = await repository.search(expectedBill.id.value);
    expect(course).toEqual(expectedBill);

  });
});
