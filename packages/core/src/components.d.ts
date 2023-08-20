/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { AutoPlayType, PerloadType } from "./components/bc-video/bc-video";
export { AutoPlayType, PerloadType } from "./components/bc-video/bc-video";
export namespace Components {
    interface BcBarrage {
    }
    interface BcVideo {
        "autoplay"?: AutoPlayType;
        "controls"?: boolean;
        "height"?: string | number;
        "loop"?: boolean;
        "muted"?: boolean;
        "poster"?: string;
        "preload"?: PerloadType;
        "src": string;
        "width"?: string | number;
    }
}
declare global {
    interface HTMLBcBarrageElement extends Components.BcBarrage, HTMLStencilElement {
    }
    var HTMLBcBarrageElement: {
        prototype: HTMLBcBarrageElement;
        new (): HTMLBcBarrageElement;
    };
    interface HTMLBcVideoElement extends Components.BcVideo, HTMLStencilElement {
    }
    var HTMLBcVideoElement: {
        prototype: HTMLBcVideoElement;
        new (): HTMLBcVideoElement;
    };
    interface HTMLElementTagNameMap {
        "bc-barrage": HTMLBcBarrageElement;
        "bc-video": HTMLBcVideoElement;
    }
}
declare namespace LocalJSX {
    interface BcBarrage {
    }
    interface BcVideo {
        "autoplay"?: AutoPlayType;
        "controls"?: boolean;
        "height"?: string | number;
        "loop"?: boolean;
        "muted"?: boolean;
        "poster"?: string;
        "preload"?: PerloadType;
        "src"?: string;
        "width"?: string | number;
    }
    interface IntrinsicElements {
        "bc-barrage": BcBarrage;
        "bc-video": BcVideo;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "bc-barrage": LocalJSX.BcBarrage & JSXBase.HTMLAttributes<HTMLBcBarrageElement>;
            "bc-video": LocalJSX.BcVideo & JSXBase.HTMLAttributes<HTMLBcVideoElement>;
        }
    }
}
