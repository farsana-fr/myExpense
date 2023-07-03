import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  title = 'CashCheck';
  first="Enter Email";
  second="Enter Password";
  constructor(private fb:FormBuilder)
  {
    
  }
  loginForm=this.fb.group({
      email:['',[Validators.required]],
      password:['',[Validators.required]]
  })
}
