import { BillDuration } from "../../../../src/Contexts/Bills/domain/BillDuration";
import { BillId } from "../../../../src/Contexts/Bills/domain/BillId";
import { BillName } from "../../../../src/Contexts/Bills/domain/BillName";
import { Bill} from "../../../../src/Contexts/Bills/domain/Bill";
import { CreateBillRequest } from "../../../../src/Contexts/Bills/application/CreateBillRequest";
import { BillIdMother } from "./BillIdMother";
import { BillNameMother } from "./BillNameMother";
import { BillDurationMother } from "./BillDurationMother";

export class BillMother {
  static create(id: BillId, name: BillName, duration: BillDuration): Bill {
    return new Bill({ id, name, duration });
  }

  static fromRequest(request: CreateBillRequest): Bill {
    return this.create(
      BillIdMother.create(request.id),
      BillNameMother.create(request.name),
      BillDurationMother.create(request.duration)
    );
  }

  static random(): Bill {
    return this.create(BillIdMother.random(), BillNameMother.random(), BillDurationMother.random());
  }
}
