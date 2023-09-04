import { Component, Host, Listen, Method, Prop, State, h } from '@stencil/core';
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
  @Prop({ mutable: true }) menus: MenuItemType[] = [];

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

  @Method()
  async menuRender() {
    return this.menus.map(item => <div>{item.label}</div>);
  }

  render() {
    const ns = useNamespace('menu');
    const cn = useClassName();

    return (
      <Host class={ns.b()}>
        <div class={cn.multiple(ns.b(), ns.is('open', this._open))} style={{ left: this._x, top: this._y }}>
          {this._x}
        </div>
        <slot></slot>
      </Host>
    );
  }
}
