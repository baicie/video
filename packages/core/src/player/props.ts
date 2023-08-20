import { PropType } from 'vue';

const prop = <T>(options: { type: PropType<T>; default?: unknown }) => options;

export const videoProps = {
  src: prop({
    type: String,
  }),
  width: prop({
    type: [Number, String] as unknown as PropType<string | number>,
  }),
  autoplay: prop({
    type: [Boolean, String] as unknown as PropType<boolean | 'muted' | 'play' | 'any'>,
  }),
};

export const propsConfig = {
  ...videoProps,
} as const;

export type PropsConfig = typeof propsConfig;
export type PropKey = keyof PropsConfig;

export const propKeys = Object.keys(propsConfig) as Array<PropKey>;
