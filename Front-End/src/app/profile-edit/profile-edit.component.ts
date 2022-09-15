import { Component, OnInit, ViewChild } from '@angular/core';
import { Employee } from '../models/employee';
import { NgForm } from '@angular/forms';
import { EmployeesService } from '../../Services/employees.service';
import { AuthService } from '../../Services/auth.service';

@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile-edit.component.html',
  styleUrls: ['./profile-edit.component.css']
})

export class ProfileEditComponent implements OnInit {

  employee : Employee
  result: boolean = false

  constructor(private employeesService: EmployeesService, private authService: AuthService) {
    this.employee = new Employee(); 
  }

  ngOnInit() {
    this.employeesService.getEmployees().subscribe((employees: Employee[]) => {
      const userId = Number(this.authService.userValue.id)
      this.employee = employees.filter((employee: Employee) => Number(employee.UserId) === userId )[0]
    })

  }

  edit(form: NgForm){
     this.employeesService.editEmployee(this.employee, form.value).subscribe(() => {
        this.result = true
        window.scrollTo({ top: 0, behavior: 'smooth' });
     })

  }
}
