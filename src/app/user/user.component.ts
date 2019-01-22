import { Component, OnInit } from '@angular/core';
import {User} from '../user';
import {HttpClient} from '@angular/common/http';
import { NodeCompatibleEventEmitter } from 'rxjs/internal/observable/fromEvent';
import {UserRequestService} from '../user-http/user-request.service'


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  providers:[UserRequestService],
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user:User;
  users:User[];   
  
  constructor(private http:HttpClient,private userService:UserRequestService) {}

  addNewUser(user){
    this.users.push(user)
  }

  ngOnInit() {

    interface ApiResponse{
      login:string;
      public_repos:number;
      followers:number;
      following:number;

      
    }
    
}

}