import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';
import {NgForm} from '@angular/forms';


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

  constructor(private http: HttpService,
              private router: Router) { }

  ngOnInit() {}

  sendEmail() {
    this.submitted = true;

    this.http.send({
      fromEmail: this.fromEmail,
      message: this.message,
      name: this.name
    })
    .subscribe(success => {
      this.success = success;
    }, error => {
      this.error = error;
    });
  }

  goToHome() {
    // this.router.navigate(['/home']);
    this.submitted = false;
  }

  onSubmit(f: NgForm) {
    f.reset();
  }

}
