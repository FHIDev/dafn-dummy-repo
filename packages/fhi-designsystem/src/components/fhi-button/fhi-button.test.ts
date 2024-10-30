import { html, fixture, expect } from '@open-wc/testing';

import { FhiButton } from './fhi-button.ts';

// eslint-disable-next-line @typescript-eslint/no-unused-expressions
FhiButton;

describe('MyElement', () => {
  it('has a default title "Hey there" and counter 5', async () => {
    const element: FhiButton = await fixture(html`
      <fhi-button>Hello World!</fhi-button>
    `);

    expect(element.textContent).to.equal('Hello World!');
  });
});
