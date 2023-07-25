// import { Component } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { Router } from '@angular/router';
// import { LoginService } from 'src/app/shared/servicios/autentificacion.service';

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.scss'],
// })
// export class LoginComponent {
//   loginForm: FormGroup;
//   modName: string = 'Cuentas por Cobrar';
//   token: string = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIwODA0MzIxMzcwIiwiZXhwIjoxNjk0OTg1NDgyfQ.GljEqO4wDKT_x94OIQ76k2AraJUY4YKAwBFrfs-ZsMQ';

//   constructor(
//     private loginService: LoginService,
//     private router: Router,
//     private formBuilder: FormBuilder
//   ) {
//     this.loginForm = this.formBuilder.group({
//       username: [null, [Validators.required]],
//       password: [null, [
//         Validators.required,
//         Validators.minLength(8),
//         Validators.maxLength(20),
//       ]],
//       remember: [true],
//     });
//   }

//   getPasswordErrorMessage(): string {
//     const passwordControl = this.loginForm.get('password');
//     if (!passwordControl) {
//       return '';
//     }

//     if (passwordControl.hasError('required')) {
//       return '¡Por favor ingrese su contraseña!';
//     }

//     if (passwordControl.hasError('minlength')) {
//       return 'La contraseña debe tener al menos 8 caracteres.';
//     }

//     if (passwordControl.hasError('maxlength')) {
//       return 'La contraseña no puede tener más de 20 caracteres.';
//     }

//     return '';
//   }

//   submitForm(): void {
//     if (this.loginForm.valid) {
//       const username = this.loginForm.value.username;
//       const password = this.loginForm.value.password;

//       this.loginService.login(username, password, this.modName).subscribe(
//         (response: any) => {
//           if (response && response.user) {
//             this.router.navigateByUrl('/sesion/ban/inicio');
//           } else {
//             alert('Usuario o contraseña inválida');
//           }
//         },
//         (error: any) => {
//           console.error('Error en la autenticación:', error);
//           alert('Credenciales incorrectas');
//         }
//       );
//     } else {
//       this.loginForm.markAllAsTouched();
//     }
//   }
// }



import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AutentificacionService } from 'src/app/shared/servicios/autentificacion.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})

export class LoginComponent implements OnInit {
  validateForm!: UntypedFormGroup;

  submitForm(): void {
    if (this.validateForm.valid) {
      if (!this.loginProbar.ingresarAplicativo(this.validateForm.value)) {
        alert('Usuario o contraseña invalida');
      } else {
        this.routerprd.navigateByUrl('/sesion/ban/inicio');
      }
      console.log('submit', this.validateForm.value);
    } else {
      Object.values(this.validateForm.controls).forEach((control) => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }

  constructor(
    private fb: UntypedFormBuilder,
    private loginProbar: AutentificacionService,
    private routerprd: Router
  ) {}

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      userName: [null, [Validators.required]],
      password: [null, [Validators.required]],
      remember: [true],
    });
  }
}
