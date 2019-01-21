import { Component, OnInit } from '@angular/core';
import {User} from '../user';
import {UserService} from 'src/app/users/user.service';
import {HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  providers:[UserService],
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  
  users:User[];   

  constructor(userService:UserService,http:HttpClient) {}

  ngOnInit() {

    interface ApiREsponse{

      
    }
  }

}
