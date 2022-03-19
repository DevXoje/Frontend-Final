import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-store-lists-collection',
	changeDetection: ChangeDetectionStrategy.OnPush,
	templateUrl: './store-lists-collection.component.html',
})
export class StoreListsCollectionComponent implements OnInit {

	lists = [
		{
			title: 'List 1',
			items: [
				{
					id: 1,
					name: "AAPL",
					img: "https://placeimg.com/350/150/any",
					price: 100,
				},
				{
					id: 2,
					name: "AAPL",
					img: "https://placeimg.com/350/150/any",
					price: 222,
				},
				{
					id: 3,
					name: "AAasfasfPL",
					img: "https://placeimg.com/350/150/any",
					price: 321,
				},
				{
					id: 4,
					name: "AAP123123L",
					img: "https://placeimg.com/350/150/any",
					price: 333,
				},
			]
		},
		{
			title: 'List 2',
			items: [
				{
					id: 1,
					name: "AAPL",
					img: "https://placeimg.com/350/150/any",
					price: 100,
				},
				{
					id: 2,
					name: "AAPL",
					img: "https://placeimg.com/350/150/any",
					price: 222,
				},
				{
					id: 3,
					name: "AAasfasfPL",
					img: "https://placeimg.com/350/150/any",
					price: 321,
				},
				{
					id: 4,
					name: "AAP123123L",
					img: "https://placeimg.com/350/150/any",
					price: 333,
				},
			]
		},
		{
			title: 'List 3',
			items: [
				{
					id: 1,
					name: "AAPL",
					img: "https://placeimg.com/350/150/any",
					price: 100,
				},
				{
					id: 2,
					name: "AAPL",
					img: "https://placeimg.com/350/150/any",
					price: 222,
				},
				{
					id: 3,
					name: "AAasfasfPL",
					img: "https://placeimg.com/350/150/any",
					price: 321,
				},
				{
					id: 4,
					name: "AAP123123L",
					img: "https://placeimg.com/350/150/any",
					price: 333,
				},
			]
		}
	]
	items = [
		{
			id: 1,
			name: "AAPL",
			img: "https://placeimg.com/350/150/any",
			price: 100,
		},
		{
			id: 2,
			name: "AAPL",
			img: "https://placeimg.com/350/150/any",
			price: 222,
		}
	];
	startIndex = 0
	lastIndex = 2
	mediator: any[] = [];
	constructor() {
		this.mediator = [this.lists[0], this.items[1], this.items[2]]
	}
	ngOnInit() { }
	leftClick() {
		if (this.startIndex === 0) {
			this.startIndex = this.items.length - 1
			this.lastIndex--
			this.mediator.unshift(this.items[this.items.length - 1])
			this.mediator.pop()
		}
		else if (this.lastIndex === 0) {
			this.lastIndex = this.items.length - 1
			this.startIndex--
			this.mediator.unshift(this.items[this.startIndex])
			this.mediator.pop()
		}
		else {
			this.startIndex--
			this.lastIndex--
			this.mediator.unshift(this.items[this.startIndex])
			this.mediator.pop()
		}
		console.log('start ', this.startIndex, 'last ', this.lastIndex)
		return
	}
	rightClick() {
		if (this.lastIndex === this.items.length - 1) {
			this.lastIndex = 0
			this.startIndex++
			this.mediator.shift()
			this.mediator.push(this.items[0])
		}
		else if (this.startIndex === this.items.length - 1) {
			this.startIndex = 0
			this.lastIndex++
			this.mediator.shift()
			this.mediator.push(this.items[this.lastIndex])
		}
		else {
			this.startIndex++
			this.lastIndex++
			this.mediator.shift()
			this.mediator.push(this.items[this.lastIndex])
		}
		console.log('start ', this.startIndex, 'last ', this.lastIndex)
		return
	}
}
