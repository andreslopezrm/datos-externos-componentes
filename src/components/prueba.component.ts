import { LitElement, html } from "lit";
import { customElement, state } from "lit/decorators.js";

type Constructor<T> = new (...args: any[]) => T;

export declare class StatusableInterface {
	loading: boolean;
	error: Error | undefined;
	load<T>(callback: () => T): Promise<T | undefined>;
}

export const Statusable = <T extends Constructor<LitElement>>(
	superClass: T,
) => {
	class StatusableElement extends superClass {
		@state()
		loading = false;

		@state()
		error: Error | undefined = undefined;

		async load<T>(callback: () => T): Promise<T | undefined> {
			try {
				this.loading = true;
				const result: T = await callback();
				this.loading = false;
				return result;
			} catch (err) {
				this.error = err as Error;
				this.loading = false;
			}
		}
	}
	return StatusableElement as Constructor<StatusableInterface> & T;
};

export declare class ModalInterface {
	isOpenModal: boolean;
	openModal: () => void;
	closeModal: () => void;
}

export const Modalable = <T extends Constructor<LitElement>>(superClass: T) => {
	class ModalableElement extends superClass {
		@state()
		isOpenModal = false;

		openModal() {
			this.isOpenModal = true;
		}

		closeModal() {
			this.isOpenModal = false;
		}
	}
	return ModalableElement as Constructor<ModalInterface> & T;
};

@customElement("element-one")
export class ElementOne extends Modalable(Statusable(LitElement)) {
	protected async firstUpdated() {
		this.openModal();
	}

	render() {
		return html`
      <p>${this.loading} ${this.error}</p>
    `;
	}
}
