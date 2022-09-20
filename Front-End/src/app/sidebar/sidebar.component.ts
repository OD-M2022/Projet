import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/Services/auth.service';
import { Role } from '../models/role';

declare const $: any;

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})

export class SidebarComponent implements OnInit {
  isAdmin: boolean
  
  constructor (public authService: AuthService) {}

  ngOnInit () {
    this.isAdmin = this.authService.userValue.role === Role.Admin
  }
}

