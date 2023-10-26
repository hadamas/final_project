import { Component, Input, Output, EventEmitter } from '@angular/core';
@Component({
	selector: 'app-profile-tab',
	templateUrl: './profile-tab.component.html',
	styleUrls: ['./profile-tab.component.css']
})
export class ProfileTabComponent {

	@Output() updateProfileInfoRequest = new EventEmitter();
	@Input() profileUsername: string = '';

	emitComponentEvent(outputEventEmitter: EventEmitter<any>, ...argumentstoBeSent: any[]) {
		outputEventEmitter.emit(...argumentstoBeSent);
	}
}
