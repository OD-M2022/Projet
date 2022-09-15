import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from 'src/app/models/employee';
import { environment } from '../environments/environment';



@Injectable({
  providedIn: 'root'
})

export class EmployeesService {

  constructor(private http : HttpClient) { }

  getEmployees(){
    return this.http.get<Employee[]>("http://localhost:3000/employees");
  }

  getEmployeeById (id: any): Observable<any> {
    return this.http.get(`${environment.apiUrl}/employees/${ id }`)
  }


  editEmployee(employee, form: any){
    return this.http.put<Employee>(`${environment.apiUrl}/employees/${employee.id}`, form);
  }

}
