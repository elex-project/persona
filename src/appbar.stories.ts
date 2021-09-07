import { Story, Meta } from '@storybook/web-components';
import {LitElement, html, css,} from 'lit';

import './appbar';

export default {
  title: 'Persona/AppBar',
  component: 'persona-app-bar',
  argTypes: {
    heading: { control: 'text',
    description: 'Title of the page.' },
  },
} as Meta;

interface ArgTypes {
  /**
   * Title
   */
  heading?: string;
}

const Template:Story<ArgTypes> = ({heading}) => html`
<persona-app-bar .heading=${heading}></persona-app-bar>
`;

export const Basic = Template.bind({});
Basic.args = {
  heading: 'AppBar Title',
};

