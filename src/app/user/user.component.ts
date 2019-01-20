import { Component, OnInit } from '@angular/core';
import {User} from '../user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users = [
    new User(1,'Derrick'),
    new User(2,'Patrick'),
    new User(3,'Erick'),
    new User(4,'Qrick')
  ]   

  constructor() { }

  ngOnInit() {
  }

}
