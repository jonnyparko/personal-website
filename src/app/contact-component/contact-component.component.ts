import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
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

  @ViewChild('name') nameField: ElementRef;
  @ViewChild('fromEmail') fromEmailField: ElementRef;
  @ViewChild('message') messageField: ElementRef;

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

  onSubmit(f) {
    if (this.f.name.errors) {
      this.nameField.nativeElement.focus();
    }
    if (this.f.fromEmail.errors) {
      this.fromEmailField.nativeElement.focus();
    }
    if (this.f.message.errors) {
      this.messageField.nativeElement.focus();
    }
    if (this.registerForm.invalid) {
      return;
    }
    this.sendEmail();
      f.reset(); // remove this so the form doesnt reset on sending the email need to check if there was an error and if not then reset
    }
}
