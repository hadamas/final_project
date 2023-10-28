import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { ProfileTabComponent } from './components/profile-tab/profile-tab.component';
import { CurriculumHeaderComponent } from './components/curriculum-header/curriculum-header.component';
import { CurriculumSummarySectionComponent } from './components/curriculum-summary-section/curriculum-summary-section.component';
import { EducacaoComponent } from './components/educacao/educacao.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { ContatosComponent } from './components/contatos/contatos.component';
import { SkillsComponent } from './components/skills/skills.component';
import { CursosComponent } from './components/cursos/cursos.component';
import { LanguageComponent } from './components/language/language.component';

@NgModule({
	declarations: [
		AppComponent,
		ProfileTabComponent,
		CurriculumHeaderComponent,
		CurriculumSummarySectionComponent,
		EducacaoComponent,
		ExperienciaComponent,
  ContatosComponent,
  SkillsComponent,
  CursosComponent,
  LanguageComponent
	],
	imports: [
		BrowserModule,
		ReactiveFormsModule,
	
		FormsModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }