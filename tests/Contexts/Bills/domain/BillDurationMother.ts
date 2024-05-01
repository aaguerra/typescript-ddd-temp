import { BillDuration } from "../../../../src/Contexts/Bills/domain/BillDuration";
import { WordMother } from "./creator/WordMother";

export class BillDurationMother {
  static create(value: string): BillDuration {
    return new BillDuration(value);
  }

  static random(): BillDuration {
    return this.create(WordMother.random({ maxLength: 5 }));
  }
}
