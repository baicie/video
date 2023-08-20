import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'bc-barrage',
  styleUrl: 'bc-barrage.css',
  shadow: true,
})
export class BcBarrage {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
