import { Collection, MongoClient } from "mongodb";
import BillRepository from "../../domain/BillRepository";
import Bill from "../../domain/Bill";

interface BillDocument {
  _id: string;
  name: string;
  duration: string;
}

export class MongoBillRepository implements BillRepository {
  constructor(private readonly _client: Promise<MongoClient>) { }

  save(course: Bill): void | Promise<void> {
    return this.persist(course.id, course)
  }

  private async persist(id: string, aggregateRoot: Bill): Promise<void> {

    const collection = await this.collection();

    const document = { ...aggregateRoot.toPrimitives(), _id: id, id: undefined };

    await collection.updateOne({ _id: id }, { $set: document }, { upsert: true });

  }

  private async collection(): Promise<Collection> {
    return (await this._client).db().collection(this.collectionName());
  }

  private collectionName(): string {
    return 'courses';
  }

}
