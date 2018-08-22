import { Injectable } from '@angular/core';

import { User } from './user';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}

@Injectable({
  providedIn: 'root'
})

export class LoginService {

  loginUrl: string = "http://localhost:8080/api/login";
  user: string = "";
  loggedIn: boolean = false;

  constructor(
    private messageService: MessageService,
    private http: HttpClient) { }

  isLoggedIn(): boolean {
    return this.loggedIn;
  }

  login(user: string): void {
    this.user = user;
    this.log(this.user + " has logged in");
    this.loggedIn = true;
  }
  logout(): void {
    this.log(this.user + " has logged out");
    this.user = "";
    this.loggedIn = false;
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.loginUrl)
    .pipe(
      tap(_ => this.log("Fetching all users")),
      catchError(this.handleError<User[]>("getUsers", []))
    );
  }

  verifyUser(user: User): Observable<any> {
    return this.http.post(this.loginUrl, user, httpOptions)
      .pipe(
        tap(_ => this.log(`verifying ${user.username}`)),
        catchError(this.handleError<any>("verifyUser"))
      );
  }

  private log(message: string): void {
    this.messageService.add(`LoginService: ${message}`);
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    }
  }
}
