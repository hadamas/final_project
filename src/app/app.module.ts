import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProfileTabComponent } from './components/profile-tab/profile-tab.component';
import { CurriculumHeaderComponent } from './components/curriculum-header/curriculum-header.component';
import { CurriculumSummarySectionComponent } from './components/curriculum-summary-section/curriculum-summary-section.component';
import { EducacaoComponent } from './components/educacao/educacao.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';

@NgModule({
	declarations: [
		AppComponent,
		ProfileTabComponent,
		CurriculumHeaderComponent,
		CurriculumSummarySectionComponent,
		EducacaoComponent,
		ExperienciaComponent
	],
	imports: [
		BrowserModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }