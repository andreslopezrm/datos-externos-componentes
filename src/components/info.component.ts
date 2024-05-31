import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { Avance } from "../types/national.types";
import { infoStyles } from "../styles/info.styles";

@customElement("de-info")
export class InfoComponent extends LitElement {
	static styles = infoStyles;

	@property({ type: Object })
	info!: Avance;

	protected render() {
    console.log(this.info)
		return html`
      <div>
        <strong>Actas capturadas</strong>
        <span>${this.info.capturadas.total}</span>
      </div>
      <div>
        <strong>Participación ciudadana</strong>
        <span>${this.info.participacionCiudadana.porcentaje}%</span>
      </div>
      <div>
        <strong>Último corte</strong>
        <span>${this.info.ultimoCorte.fecha} ${this.info.ultimoCorte.hora}</span>
      </div>
    `;
	}
}

declare global {
	interface HTMLElementTagNameMap {
		"de-info": InfoComponent;
	}
}
