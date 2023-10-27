import { default as peopleInfo } from '../assets/people-info.json';
import { Component, Input, OnInit, Output } from '@angular/core';
import { CurriculumHeaderInfo, BracketAcessible } from 'src/utility/types';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {

	title = 'final_project';
	curriculumHeaderInfo!: CurriculumHeaderInfo;
	professionalSummary!: any;
	skills!: any;
	education: any;
	languages: any;

	ngOnInit() {
		let name = Object.keys(peopleInfo);
		let randomNum = Math.floor(Math.random() * 4)

		this.loadNewContent(name[randomNum])
	}

	loadNewContent(username: string) {
		username = username.toLowerCase();
		const personInfo: any = ((peopleInfo as BracketAcessible)[username])

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