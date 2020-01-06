import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';
import { TokenService } from './../../services/token.service';
import { AuthService } from './../../services/auth.service';


import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl
} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [LoginService]

})
export class LoginComponent implements OnInit {

  public form: FormGroup;
  public error = null;

  constructor(private fb: FormBuilder,
    private router: Router,
    private LoginService: LoginService,
    private Token: TokenService,
    private Auth: AuthService
    ) {}

  ngOnInit() {
    this.form = this.fb.group({
      email: [null, Validators.compose([Validators.required])],
      password: [null, Validators.compose([Validators.required])]
    });
  }

  onSubmit() {
    this.LoginService.login(this.form).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error)
    //   console.log(data);
    //   if(data.access_token){
    //     localStorage.setItem('username', data.user);
    //     localStorage.setItem('access_token', data.access_token);
    //     localStorage.setItem('user_id', data.user_id);
    //     console.log(data.access_token)
    //     this.router.navigate(['/dashboards/dashboard1']);

    //   } else {
    //     console.log('titi');
    //     this.msg = 'Invalid Username or Password';
    //   }

    // });

    )}

  handleResponse(data) {
    this.Token.handle(data.access_token);
    this.Auth.changeAuthStatus(true);
    this.router.navigateByUrl('/dashboards/dashboard1');
  }

  handleError(error) {
    this.error = error.error.error;
  }

}
