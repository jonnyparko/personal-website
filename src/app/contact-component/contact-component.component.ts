import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';
import {NgForm} from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-component',
  templateUrl: './contact-component.component.html',
  styleUrls: ['./contact-component.component.css']
})
export class ContactComponentComponent implements OnInit {
  cars: Array<any>;

  submitted = false;
  name: string;
  fromEmail: string;
  message: string;
  error: {};
  success: {};
  registerForm: FormGroup;

  constructor(private http: HttpService,
              private router: Router,
              private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
    name: ['', Validators.required],
    message: ['', Validators.required],
    fromEmail: ['', [Validators.required, Validators.email]]
});
}

  sendEmail() {
    this.submitted = true;

    this.http.send({
      fromEmail: this.registerForm.controls.fromEmail.value,
      message: this.registerForm.controls.message.value,
      name: this.registerForm.controls.name.value
    })
    .subscribe(success => {
      this.success = success;
    }, error => {
      this.error = error;
    });
  }

  get f() { return this.registerForm.controls; }

  goToHome() {
    // this.router.navigate(['/home']);
    this.submitted = false;
  }

  onSubmit(f: NgForm) {
    if (this.registerForm.invalid) {
      return;
    }
    this.sendEmail();
      f.reset();
    }
}
