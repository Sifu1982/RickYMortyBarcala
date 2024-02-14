import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonColorEnum, ButtonSizeEnum, RmButton } from '../../shared/interfaces/rm-button.interface';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    if (this.authService.isAuthenticated()) {
      this.router.navigate(['/home']);
    }
  }

  login(): void {
    if (this.authService.login(this.user, this.password)) {
      this.router.navigate(['/home']);
      this.errorMessage = '';
    } else {
      this.router.navigate(['/login'])
      this.errorMessage = 'Incorrect Email or Password, try u and 12';
    }
  }

  public submitButtonConfig: RmButton = {
    text: 'SIGN IN',
    size: ButtonSizeEnum.MEDIUM,
    color: ButtonColorEnum.INFO
  };
}
