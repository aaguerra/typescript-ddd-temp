import BillRepository from '../../../../../src/Contexts/Bills/domain/BillRepository';
import container from '../../../../../src/apps/dependency-injection';
import { EnvironmentArranger } from '../arranger/EnvironmentArranger';
import { BillMother } from '../../domain/BillMother';

const repository: BillRepository = container.get('Bills.domain.BillRepository');
const environmentArranger: Promise<EnvironmentArranger> = container.get('Mooc.EnvironmentArranger');

beforeEach(async () => {
  await (await environmentArranger).arrange();
});

afterAll(async () => {
  await (await environmentArranger).close();
});

describe('CourseRepository', () => {
  describe('#save', () => {
    it('should save a course', async () => {
      const course = BillMother.random();

      await repository.save(course);
    });
  });
});
