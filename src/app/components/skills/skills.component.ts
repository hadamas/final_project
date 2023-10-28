import { Component, Input } from '@angular/core';

@Component({
	selector: 'app-skills',
	templateUrl: './skills.component.html',
	styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
	@Input() habilidades!: string[];
}
