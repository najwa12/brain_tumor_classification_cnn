import {Directive} from 'angular2/core';

@Directive({
	selector: '[tooltip]',
	properties:[
		'text: tooltip'
	],
	host: {
		'(mouseover)': 'show()'
	}
})
export class Tooltip{
	text: string;

	public show(){
		console.log(this.text);
	}
}