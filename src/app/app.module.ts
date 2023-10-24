import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CurriculumSummarySectionComponent } from './components/curriculum-summary-section/curriculum-summary-section.component';



@NgModule({
  declarations: [
    AppComponent,
    CurriculumSummarySectionComponent,
    
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
