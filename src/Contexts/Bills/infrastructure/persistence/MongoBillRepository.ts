import BillRepository from "../../domain/BillRepository";
import { Bill } from "../../domain/Bill";
import { BillId } from "../../domain/BillId";
import { Nullable } from "../../domain/generic/Nullable";
import { MongoRepository } from "./mongo/MongoRepository";
import BillDocument from "./mongo/models/BillDocument";


export class MongoBillRepository extends MongoRepository<Bill> implements BillRepository {


  save(course: Bill): void | Promise<void> {
    return this.persist(course.id.value, course)
  }

  public async search(id: BillId): Promise<Nullable<Bill>> {
    const collection = await this.collection();
    const document = await collection.findOne<BillDocument>({ _id: id.value });

    return document ? Bill.fromPrimitives({ name: document.name, duration: document.duration, id: id.value }) : null;
  }

  protected collectionName(): string {
    return 'courses';
  }

}
