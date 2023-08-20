import { newE2EPage } from '@stencil/core/testing';

describe('bc-video', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<bc-video></bc-video>');

    const element = await page.find('bc-video');
    expect(element).toHaveClass('hydrated');
  });
});
