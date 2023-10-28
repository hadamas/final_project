import { default as peopleInfo } from '../assets/people-info.json';
import { Component, Input, OnInit, Output } from '@angular/core';
import { CurriculumHeaderInfo, BracketAcessible, PersonInfo, EducationInfo, LanguageInfo } from 'src/utility/types';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {

	curriculumHeaderInfo!: CurriculumHeaderInfo;
	professionalSummary!: string;
	skills!: string[];
	education!: EducationInfo;
	languages!: LanguageInfo[];

	ngOnInit() {
		// Escolhe aleatóriamente uma chave  de peopleInfo (integrante do grupo) para passar como argumento para
		// loadNewContent() carregar as informações na tela
		let name = Object.keys(peopleInfo);
		let randomNum = Math.floor(Math.random() * 4)

		this.loadNewContent(name[randomNum])
	}

	loadNewContent(username: string) {
		username = username.toLowerCase();
		const personInfo: PersonInfo = ((peopleInfo as BracketAcessible)[username])

		this.curriculumHeaderInfo = {
			name: personInfo.name,
			profilePictureSrc: personInfo.profilePictureSrc,
			address: personInfo.address,
			birthdate: personInfo.birthdate,
			socialMedia: personInfo.socialMedia,
			contacts: personInfo.contacts
		}

		this.professionalSummary = personInfo.professionalSummary;
		this.skills = personInfo.skills
		this.education = personInfo.education
		this.languages = personInfo.languages
	}
}