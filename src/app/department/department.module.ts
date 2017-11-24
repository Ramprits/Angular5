import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DepartmentComponent } from './department.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule, HttpClientModule, RouterModule.forChild([
      { path: '', pathMatch: 'full', redirectTo: 'department' },
      { path: 'department', component: DepartmentComponent }
    ])
  ],
  declarations: [DepartmentComponent],
  providers: []
})
export class DepartmentModule { }
