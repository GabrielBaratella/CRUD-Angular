import { Observable, delay } from 'rxjs';
import { Injectable } from '@angular/core';

import { Course } from '../model/course';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {

  private API = '/api/courses';

  constructor(private httpClient : HttpClient) {  }

  list(): Observable<Course[]> {
    return this.httpClient.get<Course[]>(this.API).pipe(
      delay(500)
    );
  }
}
