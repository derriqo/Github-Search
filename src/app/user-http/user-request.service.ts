import {Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment}from '../../environments/environment'
import {User} from '../user';
import {Repository} from '../repository'


@Injectable()
export class UserRequestService {
  // userDetails="";
  user:User;
  // users:User[];   


  constructor(private http:HttpClient) {
    this.user = new User (0,'',0,0,0)
   }

  userRequest(username:string){
    if (username!=""){
    interface ApiResponse{
      login:string;
      public_repos:number;
      followers:number;
      following:number;      
    }
  
    let promise =new Promise((resolve,reject)=>{
      this.http.get<ApiResponse>(environment.apiUrl+username+environment.token).toPromise().then(response=>{
        this.user.login=response.login
        this.user.public_repos=response.public_repos
        this.user.followers=response.followers
        this.user.following=response.following

        resolve()
      },
      
      error=>{reject(error)
      } 
    )
  })
  return promise;
}
  
  
}

}
