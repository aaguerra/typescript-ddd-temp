
import { BillNameLengthExceeded } from './BillNameLengthExceeded';
import { StringValueObject } from './value-object/StringValueObject';

export class BillName extends StringValueObject {
  constructor(value: string) {
    super(value);
    this.ensureLengthIsLessThan30Characters(value);
  }

  private ensureLengthIsLessThan30Characters(value: string): void {
    if (value.length > 30) {
      throw new BillNameLengthExceeded(`The Course Name <${value}> has more than 30 characters`);
    }
  }
}
