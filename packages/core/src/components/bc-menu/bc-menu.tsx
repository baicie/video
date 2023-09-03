import { Component, Host, Listen, State, h } from '@stencil/core';
import { useNamespace } from '../../hooks/use-namespace';
import { useClassName } from '../../hooks/use-classname';

@Component({
  tag: 'bc-menu',
  styleUrl: 'bc-menu.scss',
  shadow: true,
})
export class BcMenu {
  @Listen('contextmenu')
  onContextMenu(e: MouseEvent) {
    e.preventDefault();
    this._open = true;
    console.log('contextmenu', e);
  }

  @State()
  _open: boolean = false;

  render() {
    const ns = useNamespace('menu');
    const cn = useClassName();
    return (
      <Host class={ns.b()}>
        <div class={cn.multiple(ns.e('popup'), ns.is('open'))}>popup</div>
        <slot></slot>
      </Host>
    );
  }
}
