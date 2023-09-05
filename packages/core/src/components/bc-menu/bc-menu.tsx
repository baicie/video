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
  @Prop() menuItems: MenuItemType[];
  @Prop() name: string;
  @Listen('contextmenu')
  onContextMenu(e: MouseEvent) {
    e.preventDefault();
    this._open = true;
    this._x = `${e.clientX}px`;
    this._y = `${e.clientY}px`;
    console.log('contextmenu', this.name, this.menuItems);
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

  // @Method()
  // async menuRender() {
  //   return this.menuItems.map(item => <div>{item.label}</div>);
  // }

  @Method()
  async onClickWapper(e: MouseEvent, item: MenuItemType) {
    e.preventDefault();
    console.log(e, item);
  }

  render() {
    const ns = useNamespace('menu');
    const cn = useClassName();

    return (
      <Host class={ns.b()}>
        <div class={cn.multiple(ns.b(), ns.is('open', this._open))} style={{ left: this._x, top: this._y }}>
          {this.menuItems.map(item => (
            <div onClick={e => this.onClickWapper(e, item)} class={ns.e('item')}>
              {item.label}
            </div>
          ))}
        </div>
        <slot></slot>
      </Host>
    );
  }
}
