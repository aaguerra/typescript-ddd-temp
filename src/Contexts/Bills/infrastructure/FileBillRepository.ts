import BillRepository from '../domain/BillRepository';
import { Bill } from '../domain/Bill';
import * as fs from 'fs';
import BSON from 'bson';

export default class FileCourseRepository implements BillRepository {
  private FILE_PATH = `${__dirname}/bills`;

  async save(course: Bill): Promise<void> {
    fs.promises.writeFile(this.filePath(course.id.toString()), BSON.serialize(course));
  }

  async search(courseId: string): Promise<Bill> {
    const courseData = await fs.promises.readFile(this.filePath(courseId));
    const { id, name, duration } = BSON.deserialize(courseData);
    return new Bill({ id, name, duration });
  }

  private filePath(id: string): string {
    return `${this.FILE_PATH}.${id}.repo`;
  }


}
