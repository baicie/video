import { newE2EPage } from '@stencil/core/testing';

describe('bc-menu', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<bc-menu></bc-menu>');

    const element = await page.find('bc-menu');
    expect(element).toHaveClass('hydrated');
  });
});
