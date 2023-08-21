import { Component, Element, Host, Prop, h } from '@stencil/core';
import { useNamespace } from '../../hooks/use-namespace';

export type AutoPlayType = boolean | 'muted' | 'play' | 'any';

export type PerloadType = 'auto' | 'metadata' | 'none';

@Component({
  tag: 'bc-video',
  styleUrl: 'bc-video.css',
  shadow: true,
})
export class BcVideo {
  constructor() {
    // Object.entries(videoProps).forEach(([key, value]) =>
    //   @Prop() this[key] = value
    // );
  }
  @Element() el!: HTMLElement;

  @Prop({ mutable: true }) autoplay?: AutoPlayType;

  @Prop({ mutable: true }) controls?: boolean;

  @Prop() height?: string | number;

  @Prop() loop?: boolean;

  @Prop() muted?: boolean;

  @Prop() poster?: string;

  @Prop() preload?: PerloadType;

  @Prop() src: string;

  @Prop() width?: string | number;

  @Prop() type?: string = 'ytb';

  private onClick = () => {};

  render() {
    const ns = useNamespace('video');
    const {
      height,
      src,
      // className,
      // controls,
      autoplay,
      loop,
      muted,
      poster,
      preload,
      width,
      type,
    } = this;

    return (
      <Host class={`${ns.b()} ${ns.m(type)}`} onClick={this.onClick}>
        <div class={ns.e('wrapper')} aria-label="baicie播放器">
          <div class={ns.e('inner')}>
            <video
              height={height}
              src={src}
              // class={className}
              controls={false}
              autoplay={autoplay}
              loop={loop}
              muted={muted}
              poster={poster}
              preload={preload}
              width={width}
            >
              <slot></slot>
            </video>
          </div>

          <div class={ns.e('controls')}></div>
        </div>
      </Host>
    );
  }
}
