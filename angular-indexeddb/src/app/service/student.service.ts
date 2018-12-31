import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { IStudent } from '../model/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService extends BaseService {

  constructor() {
    super();
  }

  getStudents() {
    return this.connection.select({
      from: 'Students'
    });
  }

  addStudent(student: IStudent) {
    return this.connection.insert({
      into: 'Students',
      return: true, 
      values: [student]
    })
  }
}
