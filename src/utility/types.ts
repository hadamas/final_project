export type CurriculumHeaderInfo = {
	name: string;
	profilePictureSrc: string;
	birthdate: string;
	socialMedia: Array<SocialMediaInfo>,
	contacts: ContactInfo
}

export type SocialMediaInfo = {
	platform: string,
	username: string,
	profileSrc: string
}

export type ContactInfo = {
	emails: Array<string>,
	phones: Array<string>
}

export type LanguageInfo = {
	language: string,
	level: string
}

export interface BracketAcessible {
	[key: string]: any;
}

export interface PersonInfo extends BracketAcessible {
	name: string,
	birthdate: string,
	address: {
		city: string,
		state: string
	},
	contacts: ContactInfo,
	socialMedia: SocialMediaInfo,
	profilePictureSrc: string,
	professionalSummary: string[],
	professionalGoal: string[],
	languages: LanguageInfo[],
	education: string[],
	courses: string[],
	skills: string[],
	acchiviemes: string[]
}