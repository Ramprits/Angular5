import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'home', loadChildren: 'app/home/home.module#HomeModule' },
  { path: 'client', loadChildren: 'app/client/client.module#ClientModule' },
  { path: 'department', loadChildren: 'app/department/department.module#DepartmentModule' },
  { path: 'contact', loadChildren: 'app/contact/contact.module#ContactModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
