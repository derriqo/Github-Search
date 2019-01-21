import { Component, OnInit } from '@angular/core';
import {User} from '../user';
import {HttpClient} from '@angular/common/http';
import { NodeCompatibleEventEmitter } from 'rxjs/internal/observable/fromEvent';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user:User;
  users:User[];   
  userid=0;
  constructor(private http:HttpClient) {}

  ngOnInit() {

    interface ApiResponse{
      login:string;
      public_repos:number;
      followers:number;
      following:number;

      
    }
    this.http.get<ApiResponse>("https://api.github.com/users/derriqo?access_token=3c4d302fe2ab129b4c3de84b494a24c8fc5671a8").subscribe(data=>{
        this.user= new User(this.userid++,data.login,data.public_repos,data.followers,data.following)

  })

}

}