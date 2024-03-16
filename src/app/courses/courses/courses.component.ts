import { Observable, catchError, of } from 'rxjs';
import { CoursesService } from './../services/courses.service';
import { Component } from '@angular/core';

import { Course } from '../model/course';

import { AppMaterialModule } from 'src/app/shared/app-material/app-material.module';
import { MatDialog } from '@angular/material/dialog';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';
import { CategoryPipe } from 'src/app/shared/pipes/category.pipe';
import { SharedModule } from 'src/app/shared/shared.module';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [AppMaterialModule, SharedModule],
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent {

  courses$: Observable<Course[]>;

  displayedColumns = ['name', 'category'];

  constructor(
    private courseService: CoursesService,
    public dialog: MatDialog
  ) {

    this.courses$ = this.courseService.list()
    .pipe(
      catchError(error => {
        this.onError('Erro ao carregar cursos.');
        return of([])
      })
    );
  }

  onError(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg
    });
  }


}
