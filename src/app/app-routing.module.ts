import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { StudentListComponent } from "./views/students/student-list/student-list.component";
import { StudentCreateComponent } from "./views/students/student-create/student-create.component";
import { DashboardComponent } from "./views/dashboard/dashboard.component";
import { UserListComponent } from "./views/users/user-list/user-list.component";
import { AuthComponent } from "./views/auth/login/auth.component";
import { AdminComponent } from "./views/admin/admin.component";
import { AppComponent } from "./app.component";
import { SiteComponent } from "./site/site.component";

const routes: Routes = [
  {
    path: "admin",
    component: SiteComponent,
    children: [
      { path: "dashboard", component: DashboardComponent },
      { path: "students", component: StudentListComponent },
      { path: "students/create", component: StudentCreateComponent }
    ]
  },
  {
    path: "auth",
    component: AppComponent,
    children: [
      { path: "login", component: AuthComponent },
      { path: "register", component: AuthComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
