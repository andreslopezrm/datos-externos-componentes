import { LitElement, html, css } from "lit";
import { customElement, property, query } from "lit/decorators.js";
import { ECBasicOption } from "echarts/types/dist/shared.js";
import * as echarts from "echarts";

@customElement("de-chart-line-component")
export class ChartLineComponent extends LitElement {
	static styles = css`
    #charts {
      max-width: 100%;
      aspect-ratio: 16 / 9;
    }
  `;

	@property({ type: Object })
	options!: ECBasicOption;

	@query("#charts")
	chartsElement!: HTMLDivElement;

	chart?: echarts.ECharts;

	readonly resizeChart = () => this.chart?.resize();

	connectedCallback() {
		super.connectedCallback();
		window.addEventListener("resize", this.resizeChart);
	}

	disconnectedCallback() {
		super.disconnectedCallback();
		window.removeEventListener("resize", this.resizeChart);
	}

	protected firstUpdated(changedProperties: Map<PropertyKey, unknown>) {
		super.firstUpdated(changedProperties);
		this.chart = echarts.init(this.chartsElement);
		this.chart.setOption(this.options);
	}

	protected render() {
		return html`
      <div id="charts"></div>
    `;
	}
}

declare global {
	interface HTMLElementTagNameMap {
		"de-chart-line-component": ChartLineComponent;
	}
}
