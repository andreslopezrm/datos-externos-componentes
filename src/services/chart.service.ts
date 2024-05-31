import { ECBasicOption } from "echarts/types/dist/shared.js";
import { Voto } from "../types/national.types";

export class ChartService {
	createDataSeries(votos: Voto[]) {
		const data = votos.map(({ candidatoPropietario }) => candidatoPropietario);
		const series = votos.map(({ votos, partido }) => ({
			value: parseInt(votos.replace(/,/g, "")),
			itemStyle: {
				color: this.colorBar(partido),
			},
		}));

		return {
			data,
			series,
		};
	}

	createOptionsNationalHorizontal(votos: Voto[]): ECBasicOption {
		const { data, series } = this.createDataSeries(votos);
		return {
			xAxis: {
				type: "value",
			},
			yAxis: {
				type: "category",
				data: data.reverse(),
			},
			series: [
				{
					data: series.reverse(),
					type: "bar",
				},
			],
		};
	}

	createOptionsNationalVertical(votos: Voto[]): ECBasicOption {
		const { data, series } = this.createDataSeries(votos);

		return {
			xAxis: {
				type: "category",
				data,
			},
			yAxis: {
				type: "value",
			},
			series: [
				{
					data: series,
					type: "bar",
				},
			],
		};
	}

	colorBar(id: string): string | undefined {
		return {
			"6": "#F78A30",
			"20": "#779ACD",
			"30": "#E59492",
			"61": "#D1D1D1",
			"62": "#D1D1D1",
		}[id];
	}
}
