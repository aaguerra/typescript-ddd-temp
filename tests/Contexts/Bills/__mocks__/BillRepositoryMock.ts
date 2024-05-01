import { Bill }  from '../.../../../../../src/Contexts/Bills/domain/Bill';
import  BillRepository from '../.../../../../../src/Contexts/Bills/domain/BillRepository';

export class BillRepositoryMock implements BillRepository {
  private saveMock: jest.Mock;

  constructor() {
    this.saveMock = jest.fn();
  }

  async save(bill: Bill): Promise<void> {
    this.saveMock(bill);
  }

  assertSaveHaveBeenCalledWith(expected: Bill): void {
    expect(this.saveMock).toHaveBeenCalledWith(expected);
  }

}
