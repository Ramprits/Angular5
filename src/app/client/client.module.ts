import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ClientComponent } from './client.component';

@NgModule({
  imports: [
    CommonModule, RouterModule.forChild([
      { path: '', pathMatch: 'full', redirectTo: 'client' },
      { path: 'client', component: ClientComponent },
    ])
  ],
  declarations: [ClientComponent]
})
export class ClientModule { }
