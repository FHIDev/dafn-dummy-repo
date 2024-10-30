import type { Meta, StoryObj } from '@storybook/web-components';
import { withActions } from '@storybook/addon-actions/decorator';

import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';

import { FhiButton, FhiButtonProps } from './fhi-button';

// eslint-disable-next-line @typescript-eslint/no-unused-expressions
FhiButton;

const meta: Meta = {
  title: 'Components/fhi-button',
  tags: ['autodocs'],
  parameters: {
    actions: {
      handles: ['click'],
    },
  },
  decorators: [withActions],
  render: args =>
    html`<fhi-button variant=${ifDefined(args.variant)}>
      Fhi Button
    </fhi-button>`,
  argTypes: {
    variant: {
      options: ['primary', 'danger'],
      control: { type: 'radio' },
    },
  },
};

type Story = StoryObj<FhiButtonProps>;

export const Primary: Story = {
  args: {
    variant: 'primary',
  } satisfies FhiButtonProps,
};

export const Danger: Story = {
  args: {
    variant: 'danger',
  } satisfies FhiButtonProps,
};

export default meta;
