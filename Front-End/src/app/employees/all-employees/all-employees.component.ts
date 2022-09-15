import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '../../app.service';
import { EmployeesService } from '../../../Services/employees.service';

declare const $: any;

@Component({
  selector: 'app-all-employees',
  templateUrl: './all-employees.component.html',
  styleUrls: ['./all-employees.component.css']
})
export class AllEmployeesComponent implements OnInit {

  rows = [];
  public updateEmp = [];
  public createEmp:any = {};
  public srch = [];
  addEmployeeValidation:boolean = false;

  public columns:Array<any> = [
    {title: 'Name', name: 'name', sort: true},
    {title: 'Employee ID', name: 'employeeID', sort: true},
    {title: 'Email', name: 'email', sort: true},
    {title: 'Mobile', name: 'mobile', sort: true},
    {title: 'Join Date', name: 'joinDate', sort: true},
    {title: 'Role', name: 'role', sort: true},
    {title: 'Action', name: 'action', sort: true}
  ];

  public allEmployees:boolean = true;

  public modules = [];

  public addEmp:any = {};

  public date: Date = new Date();
  public model: any = {date: {year: this.date.getFullYear(), month: this.date.getMonth() + 1, day: this.date.getDate()}};

  constructor(private appService:AppService,
    private router:Router,
    private employeesService: EmployeesService) {
    this.rows = appService.employees;
    this.srch = [...this.rows];
    this.modules = appService.employee_modules;
  }

  table =[];

  ngOnInit() {
    $('.floating').on('focus blur', function (e) {$(this).parents('.form-focus').toggleClass('focused', (e.type === 'focus' || this.value.length > 0));}).trigger('blur');

    this.getEmployees();
  }


  /* getEmployees(){
    this.table = this.employeesService.EmployeesTable;
    console.log("ALL EMPLOYEES HELLO", this.table);
  }*/



  public empUpt = {};
  public vals = [];

  addReset(){
    let randomnumber = Math.floor(Math.random() * 99);
    //this.createEmp = {'employeeID':randomnumber};
    //console.log(randomnumber)
    this.addEmp = {
      firstName: '',
      lastName:  '',
      employeeID: randomnumber,
      email: '',
      phone:'',
      company:'',
      designation:'',
      userName:'',
      password:'',
      cPassword:'',
      joinDate:{formatted : ""}
    }
    $('#add_employee').modal('show');
  }

  addSubmit(f)
  {
    if (f.invalid === true)
      this.addEmployeeValidation = true;
    else {
      this.addEmployeeValidation = false;
    //console.log(f.form.value);
    this.rows.unshift(f.form.value);
    this.srch.unshift(f.form.value);
    this.rows = this.rows;
    $('#add_employee').modal('hide');
    }
  }

  onEdit(item){
    this.router.navigate(['employees/all-employees/edit'], { queryParams: { 'id': item.employeeID } });
  }

  onDelete(id){
    //console.log("="+id+"=");
    var index = this.rows.findIndex(function(item, i){
      return item.employeeID === id
    });

    //console.log(index);
    if (index > -1) {
        this.rows.splice(index, 1);
        this.srch.splice(index, 1);
    }
    //console.log(this.rows);
    this.rows = this.rows;
  }

  searchID(val) {
    //console.log(val);
    val = val.toString();
    //console.log(this.srch);
    this.rows.splice(0, this.rows.length);
    //console.log(this.rows);
    let temp = this.srch.filter(function(d) {
      //console.log(d.employeeID);
      d.employeeID = d.employeeID.toString();
      return d.employeeID.toLowerCase().indexOf(val) !== -1 || !val;
    });
    //console.log(temp);
    this.rows.push(...temp);
    //console.log(this.rows);
  }

  searchName(val) {
    //console.log(val);
    //console.log(this.srch);
    this.rows.splice(0, this.rows.length);
    //console.log(this.rows);
    let temp = this.srch.filter(function(d) {
      //console.log(d.userName);
      val = val.toLowerCase();
      return d.userName.toLowerCase().indexOf(val) !== -1 || !val;
    });
    //console.log(temp);
    this.rows.push(...temp);
    //console.log(this.rows);
  }

  searchDesg(val) {
    //console.log(val);
    //console.log(this.srch);
    this.rows.splice(0, this.rows.length);
    //console.log(this.rows);
    let temp = this.srch.filter(function(d) {
      //console.log(d.designation);
      val = val.toLowerCase();
      return d.designation.toLowerCase().indexOf(val) !== -1 || !val;
    });
    //console.log(temp);
    this.rows.push(...temp);
    //console.log(this.rows);
  }

  getEmployees(){
    this.employeesService.getEmployees().subscribe(result =>{
      console.log(result)
      this.table = result
    })
  }

}
