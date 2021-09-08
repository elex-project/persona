import {LitElement, html, css} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import {Variables, Colors} from './variables';

@customElement('persona-app-bar')
export class AppBar extends LitElement {

  static styles =css `
  :host {
	width: 100%;
	height: ${Variables.appBarHeight}px;
	box-sizing: border-box;
	display: flex;
	align-items: center;
	background-color: var(--primary-color, ${Colors.primaryColor});
	color: var(--text-on-primary-color, ${Colors.textOnPrimary});
	margin:0; padding: 8px 24px; border:0;
}
h1 {
	margin: 0;
	font-size: 1.5rem;
	font-weight: bold;
}
  `;

  @property()
  heading? = "Heading";

  // todo add tailing extra buttons
  protected render() {
      return html`<h1>${this.heading}</h1>
`;
  }
}

