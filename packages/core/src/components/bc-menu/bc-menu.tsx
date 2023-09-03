import { Component, Host, Listen, h } from '@stencil/core';
import { useNamespace } from '../../hooks/use-namespace';

@Component({
  tag: 'bc-menu',
  styleUrl: 'bc-menu.scss',
  shadow: true,
})
export class BcMenu {
  @Listen('contextmenu')
  onContextMenu(e: MouseEvent) {
    e.preventDefault();
    console.log('contextmenu', e);
  }
  render() {
    const ns = useNamespace('menu');

    return (
      <Host class={ns.b()}>
        <div class={ns.b()}>menu</div>
        <slot></slot>
      </Host>
    );
  }
}
