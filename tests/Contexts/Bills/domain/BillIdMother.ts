import { BillId } from "../../../../src/Contexts/Bills/domain/BillId";
import { UuidMother } from "./creator/UuidMother";

export class BillIdMother {
  static create(value: string): BillId {
    return new BillId(value);
  }
  static random(): BillId {
    return this.create(UuidMother.random());
  }
}
