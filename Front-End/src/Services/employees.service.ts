import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Employee } from 'src/app/models/employee';
import { User } from 'src/app/models/user';
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
  
  getEmployeeRole (user: User): any {
    const headers = { headers: new HttpHeaders().set('Authorization', `Bearer ${ user.token }`) }
    return this.http.get(`${environment.apiUrl}/employees`, headers)
      .pipe(map((employees: Employee[]) => this.getRole(employees, user.id)))
  }

  private getRole (employees:Employee[], userId: number) {
    const employee =  employees.filter((employee: Employee) => Number(employee.UserId) === Number(userId))[0]
    if (employee) {
      return employee.Role
    }
    return null
  }
}
