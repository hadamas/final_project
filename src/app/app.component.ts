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
	curriculumHeaderInfo: CurriculumHeaderInfo = {
		name: peopleInfo.denilson.name,
		profilePictureSrc: peopleInfo.denilson.profilePictureSrc,
		address: peopleInfo.denilson.address,
		birthdate: peopleInfo.denilson.birthdate,
		socialMedia: peopleInfo.denilson.socialMedia,
		contacts: peopleInfo.denilson.contacts
	};
	professionalSummary!: any;
	skills!: any;
	education: any = {
		school: peopleInfo.denilson.education[1].school,
		course: peopleInfo.denilson.education[1].course,
		date: peopleInfo.denilson.education[1].date
	}
	languages: any = {
		language: peopleInfo.denilson.languages[0].language,
		level: peopleInfo.denilson.languages[0].level
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