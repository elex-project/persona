import {LitElement, html, css} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import {classMap} from 'lit/directives/class-map.js';
import {Variables, Colors} from './variables';

/**
 * todo hover, focus, disabled, icon ...
 */
@customElement('persona-button')
export class Button extends LitElement {

  static styles = [
      css `
    :host {

    }
    button {
        min-height: 48px;
        padding: 8px 16px;
        border: none;
        cursor: pointer;
        text-transform: uppercase;
        border-radius: 8px;
        //font-weight: 500;
    }
    button:hover{
        //background-color: 
    }
    button.primary{
        background-color: ${Colors.primaryColor};
        color: ${Colors.textOnPrimary}
    }
    button.accent{
        background-color: ${Colors.accentColor};
        color: ${Colors.textOnAccent}
    }
    button.raised{

    }
  `];

  @property({type:Boolean})
  primary? = false;
  @property({type:Boolean})
  accent? = false;
  @property({type:Boolean})
  raised? = false;

  protected render() {
      const classes = {
          primary: this.primary,
          accent: this.accent,
          raised: this.raised
      };
      return html`<button class=${classMap(classes)}>
      <slot></slot>
      </button>
`;
  }
}

