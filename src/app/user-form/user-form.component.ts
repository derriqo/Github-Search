import { Component, OnInit } from '@angular/core';
import {User} from '../user';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  newUser= new User (0,"",0,0,0);

  constructor() { }

  ngOnInit() {
  }

}
