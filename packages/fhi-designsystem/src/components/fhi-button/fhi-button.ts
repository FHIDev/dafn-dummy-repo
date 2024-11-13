import { html, css, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';

export const FhiButtonSelector = 'fhi-button';

export type FhiButtonProps = Pick<FhiButton, 'variant'>;

@customElement(FhiButtonSelector)
export class FhiButton extends LitElement {
  @property({ type: String }) variant?: 'primary' | 'danger';

  @property({ type: String }) test?: 'primary' | 'danger';

  render() {
    return html` <button><slot></slot></button> `;
  }

  // Layer - Category - Type - Scope - State
  static styles = css`
    :host {
      --component-size-width: max-content;
      --component-size-height: max-content;
      --component-padding: var(--semantic-space-global-padding-2)
        var(--semantic-space-global-padding-4);
      --component-font-paragraph: var(--semantic-font-global-paragraph-1);
      --component-border: var(--semantic-border-global-default-1);
      --component-border-radius: var(--semantic-border-radius-global-default-1);
      --component-box-shadow: var(--semantic-box-shadow-global-default-1);

      --component-color-primary-content: var(
        --semantic-color-global-text-inverted-1
      );
      --component-color-primary-background: var(
        --semantic-color-brand-primary-6
      );
      --component-color-primary-background-hover: var(
        --semantic-color-brand-primary-7
      );
      --component-color-primary-border: var(--semantic-color-brand-primary-6);
      --component-color-primary-border-hover: var(
        --semantic-color-brand-primary-7
      );

      --component-color-danger-content: var(
        --semantic-color-global-text-inverted-1
      );
      --component-color-danger-background: var(
        --semantic-color-global-danger-6
      );
      --component-color-danger-background-hover: var(
        --semantic-color-global-danger-7
      );
      --component-color-danger-border: var(--semantic-color-global-danger-6);
      --component-color-danger-border-hover: var(
        --semantic-color-global-danger-7
      );

      button {
        padding: var(--component-padding);
        font: var(--component-font-paragraph);
        width: var(--component-size-width);
        height: var(--component-size-height);
        border: var(--component-border);
        border-radius: var(--component-border-radius);
        box-shadow: var(--component-box-shadow);
        cursor: pointer;
      }
    }

    :host(:not([variant])),
    :host([variant='']),
    :host([variant='primary']) {
      button {
            color: var(--component-color-primary-content);
        background-color: var(--component-color-primary-background);
        border-color: var(--component-color-primary-border);
        &:hover {
          background-color: var(--component-color-primary-background-hover);
          border-color: var(--component-color-primary-border-hover);
        }
      }
    }

    :host([variant='danger']) {
      button {
        color: var(--component-color-danger-content);
        background-color: var(--component-color-danger-background);
        border-color: var(--component-color-danger-border);
        &:hover {
          background-color: var(--component-color-danger-background-hover);
          border-color: var(--component-color-danger-border-hover);
        }
      }
    }
  `;
}
