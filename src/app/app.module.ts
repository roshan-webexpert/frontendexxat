import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { NewsletterComponent } from './components/newsletter/newsletter.component';
import { SubscribeComponent } from './components/subscribe/subscribe.component';
import { TeamComponent } from './components/team/team.component';
import { WatchVideoComponent } from './components/watch-video/watch-video.component';
import { WhatsnewComponent } from './components/whatsnew/whatsnew.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactComponent,
    FeedbackComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    NewsletterComponent,
    SubscribeComponent,
    TeamComponent,
    WatchVideoComponent,
    WhatsnewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
