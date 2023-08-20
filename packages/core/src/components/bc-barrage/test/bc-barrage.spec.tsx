import { newSpecPage } from '@stencil/core/testing';
import { BcBarrage } from '../bc-barrage';

describe('bc-barrage', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [BcBarrage],
      html: `<bc-barrage></bc-barrage>`,
    });
    expect(page.root).toEqualHtml(`
      <bc-barrage>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </bc-barrage>
    `);
  });
});
