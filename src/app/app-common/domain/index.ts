import {DropDownInput} from './fields/dropDownInput';
import {Field} from './field';
import {PasswordInput} from './fields/passwordInput';
import {TextInput} from './fields/textInput';
//import { TableElement } from './tableElement';


export const models = [Field, DropDownInput, TextInput, PasswordInput];

export * from './field';
export * from './fields/dropDownInput';
export * from './fields/textInput';
export * from './fields/passwordInput';
