import {LitElement, html, css} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import {Variables} from './variables';

/**
 * Grid layout
 */
@customElement('persona-layout')
export class GridLayout extends LitElement {
    static styles = css`
    :host{
        display:grid;
        width: 100%; height: 100%;
        grid-template-rows: ${Variables.appBarHeight}px 1fr;
        grid-template-columns: ${Variables.navWidth}px 1fr;
        grid-template-areas:
            "nav header"
            "nav main";
    }
    ::slotted(*) {
        //color: green;
    }
    #header::slotted(*) {
        grid-area: header;
    }
    #main::slotted(*) {
        grid-area: main;
    }
    #nav::slotted(*) {
        grid-area: nav;
        background-color: lightgray;
    }
    `;

    protected render() {
        return html`
        <slot id="header" name="header"></slot>
        <slot id="main" name="main"></slot>
        <slot id="nav" name="nav"></slot>`;
  }
}
