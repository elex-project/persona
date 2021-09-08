import {LitElement, html, css} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import {classMap} from 'lit/directives/class-map.js';

import {Variables} from './variables';


/**
 * Flex container
 */
@customElement('persona-flow-layout')
export class FlowLayout extends LitElement {
    @property({type:Boolean})
    fullWidth? = false;

    static styles = css`
    :host{
        margin:0 auto; padding:0 24px; border:0;
        box-sizing: border-box;
        display: flex;
        flex-flow: row;
        flex-wrap: wrap;
        max-width: ${Variables.breakPointDesktop}px
    }
    :host(.full-width){
        padding:0;
        max-width:inherit;
    }
    ::slotted(*){
        width: 100%;
        display: inline-block;
        margin:0; padding:0; border:0;
    }
    ::slotted([data-width="1"]){
        width: 25%;
    }
    ::slotted([data-width="2"]){
        width: 50%;
    }
    ::slotted([data-width="3"]){
        width: 75%;
    }
    @media screen and (min-width: ${Variables.breakPointMobile}px) {
        ::slotted([data-width="1"]){
            width: 12.5%;
        }
        ::slotted([data-width="2"]){
            width: 25%;
        }
        ::slotted([data-width="3"]){
            width: 37.5%;
        }
        ::slotted([data-width="4"]){
            width: 50%;
        }
        ::slotted([data-width="5"]){
            width: 62.5%;
        }
        ::slotted([data-width="6"]){
            width: 75%;
        }
        ::slotted([data-width="7"]){
            width: 87.5%;
        }
    }
    @media screen and (min-width: ${Variables.breakPointTablet}px) {
        ::slotted([data-width="1"]){
            width: 8.33%;
        }
        ::slotted([data-width="2"]){
            width: 16.66%;
        }
        ::slotted([data-width="3"]){
            width: 25%;
        }
        ::slotted([data-width="4"]){
            width: 33.33%;
        }
        ::slotted([data-width="5"]){
            width: 41.66%;
        }
        ::slotted([data-width="6"]){
            width: 50%;
        }
        ::slotted([data-width="7"]){
            width: 58.33%;
        }
        ::slotted([data-width="8"]){
            width: 66.66%;
        }
        ::slotted([data-width="9"]){
            width: 75%;
        }
        ::slotted([data-width="10"]){
            width: 83.33%;
        }
        ::slotted([data-width="11"]){
            width: 91.66%;
        }
        ::slotted([data-width="12"]){
            width: 100%;
        }
    }
    `;

    protected render(){
        return html`<slot></slot>`;
    }
}