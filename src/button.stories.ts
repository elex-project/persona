import { Story, Meta } from '@storybook/web-components';
import {LitElement, html, css} from 'lit';

import './button';

export default {
  title: 'Persona/Button',
  component: 'persona-button',
  argTypes: {
    label: { control: 'text',
      description: 'Label of the button.' },

    primary: { control: 'boolean',
      description: 'Primary button.' },

    accent: { control: 'boolean',
      description: 'Accent button.' },

    raised: { control: 'boolean',
      description: 'Raised button.' },
  },
} as Meta;

const Template:Story = ({label,primary, accent,raised}) => html`
<persona-button ?primary=${primary} ?accent=${accent}
?raised=${raised}>${label}</persona-button>
`;

export const Basic = Template.bind({});
Basic.args = {
  label: 'Button',
};

export const Primary = Template.bind({});
Primary.args = {
  label: 'Button',
  primary: true,
};

export const Accent = Template.bind({});
Accent.args = {
  label: 'Button',
  accent: true,
};