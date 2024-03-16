import { CoursesService } from './../services/courses.service';
import { Component } from '@angular/core';

import { Course } from '../model/course';

import { AppMaterialModule } from 'src/app/shared/app-material/app-material.module';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [AppMaterialModule],
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent {

  courses: Course[];

  displayedColumns = ['name', 'category']

  a = 11

  constructor(private courseService : CoursesService){

    this.courses = this.courseService.list();
  }

}
