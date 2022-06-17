import {FormComponent,} from './form/form.component';
import {FieldComponent} from './form/field/field.component';
import {TableComponent} from './table/table.component';
import {ModalComponent} from './modal/modal.component';
import {ChartComponent} from './chart/chart.component';
import {LoaderComponent} from './loader.component';
import {GalleryCardsComponent} from './gallery-cards/gallery-cards.component';
import {CardComponent} from './gallery-cards/card/card.component';
import {PasswordStrengthComponent} from "./form/field/password-strength.component";
import {FileUploadComponent,} from "./form/field/file-upload.component";
import {CarouselComponent} from "./carousel/carousel.component";
import {SidebarComponent} from "./sidebar/sidebar.component";
import {CookieConsentComponent} from "./cookie-consent.component";

const formComponents = [
	FormComponent,
	FieldComponent,
	PasswordStrengthComponent,
	FileUploadComponent,
];
export const components = [
	...formComponents,
	TableComponent,
	ModalComponent,
	ChartComponent,
	LoaderComponent,
	GalleryCardsComponent,
	CardComponent,
	CarouselComponent,
	SidebarComponent,
	CookieConsentComponent

];

export * from './form/form.component';
export * from './form/field/field.component';
export * from './form/field/password-strength.component';
export * from './form/field/file-upload.component';
export * from './table/table.component';
export * from './modal/modal.component';
export * from './chart/chart.component';
export * from './loader.component';
export * from './gallery-cards/gallery-cards.component';
export * from './gallery-cards/card/card.component';
export * from './carousel/carousel.component';
export * from './sidebar/sidebar.component';
