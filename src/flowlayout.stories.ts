import { Story, Meta } from '@storybook/web-components';
import {LitElement, html, css,} from 'lit';

import './flowlayout';

export default {
  title: 'Persona/FlowLayout',
  component: 'persona-flow-layout',
  argTypes: {
    //heading: { control: 'text',
    //description: 'Title of the page.' },
  },
} as Meta;


const Template:Story = () => html`
<persona-flow-layout>
  <div style="background-color:red">1</div>
  <div data-width="2" style="background-color:green">2</div>
  <div style="background-color:blue">1</div>
  <div data-width="12" style="background-color:yellow">12</div>
  <div data-width="4" style="background-color:blue">4</div>
</persona-flow-layout>
`;

export const Basic = Template.bind({});
Basic.args = {
  //heading: 'AppBar Title',
};

