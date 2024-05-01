import BillRepository from '../domain/BillRepository';
import { Bill } from '../domain/Bill';
import * as fs from 'fs';
import BSON from 'bson';

export default class FileCourseRepository implements BillRepository {
  private FILE_PATH = `${__dirname}/bills`;

  save(course: Bill): void | Promise<void> {
    fs.writeFileSync(this.filePath(course.id.toString()), BSON.serialize(course));
  }

  private filePath(id: string): string {
    return `${this.FILE_PATH}.${id}.repo`;
  }
}
