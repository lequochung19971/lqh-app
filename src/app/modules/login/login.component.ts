import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthService } from '../../auth/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'lqh-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  formGroup: FormGroup = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(
    protected authService: AuthService,
    protected router: Router
  ) { }

  ngOnInit(): void {
  }

  login(): void {
    this.authService.login({
      email: this.formGroup.value.email,
      password: this.formGroup.value.password
    }).subscribe(success => {
      if (success) {
        this.router.navigate(['/dashboard']);
      }
    });
  }

}
