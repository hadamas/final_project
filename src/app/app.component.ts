import { Component, OnInit } from '@angular/core';

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

	async loadNewContent(newContentPromise: Promise<any>) {
		console.log('valor inicial de newContent = ', newContentPromise)
		this.content = await newContentPromise;
		console.log('valor dps do await newContent = ', newContentPromise)
		console.log('valor dps do await this.content = ', this.content)
	}
}