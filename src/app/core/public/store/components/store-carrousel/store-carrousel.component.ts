import { AfterViewInit, ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ProductService } from '@shared/product/infrastructure/services';

@Component({
	selector: 'app-store-carrousel',
	changeDetection: ChangeDetectionStrategy.OnPush,
	template: `
	<div class="row">
		<div class="col-md-1">
			<button class="btn btn-default" (click)="leftClick()">
				<
			</button>
		</div>
		<div class="col-md-3 d-flex flex-column text-center p-2" *ngFor="let item of mediator" style="background-color: grey; aspect-ratio:2/3;">
			<img class="img-thumbnail" [src]="item.img" style="aspect-ratio:2/3">
			<h5 style="background-color: white;">{{item.stock}}</h5>
		</div>
		<div class="col-md-1">
			<button class="btn btn-default" (click)="rightClick()">
				>
			</button>
		</div>
	</div>
	`
})
export class StoreCarrouselComponent implements OnInit, AfterViewInit {
	data: any;
	items = [{
		stock: "AAPL",
		img: "https://placeimg.com/350/150/any"
	},
	{
		stock: "F",
		img: "https://placeimg.com/350/150/any/sepia"
	},
	{
		stock: "Q",
		img: "https://placeimg.com/350/150/any/grayscale"
	},
	{
		stock: "W",
		img: "https://placeimg.com/350/150/tech/grayscale"
	},
	{
		stock: "E",
		img: "https://placeimg.com/350/150/people"
	},
	{
		stock: "T",
		img: "https://placeimg.com/350/150/nature"
	},
	{
		stock: "Y",
		img: "https://placeimg.com/350/150/arch"
	}];
	startIndex = 0
	lastIndex = 2
	mediator: any[] = [];
	constructor(private productService: ProductService) {
		this.productService.getProductsObservable().subscribe(data => {
			this.data = data;
		});

		this.mediator = [this.items[0], this.items[1], this.items[2]]
	}

	ngOnInit() {

	}
	ngAfterViewInit(): void {
	}
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
	/*
function($scope) {
$scope.items = [
{
stock: "AAPL",
img: "https://placeimg.com/350/150/any"
},
{
stock: "F",
img: "https://placeimg.com/350/150/any/sepia"
},
{
stock: "Q",
img: "https://placeimg.com/350/150/any/grayscale"
},
{
stock: "W",
img: "https://placeimg.com/350/150/tech/grayscale"
},
{
stock: "E",
img: "https://placeimg.com/350/150/people"
},
{
stock: "T",
img: "https://placeimg.com/350/150/nature"
},
{
stock: "Y",
img: "https://placeimg.com/350/150/arch"
}
]

var startIndex = 0
var lastIndex = 2
$scope.mediator = [$scope.items[0], $scope.items[1], $scope.items[2]]

$scope.leftClick = function () {
if (startIndex === 0) {
startIndex = $scope.items.length-1
lastIndex--
$scope.mediator.unshift($scope.items[$scope.items.length-1])
$scope.mediator.pop()
}
else if (lastIndex === 0) {
lastIndex = $scope.items.length-1
startIndex--
$scope.mediator.unshift($scope.items[startIndex])
$scope.mediator.pop()
}
else {
startIndex--
lastIndex--
$scope.mediator.unshift($scope.items[startIndex])
$scope.mediator.pop()
}
console.log('start ', startIndex, 'last ', lastIndex)
return
}

$scope.rightClick = function () {
if (lastIndex === $scope.items.length-1) {
lastIndex = 0
startIndex++
$scope.mediator.shift()
$scope.mediator.push($scope.items[0])
}
else if (startIndex === $scope.items.length-1) {
startIndex = 0
lastIndex++
$scope.mediator.shift()
$scope.mediator.push($scope.items[lastIndex])
}
else {
startIndex++
lastIndex++
$scope.mediator.shift()
$scope.mediator.push($scope.items[lastIndex])
}
console.log('start ', startIndex, 'last ', lastIndex)
return
}
})
*/
