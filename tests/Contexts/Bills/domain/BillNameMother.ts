import { BillName } from '../../../../src/Contexts/Bills/domain/BillName';
import { WordMother } from './creator/WordMother';

export class BillNameMother {
  static create(value: string): BillName {
    return new BillName(value);
  }

  static random(): BillName {
    return this.create(WordMother.random({ maxLength: 20 }));
  }

  static invalidName(): string {
    return "a".repeat(40);
  }
}
