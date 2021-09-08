import { Story, Meta } from '@storybook/web-components';
import {LitElement, html, css,} from 'lit';
import {classMap} from 'lit/directives/class-map.js';

import './flowlayout';

export default {
  title: 'Persona/FlowLayout',
  component: 'persona-flow-layout',
  argTypes: {
    fullWidth: {control: 'boolean',
      description: "add a 'full-width' class."}
  },
} as Meta;


const Template:Story = ({fullWidth}) => html`
<persona-flow-layout class=${classMap({'full-width':fullWidth})}>
  <div style="background-color:red">1</div>
  <div data-width="2" style="background-color:green">2</div>
  <div style="background-color:blue">1</div>
  <div data-width="12" style="background-color:yellow">12</div>
  <div data-width="4" style="background-color:blue">4</div>
</persona-flow-layout>
`;

export const Basic = Template.bind({});
Basic.args = {
};
export const FullWidth = Template.bind({});
FullWidth.args = {
  fullWidth: true
};
