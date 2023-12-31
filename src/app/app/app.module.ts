import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';



import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { RoutesRecognized } from '@angular/router';
import { ROUTES } from './app.routes';
import { EmployeesService } from './services/employees.service';
import { PostsService } from './services/posts.service';
import { EmployeesComponent } from './components/employees/employees.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { PostsComponent } from './components/posts/posts.component';
import { CommentsComponent } from './components/comments/comments.component'; 

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    NavbarComponent,
    EmployeesComponent,
    EmployeeComponent,
    PostsComponent,
    CommentsComponent
  ],
  imports: [BrowserModule, ROUTES, HttpClientModule],
  providers: [EmployeesService, PostsService], 
  bootstrap: [AppComponent]
})
export class AppModule { }
