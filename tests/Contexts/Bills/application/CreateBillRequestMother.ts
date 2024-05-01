import { CreateBillRequest } from "../../../../src/Contexts/Bills/application/CreateBillRequest";
import { BillDuration } from "../../../../src/Contexts/Bills/domain/BillDuration";
import { BillId } from "../../../../src/Contexts/Bills/domain/BillId";
import { BillName } from "../../../../src/Contexts/Bills/domain/BillName";
import { BillDurationMother } from "../domain/BillDurationMother";
import { BillIdMother } from "../domain/BillIdMother";
import { BillNameMother } from "../domain/BillNameMother";

export class CreateBillRequestMother {
  static create(id: BillId, name: BillName, duration: BillDuration): CreateBillRequest {
    return { id: id.value, name: name.value, duration: duration.value };
  }

  static random(): CreateBillRequest {
    return this.create(BillIdMother.random(), BillNameMother.random(), BillDurationMother.random());
  }

  static invalidRequest(): CreateBillRequest {
    return {
      id: BillIdMother.random().value,
      name: BillNameMother.invalidName(),
      duration: BillDurationMother.random().value
    };
  }
}
