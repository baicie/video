import { Component, Host, Listen, Prop, State, h } from '@stencil/core';
import { useNamespace } from '../../hooks/use-namespace';
import { useClassName } from '../../hooks/use-classname';

export interface MenuItemType {
  icon: string;
  label: string;
  onClick?: () => void;
}

@Component({
  tag: 'bc-menu',
  styleUrl: 'bc-menu.scss',
  shadow: true,
})
export class BcMenu {
  @Prop() menu: MenuItemType[] = [];

  @Listen('contextmenu')
  onContextMenu(e: MouseEvent) {
    e.preventDefault();
    this._open = true;
    this._x = `${e.clientX}px`;
    this._y = `${e.clientY}px`;
    console.log('contextmenu', this._open, e.clientX, e.clientY);
  }

  @Listen('click')
  onClick(e: MouseEvent) {
    e.preventDefault();
    this._open = false;
    console.log('click', this._open);
  }

  @State()
  _open: boolean = false;

  @State()
  _x: string = '0';

  @State()
  _y: string = '0';

  render() {
    const ns = useNamespace('menu');
    const cn = useClassName();

    return (
      <Host class={ns.b()}>
        <div class={cn.multiple(ns.b(), ns.is('open', this._open))} style={{ left: this._x, top: this._y }}>
          {this.menu}
        </div>
        <slot></slot>
      </Host>
    );
  }
}
