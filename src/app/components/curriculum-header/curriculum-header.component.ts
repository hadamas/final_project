import { Component, Input } from '@angular/core';
import { Addressinfo, CurriculumHeaderInfo, SocialMediaInfo } from 'src/utility/types';

@Component({
	selector: 'app-curriculum-header',
	templateUrl: './curriculum-header.component.html',
	styleUrls: ['./curriculum-header.component.css']
})
export class CurriculumHeaderComponent {
	@Input() infos!: CurriculumHeaderInfo;
	name!: string;
	address!: Addressinfo;
	profilePictureSrc!: string;
	age!: number;
	phones!: string[];
	emails!: string[];
	socialMedia!: SocialMediaInfo[];

	ngOnChanges() {
		this.name = this.infos.name;
		this.address = this.infos.address
		this.profilePictureSrc = this.infos.profilePictureSrc;
		this.age = this.calculateAgeInYears(this.infos.birthdate)
		this.phones = this.infos.contacts.phones;
		this.emails = this.infos.contacts.emails;
		this.socialMedia = this.infos.socialMedia;
		// 		try {
		// 
		// 
		// 		} catch (error) {
		// 			console.log(`DEU ESSE ERRO NO ngOnChanges:\n`)
		// 			console.log(error)
		// 		}
	}

	private calculateAgeInYears(birthdate: string): number {

		const [day, month, year] = birthdate.split('/').map(x => Number(x))
		// birthdate as Date Object
		const birthdateObject = new Date(year, month - 1, day)
		// current date
		const currentDate = new Date();
		// Calculate the time difference in milliseconds
		const timeDiff = currentDate.getTime() - birthdateObject.getTime();
		// Convert milliseconds to years (approximate)
		const millisecondsPerYear = 1000 * 60 * 60 * 24 * 365.25; // Taking leap years into account
		const age = Math.floor(timeDiff / millisecondsPerYear);

		return age;
	}

}
