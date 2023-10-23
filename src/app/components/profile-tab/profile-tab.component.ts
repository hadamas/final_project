import { Component, Input, Output, EventEmitter } from '@angular/core';
@Component({
	selector: 'app-profile-tab',
	templateUrl: './profile-tab.component.html',
	styleUrls: ['./profile-tab.component.css']
})
export class ProfileTabComponent {

	@Output() updateProfileInfoRequest = new EventEmitter();
	@Input() dataUrl: string = '';
	@Input() profileUser: string = '';

	fetchUserData(dataUrl: string) {
		const context = require.context('../myModules', false, /\.json$/);
		// console.log(data)
		// let data = "./gabriel.json";
		// import("../../../assets/people-info/alanis.json").then(({ default: x }) => console.log(x))
		// let userDataPromise = import(dataUrl);
		// console.log(userDataPromise)
		// this.updateProfileInfoRequest.emit(userDataPromise);
		import(dataUrl).then(x => console.log(x))
	}
}
