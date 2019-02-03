import { Component } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry} from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-website';

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
        'sql',
        sanitizer.bypassSecurityTrustResourceUrl('assets/images/sql2.svg'));
    iconRegistry.addSvgIcon(
        'java',
      sanitizer.bypassSecurityTrustResourceUrl('assets/images/jsp.svg'));
    iconRegistry.addSvgIcon(
        'html',
        sanitizer.bypassSecurityTrustResourceUrl('assets/images/html5.svg'));
    iconRegistry.addSvgIcon(
          'css',
        sanitizer.bypassSecurityTrustResourceUrl('assets/images/css.svg'));
    iconRegistry.addSvgIcon(
          'github',
        sanitizer.bypassSecurityTrustResourceUrl('assets/images/github.svg'));
    iconRegistry.addSvgIcon(
          'js',
        sanitizer.bypassSecurityTrustResourceUrl('assets/images/js.svg'));
    iconRegistry.addSvgIcon(
          'angular',
        sanitizer.bypassSecurityTrustResourceUrl('assets/images/angular.svg'));
    iconRegistry.addSvgIcon(
          'ts',
        sanitizer.bypassSecurityTrustResourceUrl('assets/images/ts.svg'));
  }
}
