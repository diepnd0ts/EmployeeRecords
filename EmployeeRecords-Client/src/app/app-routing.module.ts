import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { EmployeesComponent } from './employees/employees.component';
import { EmployeeInfoComponent } from './employee-info/employee-info.component';
import { AuthGuardService } from './auth-guard.service';


const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  //prevents from routing to these paths until logged in
  { path: 'employees', component: EmployeesComponent, canActivate: [AuthGuardService] },  
  { path: 'info/:id', component: EmployeeInfoComponent, canActivate: [AuthGuardService] }
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
})
export class AppRoutingModule { }
