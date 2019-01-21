import { Component, OnInit } from '@angular/core';
import {User} from '../user';
import {UserService} from 'src/app/users/user.service';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  providers:[UserService],
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  
  users:User[];   

  constructor(userService:UserService) { 
    this.users= userService.getUsers()
  }

  ngOnInit() {
  }

}
