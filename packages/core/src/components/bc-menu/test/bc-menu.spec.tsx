import { newSpecPage } from '@stencil/core/testing';
import { BcMenu } from '../bc-menu';

describe('bc-menu', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [BcMenu],
      html: `<bc-menu></bc-menu>`,
    });
    expect(page.root).toEqualHtml(`
      <bc-menu>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </bc-menu>
    `);
  });
});
