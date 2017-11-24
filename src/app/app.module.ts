import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// App component here.
import { DashboardComponent } from './dashboard.component';

// Primeng Api here
import { PanelModule } from 'primeng/primeng';
import { ApiUrlService } from './shared/apiUrl.service';
import { HttpClientModule } from '@angular/common/http';
import { DepartmentService } from './department/department.service';

@NgModule({
  declarations: [
    AppComponent, DashboardComponent
  ],
  imports: [
    BrowserModule, HttpClientModule,
    BrowserAnimationsModule,
    PanelModule,
    AppRoutingModule
  ],
  providers: [ApiUrlService, DepartmentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
