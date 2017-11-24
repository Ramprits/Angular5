import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ContactComponent } from './contact.component';

@NgModule({
  imports: [
    CommonModule, RouterModule.forChild([
      { path: '', pathMatch: 'full', redirectTo: 'contact' },
      { path: 'contact', component: ContactComponent },
    ])
  ],
  declarations: [ContactComponent]
})
export class ContactModule { }
