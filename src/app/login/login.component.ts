import { Component } from '@angular/core';
import { LoginCredentialsService } from '../login-credentials.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
public loginCreds: any = []

  constructor(private _loginCreds:LoginCredentialsService, private _router:Router){
     _loginCreds.getChatHistory().subscribe(
      (data:any)=>{
        this.loginCreds = data;
      },
      (err:any)=>{
        alert('internal server error')
      }
     )
  }
  login(){
    console.log(this.loginCreds)
    this._router.navigateByUrl('/mainPage')
  }

}
