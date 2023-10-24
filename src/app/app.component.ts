import { default as peopleInfo } from '../assets/people-info.json';
import { Component, OnInit } from '@angular/core';

interface PeopleInfo {
	[key: string]: any;
}
@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {

	title = 'final_project';
	content: any = 'loading...'
	curProfileUser: string = 'default'

	// ngOnInit() {
	// 	 require.context('../myModules', false, /\.json$/);
	// }

	// async loadNewContent(newContentPromise: Promise<any>) {
	// 	console.log('valor inicial de newContent = ', newContentPromise)
	// 	this.content = await newContentPromise;
	// 	console.log('valor dps do await newContent = ', newContentPromise)
	// 	console.log('valor dps do await this.content = ', this.content)
	// }

	loadNewContent(username: string) {
		username = username.toLowerCase();

		try {
			console.log(username)
			console.log(peopleInfo)
			console.log((peopleInfo as PeopleInfo)[username])
			this.content = `${(peopleInfo as PeopleInfo)[username].name}
			${(peopleInfo as PeopleInfo)[username].birthdate}`;
		} catch (error) {
			console.log(error)
		}
	}
}