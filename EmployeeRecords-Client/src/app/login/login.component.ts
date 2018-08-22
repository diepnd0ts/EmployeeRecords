import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { MessageService } from '../message.service';
import { User } from '../user';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: User = new User;
  users: User[] = [];
  result: boolean;

  constructor(
    private loginService: LoginService,
    private messageService: MessageService,
    private router: Router) { }

  ngOnInit() {
    this.getAllUsers();
  }

  getAllUsers() {
    this.loginService.getUsers().subscribe(users => this.users = users);
  }

  userLogin(): void {
    this.loginService.verifyUser(this.user).subscribe(result => {
      if (result) {
        this.loginService.login(this.user.username);
        this.router.navigate(["/employees"]);
      }
      else {
        this.messageService.add("Invalid username or password!");
        alert(this.messageService.messages[this.messageService.messages.length-1]);
      }
    });
  }
}
