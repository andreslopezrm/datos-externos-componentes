import { LitElement, html } from "lit";
import { provide } from "@lit/context";
import { customElement, property } from "lit/decorators.js";
import { HttpService } from "../services/http.service";
import { StatisticsService } from "../services/statistics.service";
import { statisticsServiceContext } from "../context/statistics-service.context";
import "../components/national.component";
import { ChartMode, NationalMode } from "../types/mode.types";
import { ChartService } from "../services/chart.service";
import { chartServiceContext } from "../context/chart-service.context";

@customElement("de-national-container")
export class NationalContainer extends LitElement {
	@property({ type: String })
	public chart = ChartMode.VERTICAL;

	@property({ type: String })
	public mode = NationalMode.VERTICAL;

	readonly httpService = new HttpService();

	@provide({ context: statisticsServiceContext })
	readonly statisticsService = new StatisticsService(this.httpService);

	@provide({ context: chartServiceContext })
	readonly chartService = new ChartService();

	render() {
		return html`
      <de-national chart=${this.chart} mode=${this.mode}></de-national>
    `;
	}
}

declare global {
	interface HTMLElementTagNameMap {
		"de-advance-container": NationalContainer;
	}
}
