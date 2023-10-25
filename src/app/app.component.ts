import { default as peopleInfoFromJson } from '../assets/people-info.json';
import { Component, OnInit } from '@angular/core';
import { CurriculumHeaderInfo, PersonInfo, BracketAcessible } from 'src/utility/types';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {

	title = 'final_project';
	content: any = 'loading...'
	curProfileUser: string = 'default'
	curriculumHeaderInfo!: CurriculumHeaderInfo;
	peopleInfo = peopleInfoFromJson;

	loadNewContent(username: string) {
		username = username.toLowerCase();
		console.log(`username = `, username)
		const personInfo: any = ((this.peopleInfo as BracketAcessible)[username])

		this.curriculumHeaderInfo = {
			name: personInfo.name,
			profilePictureSrc: personInfo.profilePictureSrc,
			birthdate: personInfo.birthdate,
			socialMedia: personInfo.socialMedia,
			contacts: personInfo.contacts
		}
	}
}