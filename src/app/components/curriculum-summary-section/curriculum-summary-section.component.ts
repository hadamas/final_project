import { Component, Input } from '@angular/core';

@Component({
	selector: 'app-curriculum-summary-section',
	templateUrl: './curriculum-summary-section.component.html',
	styleUrls: ['./curriculum-summary-section.component.css']
})
export class CurriculumSummarySectionComponent {
	@Input() resumo!: string;
	// 	resumo = {
	// 		text: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae, consequuntur! In ea velit culpa aut sit ad odio magni error nihil, quidem ipsa ipsum. Praesentium modi vero temporibus pariatur ut.`,
	// 
	// 	}
}
