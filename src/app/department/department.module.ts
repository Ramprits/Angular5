import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DepartmentComponent } from './department.component';

@NgModule({
  imports: [
    CommonModule, RouterModule.forChild([
      { path: '', pathMatch: 'full', redirectTo: 'department' },
      { path: 'department', component: DepartmentComponent }
    ])
  ],
  declarations: [DepartmentComponent]
})
export class DepartmentModule { }
