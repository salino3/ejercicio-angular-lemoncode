// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-login-page',
//   templateUrl: './login-page.component.html',
//   styleUrls: ['./login-page.component.scss'],
// })
// export class LoginPageComponent {
//   public username: string = '';
//   public password: string = '';
//   public submitted: boolean = false;

//   public login(): void {
//     this.submitted = true;
//     if (
//       this.username === 'master8@lemoncode.net' &&
//       this.password === '12345678'
//     ) {
//       console.log('Successful login!');
//       // Aquí podrías redirigir al usuario a la página de perfil, por ejemplo
//     } else {
//       console.log('Incorrect username or password.');
//     }
//   }
// }

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent implements OnInit {
  public loginForm!: FormGroup;
  public submitted: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  public login(): void {
    this.submitted = true;
    const username = this.loginForm.controls['username'].value;
    const password = this.loginForm.controls['password'].value;
    if (this.authService.login({ username, password })) {
      console.log('Successful login!');
      // Aquí podrías redirigir al usuario a la página de perfil, por ejemplo
    } else {
      console.log('Incorrect username or password.');
    }
  }
}
