import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  home: HTMLElement;
  about: HTMLElement;
  leadership: HTMLElement;
  projects: HTMLElement;
  contact: HTMLElement;

  constructor() { }

  ngOnInit() {
  }
    scroll(el: HTMLElement) {
    el.scrollIntoView();
  }
}
