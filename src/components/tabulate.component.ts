import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { Voto } from "../types/national.types";
import { map } from "lit/directives/map.js";
import { tabulateStyles } from "../styles/tabulate.styles";

@customElement("de-tabulate")
export class TabulateComponent extends LitElement {

  static styles = tabulateStyles;

	@property({ type: Array })
	votes: Voto[] = [];

	protected render() {
		return html`
      <table>
        <thead>
          <tr>
            <th>Candidato</th>
            <th>Votos</th>
            <th>Porcentaje</th>
          </tr>
        </thead>
        <tbody>
          ${map(
						this.votes,
						(vote) => html`
            <tr>
              <td>${vote.candidatoPropietario}</td>
              <td>${vote.votos}</td>
              <td>${vote.porcentaje}%</td>
            </tr>
          `,
					)}
        </tbody>
      </table>
    `;
	}
}

declare global {
	interface HTMLElementTagNameMap {
		"de-tabulate": TabulateComponent;
	}
}
