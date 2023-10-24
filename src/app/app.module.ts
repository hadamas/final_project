import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProfileTabComponent } from './components/profile-tab/profile-tab.component';
import { CurriculumHeaderComponent } from './components/curriculum-header/curriculum-header.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileTabComponent,
    CurriculumHeaderComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
