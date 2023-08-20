import { newSpecPage } from '@stencil/core/testing';
import { BcVideo } from '../bc-video';

describe('bc-video', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [BcVideo],
      html: `<bc-video></bc-video>`,
    });
    expect(page.root).toEqualHtml(`
      <bc-video>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </bc-video>
    `);
  });
});
