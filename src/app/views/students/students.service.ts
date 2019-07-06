import { Student } from "./student.model";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Subject } from "rxjs";
@Injectable({ providedIn: "root" })
export class StudentsService {
  private students: Student[] = [];
  private studentsUpdated = new Subject<Student[]>();
  constructor(private http: HttpClient) {}
  getStudents() {
    this.http
      .get<{ message: string; students: Student[] }>(
        "http://localhost:3000/api/students"
      )
      .subscribe(studentsData => {
        this.students = studentsData.students;
        this.studentsUpdated.next([...this.students]);
      });
    return [...this.students];
  }
  getStudentUpdateListner() {
    return this.studentsUpdated.asObservable();
  }
  addStudent(name: string, email: string) {
    const student: Student = { id: null, name: name, email: email };
    this.students.push(student);
    this.studentsUpdated.next([...this.students]);
  }
}
