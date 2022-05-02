import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoaderInterceptor } from './loader.interceptor';
import { ServerConnectionInterceptor } from './server-connection.interceptor';

export const interceptors = [
	{
		provide: HTTP_INTERCEPTORS,
		useClass: LoaderInterceptor,
		multi: true,
	},
/* 	{
		provide: HTTP_INTERCEPTORS,
		useClass: ServerConnectionInterceptor,
		multi: true,
	}, */
];

export * from './loader.interceptor';
//export * from './server-connection.interceptor';
