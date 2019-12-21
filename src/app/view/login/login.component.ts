import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from 'src/app/service/login.service';
class User {
  username: string;
  password: string;
}
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [LoginService]
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup
  hidePassword: boolean;
  crendtialsIsIncorrect: boolean
  constructor(
    private fromBuilder: FormBuilder,
    private loginService: LoginService
  ) { 
    this.hidePassword = true;
    this.crendtialsIsIncorrect = false;
    this.loginForm = this.fromBuilder.group({
      username: this.fromBuilder.control('', Validators.required),
      password: this.fromBuilder.control('', Validators.required),
    });
  }

  ngOnInit() {
  }
  
  onSubmit() {
    // console.log('Username: ', this.loginForm.get('username').value);
    // console.log('Password: ', this.loginForm.get('password').value);
    const credentials = {
      username: this.loginForm.get('username').value,
      password: this.loginForm.get('password').value
    }
    this.loginService.login(credentials).subscribe(
      data => {
        if (data.data === null) {
          this.crendtialsIsIncorrect = true;
        } else
        {
          console.log('Login success');
        }
      }
    );
  }

}
