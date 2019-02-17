import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';

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

  ngOnInit() {
    // this.http.getAll().subscribe(data => {
    //   this.cars = data;
    //   console.log(this.cars);
    // });
  }

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
    this.router.navigate(['/home']);
    this.submitted = false;
  }

}
