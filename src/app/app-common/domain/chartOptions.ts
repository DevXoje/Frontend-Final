import {
	ApexAxisChartSeries,
	ApexChart,
	ApexDataLabels,
	ApexGrid,
	ApexNonAxisChartSeries,
	ApexResponsive,
	ApexStroke,
	ApexTitleSubtitle,
	ApexXAxis,
	ChartType
} from "ng-apexcharts";

export type ChartSeries = ApexAxisChartSeries | ApexNonAxisChartSeries;
export type ChartOptions = {
	series: ChartSeries;
	chart: ApexChart;
	xaxis?: ApexXAxis;
	dataLabels?: ApexDataLabels;
	grid?: ApexGrid;
	stroke?: ApexStroke;
	title?: ApexTitleSubtitle;
	responsive: ApexResponsive[];
	labels: any;
};
export type Options = {
	title: string,
	serie: { name: string, data: number[] }[],
	type: ChartType,
	categories: any[]

}

export function witXaxis(chartType: ChartType) {
	const withXaxis = ["bar", "rangeBar", "line", "treemap"];
	//const isXaxis = chartType === 'bar' || chartType === 'rangeBar' || chartType === 'line' || chartType === 'treemap';
	return withXaxis.includes(chartType);//const isNonAxis = chartType === 'line' || chartType === 'area' || chartType === 'scatter';

}

