import { consume } from "@lit/context";
import { LitElement, TemplateResult, html } from "lit";
import { customElement, state } from "lit/decorators.js";
import { statisticsServiceContext } from "../context/statistics-service.context";
import { StatisticsService } from "../services/statistics.service";
import { Task } from "@lit/task";
import { National } from "../types/national.types";
import './info.component';

@customElement("de-advance")
export class AdvanceComponent extends LitElement {
	@state()
	private task?: Task<never[], National>;

	@consume({ context: statisticsServiceContext })
	public set statisticsService(service: StatisticsService) {
		this.task = new Task(
			this,
			() => service.national(),
			() => [],
		);
	}

	protected render(): TemplateResult | undefined {
		return this.task?.render({
			pending: () => html`<p>Cargando...</p>`,
			error: (error) => html`<p>${error}</p>`,
			complete: ({ avance }) => html`<de-info .info=${avance}></de-info>`,
		});
	}
}

declare global {
	interface HTMLElementTagNameMap {
		"de-advance": AdvanceComponent;
	}
}
