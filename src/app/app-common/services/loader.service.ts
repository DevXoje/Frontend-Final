import { Injectable } from '@angular/core';
import { ComponentPortal, Overlay, OverlayRef } from 'ngx-toastr';
import { BehaviorSubject } from 'rxjs';
import { LoaderComponent } from '../components';

@Injectable({ providedIn: 'root' })
export class LoaderService {
	private _loading = new BehaviorSubject<boolean>(false);
	public readonly loading$ = this._loading.asObservable();

	constructor() {}

	show() {
		this._loading.next(true);
	}

	hide() {
		this._loading.next(false);
	}
}
