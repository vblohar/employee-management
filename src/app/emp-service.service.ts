import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmpService {

  constructor(private http: HttpClient) { }

  getEmplyees(): Observable<any>{
      return this.http.get('http://localhost:3000/employees');
      
  }

  deleteEmployee(id: number): Observable<any>{
    return this.http.delete(`http://localhost:3000/employees/${id}`);
  }
}
