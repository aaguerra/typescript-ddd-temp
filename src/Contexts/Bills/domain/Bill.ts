import { BillDuration } from "./BillDuration";
import { BillId } from "./BillId";
import { BillName } from "./BillName";
import { AggregateRoot } from "./generic/AggregateRoot";

export class Bill extends AggregateRoot {
  readonly id: BillId;
  readonly name: BillName;
  readonly duration: BillDuration;

  constructor({ id, name, duration }: { id: BillId; name: BillName; duration: BillDuration }) {
    super();
    this.id = id;
    this.name = name;
    this.duration = duration;
  }

  static fromPrimitives(plainData: {
    id: string;
    name: string;
    duration: string;
  }): Bill {
    return new Bill({
      id: new BillId(plainData.id),
      name: new BillName(plainData.name),
      duration: new BillDuration(plainData.duration)
    });
  }

  toPrimitives(): any {
    return {
      id: this.id.value,
      name: this.name.value,
      duration: this.duration.value
    };
  }

}
