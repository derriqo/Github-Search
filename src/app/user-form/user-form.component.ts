import { Component, OnInit, Output ,EventEmitter } from '@angular/core';
import {User} from '../user';
import { UserRequestService} from '../user-http/user-request.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  providers:[UserRequestService],
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  userName="";
  user:User;
  display=false;
  @Output() addUser=new EventEmitter<User>();
  // submitUser(){
  //   this.addUser.emit(this.newUser);
  // }
constructor(private userService:UserRequestService){}
  showUser(){
    this.display=true;
    this.userService.userRequest(this.userName);
    this.user=this.userService.user;
  }

  ngOnInit() {
   

  }

}
