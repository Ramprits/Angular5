import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DepartmentComponent } from './department.component';
import { HttpClientModule } from '@angular/common/http';
import { DepartmentService } from './department.service';
import { ApiUrlService } from '../shared/apiUrl.service';
import { DataTableModule, SharedModule, PanelModule } from 'primeng/primeng';
@NgModule({
  imports: [
    CommonModule, HttpClientModule, DataTableModule, PanelModule, RouterModule.forChild([
      { path: '', pathMatch: 'full', redirectTo: 'department' },
      { path: 'department', component: DepartmentComponent }
    ])
  ],
  declarations: [DepartmentComponent],
  providers: [DepartmentService, ApiUrlService]
})
export class DepartmentModule { }
