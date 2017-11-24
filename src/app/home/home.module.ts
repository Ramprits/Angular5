import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { PanelModule } from 'primeng/primeng';

@NgModule({
  imports: [
    CommonModule, PanelModule,
    RouterModule.forChild([
      { path: '', pathMatch: 'full', redirectTo: 'home' },
      { path: 'home', component: HomeComponent },
    ])
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }
