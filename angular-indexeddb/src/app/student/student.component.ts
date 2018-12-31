import { Component, OnInit } from '@angular/core';
import { StudentService } from '../service/student.service';
import { IStudent, Student } from '../model/student';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css'],
  providers: [StudentService]
})

export class StudentComponent implements OnInit {

  private service: StudentService;
  students: Array<any> = [];
  newStudent: IStudent = new Student();

  constructor(service: StudentService) {
    this.service = service;
  }

  ngOnInit() {
    this.getStudents();
  }

  getStudents() {
    this.service.getStudents().then(students => {
      this.students = students;
    }).catch(error => {
      console.error(error);
      alert(error.message);
    })
  }

  addStudent() {
    this.service.addStudent(this.newStudent).
      then((addedStudent: IStudent[]) => {
        if (addedStudent.length > 0) {
          this.students.push(addedStudent[0]);
          this.clearNewStudent();
          alert('Successfully added');
        }
      }).catch(error => {
        console.error(error);
        alert(error.message);
      });
  }

  clearNewStudent() {
    this.newStudent = new Student();
  }

}
