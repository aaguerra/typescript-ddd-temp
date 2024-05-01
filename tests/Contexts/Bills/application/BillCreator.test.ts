//import { Bill} from '../../../../src/Contexts/Bills/domain/Bill'
//import BillRepository from '../../../../src/Contexts/Bills/domain/BillRepository'
import BillCreate from '../../../../src/Contexts/Bills/application/BillCreate'
import { BillRepositoryMock } from '../__mocks__/BillRepositoryMock';
import { CreateBillRequestMother } from './CreateBillRequestMother';
import { BillMother } from '../domain/BillMother';
import { BillNameLengthExceeded } from '../../../../src/Contexts/Bills/domain/BillNameLengthExceeded';

let repository: BillRepositoryMock;
let creator: BillCreate;

beforeEach(() => {
  repository = new BillRepositoryMock();
  creator = new BillCreate(repository);
});

describe('CourseCreator', () => {
  it('should create a valid course', async () => {
    const request = CreateBillRequestMother.random();

    const course = BillMother.fromRequest(request);

    await creator.run(request);

    repository.assertSaveHaveBeenCalledWith(course);
  });

  it('should throw error if course name length is exceeded', async () => {
    expect(() => {
      const request = CreateBillRequestMother.invalidRequest();

      const course = BillMother.fromRequest(request);

      creator.run(request);

      repository.assertSaveHaveBeenCalledWith(course);
    }).toThrow(BillNameLengthExceeded);
  });
});
