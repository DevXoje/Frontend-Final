import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppCommonModule } from '../app-common/app-common.module';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './routing/guards/auth.guard';

//Guards
import * as authGuards from './routing/guards';
import * as authComponents from './components';
import * as authContainers from './containers';
import { AUTH_ROUTES } from './routing/auth.routes';
import { JwtHelperService } from '@auth0/angular-jwt';

@NgModule({
	declarations: [...authComponents.components, ...authContainers.containers],
	imports: [CommonModule, AppCommonModule, AUTH_ROUTES],
	providers: [
		//JwtHelperService
		//...authGuards.guards,
	],
	exports: [...authComponents.components],
})
export class AuthModule {}
