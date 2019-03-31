import { Component, OnInit, ElementRef, Inject } from '@angular/core';
import { HostListener } from '@angular/core';
import { DOCUMENT } from '@angular/common';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private el: ElementRef) { }

  ngOnInit() {
  }
  @HostListener('window:scroll', ['$event']) // for window scroll events
    blurImg(event) {
      // console.log(window.pageYOffset);
      if (window.pageYOffset > 150) {
        document.getElementById('home').setAttribute('style', 'filter: blur(5px)');
      } else {
        document.getElementById('home').setAttribute('style', 'filter: blur(0px)');
      }
      // if (window.pageYOffset > 399) {
      //   document.getElementById('myNavbar').setAttribute('style', 'background-color: white; color: black !important');
      // } else {
      //   document.getElementById('myNavbar').setAttribute('style', 'background-color: transparent; color: white !important');
      // }
    }

}
