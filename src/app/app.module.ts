import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { OrderModule } from 'ngx-order-pipe';
import { Ng2FilterPipeModule } from 'ng2-filter-pipe';
import {OrderByPipe} from "./orderby.pipe";
import {SelectModule} from 'angular2-select';
import { HomeComponent } from './home/home.component';
import { ImageComponent } from './image/image.component';
import { RouterModule, Routes } from '@angular/router';
import { DataService } from './data.service';
import {LcDatePickerModule} from '@libusoftcicom/lc-datepicker';


const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'image',component: ImageComponent },
  { path: '',
    redirectTo: './image.component.html',
    pathMatch: 'full'
  },
];


@NgModule({
  declarations: [
    AppComponent,OrderByPipe, HomeComponent, ImageComponent
  ],
  imports: [
    RouterModule.forRoot(
     appRoutes,
     { enableTracing: true } // <-- debugging purposes only
   ),
    BrowserModule,FormsModule,OrderModule,Ng2FilterPipeModule,CommonModule,SelectModule,LcDatePickerModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
