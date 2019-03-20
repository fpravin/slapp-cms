import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { MustMatch } from 'src/app/helpers/must-match.validator';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.styl']
})
export class LoginComponent implements OnInit {

  registerForm: FormGroup;
  submitted = false;

  constructor(private router: Router, private formBuilder: FormBuilder) {

  }

  ngOnInit() {
    this.createForm();
  }

  createForm(): void {
    this.registerForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });

  }

  get f() { return this.registerForm.controls; }

  login() {
    this.submitted = true;

    console.log(this.registerForm)
    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }

    this.router.navigateByUrl('super-admin');
  }



}
