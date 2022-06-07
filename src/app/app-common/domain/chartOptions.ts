import {
	ApexAxisChartSeries,
	ApexChart,
	ApexDataLabels,
	ApexGrid,
	ApexStroke,
	ApexTitleSubtitle,
	ApexXAxis,
	ChartType
} from "ng-apexcharts";

export type ChartOptions = {
	series: ApexAxisChartSeries;
	chart: ApexChart;
	xaxis: ApexXAxis;
	dataLabels: ApexDataLabels;
	grid: ApexGrid;
	stroke: ApexStroke;
	title: ApexTitleSubtitle;
};
export type Options = {
	title: string,
	serie: { name: string, data: number[] }[],
	type: ChartType,
	categories: any[]

}
