export interface NotificationMessage {
	message: string;
	type: NotificationType;
}
export enum NotificationType {
	success = 0,
	warning = 1,
	danger = 2,
	info = 3,
}
