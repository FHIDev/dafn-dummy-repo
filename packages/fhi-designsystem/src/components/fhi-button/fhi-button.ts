import { html, css, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';

export const FhiButtonSelector = 'fhi-button';

export type FhiButtonProps = Pick<FhiButton, 'variant'>;

@customElement(FhiButtonSelector)
export class FhiButton extends LitElement {
  @property({ type: String, reflect: true }) variant?:
    | 'primary'
    | 'danger'
    | 'alert' = 'primary';

  render() {
    return html` <button><slot></slot></button> `;
  }

  // Layer - Category - Type - Scope - State
  static styles = css`
    :host([variant='primary']) button {
      background-color: var(--color-success-base);
    }
    :host([variant='danger']) button {
      background-color: var(--color-danger-base);
    }
    :host([variant='alert']) button {
      background-color: var(--color-warning-base);
    }
  `;
}
