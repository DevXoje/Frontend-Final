import { Injectable } from '@angular/core';
import { NotificationMessage, NotificationType } from '@shared/app-common/domain/notification.message';
import { ToastrService } from 'ngx-toastr';
import { Subject } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class NotificationService {
	private notificationSubject: Subject<NotificationMessage> = new Subject<NotificationMessage>();

	constructor(private toastrService: ToastrService) {
		this.notificationSubject.subscribe(
			(message: NotificationMessage) => {
				switch (message.type) {
					case NotificationType.success:
						this.toastrService.success(message.message, "Success", {
							timeOut: 500000
						});

						break;
					case NotificationType.danger:
						this.toastrService.error(message.message, "Error", {
							timeOut: 500000
						});

						break;
					case NotificationType.warning:
						this.toastrService.warning(message.message, "Warning", {
							timeOut: 500000
						});

						break;
					case NotificationType.info:
						this.toastrService.info(message.message, "Info", {
							timeOut: 500000
						});
						break;

					default:
						this.toastrService.info(message.message, "Info", {
							positionClass: 'inline',
							timeOut: 500000
						});
						break;
				}
			},
			error => console.error(error)
		);
	}
	sendMessage(message: NotificationMessage) {
		this.notificationSubject.next(message);
	}
}
