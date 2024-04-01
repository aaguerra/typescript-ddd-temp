import Bill from '../../../../src/Contexts/Bills/domain/Bill'
//import BillRepository from '../../../../src/Contexts/Bills/domain/BillRepository'
import BillCreate from '../../../../src/Contexts/Bills/application/BillCreate'
import { BillRepositoryMock } from '../__mocks__/BillRepositoryMock';

describe('Create Bill', () => {
  it('should create a valid Bill', async () => {
    //const save = jest.fn();
    const repository = new BillRepositoryMock();

    const createBill = new BillCreate(repository);

    const id = 'some-id';
    const name = 'some-name';
    const duration = 'some-duration';

    const expectedCourse = new Bill(id, name, duration);

    await createBill.run(id, name, duration);

    repository.assertSaveHaveBeenCalledWith(expectedCourse);
  });
});
