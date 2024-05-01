import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent {
  constructor(private authService: AuthService){

  }

  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  logIn(){
    console.log("logIn :: ", this.loginForm.value);
    let loginData = {
      "email" : this.loginForm.value.email,
      "password" : this.loginForm.value.password,
    };
    this.authService.login(loginData).subscribe((data : any) =>{
      console.log(data);
      
    });
    // this.loginForm.reset();
    
  }

}
