import { consume } from "@lit/context";
import { LitElement, html } from "lit";
import { Task } from "@lit/task";
import { customElement, property, state } from "lit/decorators.js";
import { statisticsServiceContext } from "../context/statistics-service.context";
import { StatisticsService } from "../services/statistics.service";
import { National } from "../types/national.types";
import "./chart-line.component";
import './tabulate.component';
import { ChartService } from "../services/chart.service";
import { chartServiceContext } from "../context/chart-service.context";
import { ChartMode, NationalMode } from "../types/mode.types";
import { nationalStyles } from "../styles/national.styles";

@customElement("de-national")
export class NationalComponent extends LitElement {
	static styles = nationalStyles;

	@property({ type: String })
	public chart!: ChartMode;

	@property({ type: String })
	public mode!: NationalMode;

	@consume({ context: statisticsServiceContext })
	statisticsService!: StatisticsService;

	@consume({ context: chartServiceContext })
	chartService!: ChartService;

	@state()
	task?: Task<never[], National>;

	protected firstUpdated(changedProperties: Map<PropertyKey, unknown>) {
		super.firstUpdated(changedProperties);
		this.task = new Task(
			this,
			() => this.statisticsService.national(),
			() => [],
		);
	}

	protected render() {
		return this.task?.render({
			pending: () => html`<p>Cargando...</p>`,
			error: () => html`<p>Ocurrio un error</p>`,
			complete: ({ votos }) =>
				html`
				<de-tabulate .votes=${votos}></de-tabulate>
				<de-chart-line-component 
					.options=${this.chart === ChartMode.VERTICAL ? this.chartService.createOptionsNationalVertical(votos) : this.chartService.createOptionsNationalHorizontal(votos)}>
				</de-chart-line-component>`,
		});
	}
}

declare global {
	interface HTMLElementTagNameMap {
		"de-national": NationalComponent;
	}
}
