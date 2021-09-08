import {LitElement, html, css} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import {Variables} from './variables';

/**
 * Border layout
 */
@customElement('persona-border-layout')
export class BorderLayout extends LitElement {

    static styles = css`
    :host{
        display:grid;
        width: 100%; height: 100%;
        margin:0; padding:0; border:0;
        grid-template-rows: fit-content(auto) 2fr fit-content(auto);
        grid-template-columns: fit-content(auto) 2fr fit-content(auto);
        grid-template-areas:
            "north north north"
            "west center east"
            "south south south";
    }
    ::slotted(*) {
        //color: green;
    }
    #north::slotted(*) {
        grid-area: north;
    }
    #south::slotted(*) {
        grid-area: south;
    }
    #west::slotted(*) {
        grid-area: west;
    }
    #east::slotted(*) {
        grid-area: east;
    }
    #center::slotted(*) {
        grid-area: center;
    }
    `;

    protected render() {
        return html`
        <slot id="north" name="north"></slot>
        <slot id="south" name="south"></slot>
        <slot id="east" name="east"></slot>
        <slot id="west" name="west"></slot>
        <slot id="center" name="center"></slot>`;
  }
}
