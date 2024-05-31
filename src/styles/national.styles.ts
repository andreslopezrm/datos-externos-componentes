import { css } from "lit";

export const nationalStyles = css`
  :host([mode="horizontal"]) {
    display: flex;
    gap: 1rem;
  }

  :host([mode="horizontal"]) * {
    flex: 1;
  }
`