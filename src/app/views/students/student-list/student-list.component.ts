import { Component, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { Student } from "../student.model";
import { StudentsService } from "../students.service";

@Component({
  selector: "app-student-list",
  templateUrl: "./student-list.component.html",
  styleUrls: ["./student-list.component.css"]
})
export class StudentListComponent implements OnInit {
  students: Student[] = [];
  private studentsSub: Subscription;
  constructor(public studentService: StudentsService) {}

  ngOnInit() {
    this.studentService.getStudents();
    this.studentsSub = this.studentService
      .getStudentUpdateListner()
      .subscribe((students: Student[]) => {
        this.students = students;
      });
  }
  ngOnDestroy() {
    this.studentsSub.unsubscribe();
  }
}
