import { Bill } from './Bill';

export default interface BillRepository {
  save(bill: Bill): Promise<void> | void;

}
