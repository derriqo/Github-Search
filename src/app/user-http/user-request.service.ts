import {Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment}from '../../environments/environment'
import {User} from '../user';
// import {resolve} from 'path';
// import {reject} from 'q';


@Injectable()
export class UserRequestService {

  user:User;
  users:User[];   
  userid=0;

  constructor(private http:HttpClient) {
    this.user = new User (0,'',0,0,0)
   }

  userRequest(){
    interface ApiResponse{
      login:string;
      public_repos:number;
      followers:number;
      following:number;      
    }
  
    let promise =new Promise((resolve,reject)=>{
      this.http.get<ApiResponse>(environment.apiUrl).toPromise().then(response=>{
        this.user.login=response.login
        this.user.public_repos=response.public_repos
        this.user.followers=response.followers
        this.user.following=response.following

        resolve()
      },
      
      error=>{
       this.user.login="sorry. project failed. error.."
      //  this.user.public_repos=0


       reject(error)
      } 
    )
  })

  return promise
  
  }

}