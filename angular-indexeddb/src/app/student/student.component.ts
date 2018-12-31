import { Component, OnInit } from '@angular/core';
import { StudentService } from '../service/student.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css'],
  providers: [StudentService]
})
export class StudentComponent implements OnInit {

  private _service: StudentService;

  constructor(service: StudentService) {
    this._service = service;
  }

  ngOnInit() {
  }

}
