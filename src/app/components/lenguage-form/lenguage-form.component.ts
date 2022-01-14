import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { faTwitch } from '@fortawesome/free-brands-svg-icons';

@Component({
	selector: 'app-lenguage-form',
	templateUrl: './lenguage-form.component.html',
	styleUrls: ['./lenguage-form.component.scss']
})
export class LenguageFormComponent implements OnInit {
	states = [{ name: 'English', abbreviation: 'EN', icon: faTwitch },
	{ name: 'Spanish', abbreviation: 'ES', icon: faTwitch },];
	/* lenguageControl = new FormControl('');
	form = new FormGroup({}); */
	form = new FormGroup({
		state: new FormControl(this.states[1]),
	});
	@Input() seleccionado = "";
	lenguageImg: string = "";
	lang: string;
	constructor() {
		/* this.form = new FormGroup({
			state: new FormControl(this.states[1]),
		}); */
		this.lang = this.form.value.state.abbreviation as string;
		this.lenguageImg = "/assets/img/lenguage/";

		this.logar();
	}

	ngOnInit(): void {
	}
	logar() {
		this.lenguageImg += (this.lang == 'ES') ? "spanish.png" : "united-kingdom.png";
	}

}
