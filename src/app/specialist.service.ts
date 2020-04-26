import { Injectable } from '@angular/core';
import {Specialist} from './specialist';
import {Observable, of} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpecialistService {
  BASE_URL = 'http://127.0.0.1:8000';
  list: Specialist[];

  constructor(private http: HttpClient) {
    this.chooseList(1);
  }

  getTopTen(): Observable<Specialist[]> {
    return this.http.get<Specialist[]>(`${this.BASE_URL}/api/specialists/top_ten/`);
  }

  getSpecialists(): Observable<Specialist[]> {
    return this.http.get<Specialist[]>(`${this.BASE_URL}/api/specialists/`);
  }

  getSpecialist(id: string): Observable<Specialist> {
    return this.http.get<Specialist>(`${this.BASE_URL}/api/specialists/${id}/`);
  }

  getList(id: number): Observable<Specialist[]> {
    return this.http.get<Specialist[]>(`${this.BASE_URL}/api/categories/${id}/specialists/`);
  }

  chooseList(id: number): void {
    this.getList(id).subscribe(list => this.list = list);
  }
}
