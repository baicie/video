import { Component, Element, Event, Host, Prop, Watch, h } from '@stencil/core';
import { videoProps } from '../../player/props';

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

  // @Prop() className?: string

  private onClick = () => {};

  render() {
    const {
      height,
      src,
      // className,
      controls,
      autoplay,
      loop,
      muted,
      poster,
      preload,
      width,
    } = this;

    return (
      <Host onClick={this.onClick}>
        <video
          height={height}
          src={src}
          // class={className}
          controls={controls}
          autoplay={autoplay}
          loop={loop}
          muted={muted}
          poster={poster}
          preload={preload}
          width={width}
        >
          <slot></slot>
        </video>
      </Host>
    );
  }
}
