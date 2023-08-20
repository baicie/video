import { newE2EPage } from '@stencil/core/testing';

describe('bc-barrage', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<bc-barrage></bc-barrage>');

    const element = await page.find('bc-barrage');
    expect(element).toHaveClass('hydrated');
  });
});
