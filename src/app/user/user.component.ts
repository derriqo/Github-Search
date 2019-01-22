import { Component, OnInit } from '@angular/core';
import {User} from '../user';
import {HttpClient} from '@angular/common/http';

import {UserRequestService} from '../user-http/user-request.service'


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  providers:[UserRequestService],
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  // userDetails="";
  user:User;
  // users:User[];   
  
  constructor(private http:HttpClient,private userService:UserRequestService) {}

  ngOnInit() {

    this.userService.userRequest("derriqo");
    this.user=this.userService.user;

}

}