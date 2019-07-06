import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { MainNavComponent } from "./views/layouts/main-nav/main-nav.component";

import { StudentCreateComponent } from "./views/students/student-create/student-create.component";
import { StudentListComponent } from "./views/students/student-list/student-list.component";
import { DashboardComponent } from "./views/dashboard/dashboard.component";
import { UserListComponent } from "./views/users/user-list/user-list.component";
import { HeaderComponent } from "./views/layouts/header/header.component";
import { FooterComponent } from "./views/layouts/footer/footer.component";
import { AuthComponent } from "./views/auth/login/auth.component";
import { AdminComponent } from "./views/admin/admin.component";
import { SiteComponent } from "./site/site.component";
import { AuthService } from "./views/auth/auth.service";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    StudentCreateComponent,
    StudentListComponent,
    DashboardComponent,
    UserListComponent,
    HeaderComponent,
    FooterComponent,
    AuthComponent,
    AdminComponent,
    SiteComponent
  ],
  imports: [BrowserModule, FormsModule, HttpClientModule, AppRoutingModule],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule {}
