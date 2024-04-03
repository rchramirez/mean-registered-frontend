import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Enrolled } from '../models/enrolled';

@Injectable({
  providedIn: 'root'
})
export class EnrolledService {

  url = 'http://localhost:4000/api/enrolleds/'

  constructor(private http: HttpClient) { }

  getEnrolleds(): Observable<any> {
    return this.http.get(this.url);
  }

  deleteEnrolled(id: string): Observable<any> {
    return this.http.delete(this.url + id);
  }

  saveEnrolled(enrolled: Enrolled): Observable<any> {
    return this.http.post(this.url, enrolled);
  }

  getEnrolled(id: string): Observable<any> {
    return this.http.get(this.url + id);
  }

  editEnrolled(id: string, enrolled: Enrolled): Observable<any> {
    return this.http.put(this.url + id, enrolled);
  }

}
