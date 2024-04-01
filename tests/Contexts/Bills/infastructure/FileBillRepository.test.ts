import Bill from '../../../../src/Contexts/Bills/domain/Bill';
import FileBillRepository from '../../../../src/Contexts/Bills/infrastructure/FileBillRepository';

describe('Save Course', () => {
  it('should have a course', () => {
    const repository = new FileBillRepository();
    const course = new Bill('id', 'name', 'duration');

    repository.save(course);
  });
});
