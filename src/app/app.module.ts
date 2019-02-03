import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { AboutComponentComponent } from './about-component/about-component.component';
import { ProjectComponentComponent } from './project-component/project-component.component';
import { ContactComponentComponent } from './contact-component/contact-component.component';
import { FooterComponentComponent } from './footer-component/footer-component.component';
import { IconSvgComponent } from './icon-svg/icon-svg.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponentComponent,
    AboutComponentComponent,
    ProjectComponentComponent,
    ContactComponentComponent,
    FooterComponentComponent,
    IconSvgComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
