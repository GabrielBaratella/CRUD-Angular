import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';

import { CoursesRoutingModule } from './courses-routing.module';

import {MatCardModule} from '@angular/material/card';
import { HttpClientModule} from '@angular/common/http'

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CoursesRoutingModule,
    MatListModule,
    MatTableModule,
    MatCardModule,
    HttpClientModule
  ]
})
export class CoursesModule { }
