import { Story, Meta } from '@storybook/web-components';
import {LitElement, html, css,} from 'lit';
import {classMap} from 'lit/directives/class-map.js';

import './borderlayout';

export default {
  title: 'Persona/BorderLayout',
  component: 'persona-border-layout',
  argTypes: {
    //fullWidth: {control: 'boolean',
    //  description: "add a 'full-width' class."}
  },
} as Meta;


const Template:Story = () => html`
<persona-border-layout>
  <persona-app-bar slot="north" heading="I'm App-Bar in North." primary></persona-app-bar>
  <div slot="south" style="height:32px;background-color:green">South</div>
  <div slot="east" style="width:100px;background-color:blue">East</div>
  <div slot="west" style="width:180px;background-color:yellow">West</div>
  <div slot="center" style="background-color:white">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
</div>
</persona-border-layout>
`;

export const Basic = Template.bind({});
Basic.args = {
};

