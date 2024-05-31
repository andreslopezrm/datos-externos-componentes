import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";
import "../components/advance.component";
import { HttpService } from "../services/http.service";
import { StatisticsService } from "../services/statistics.service";
import { statisticsServiceContext } from "../context/statistics-service.context";
import { provide } from "@lit/context";

@customElement("de-advance-container")
export class AdvanceNationalContainer extends LitElement {
	readonly httpService = new HttpService();

	@provide({ context: statisticsServiceContext })
	readonly statisticsService = new StatisticsService(this.httpService);

	render() {
		return html`
      <de-advance></de-advance>
    `;
	}
}

declare global {
	interface HTMLElementTagNameMap {
		"de-advance-containerr": AdvanceNationalContainer;
	}
}
