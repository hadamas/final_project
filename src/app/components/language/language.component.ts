import { Component, Input } from '@angular/core';

@Component({
	selector: 'app-language',
	templateUrl: './language.component.html',
	styleUrls: ['./language.component.css']
})
export class LanguageComponent {
	@Input() languages: any
}
