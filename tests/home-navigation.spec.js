// @ts-check
const { test, expect } = require('@playwright/test');

test('homepage has title and links to pages in Navigation', async ({ page }) => {
  // await page.goto('https://playwright.dev/');
  await page.goto('http://localhost:3000/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Kurt Hansen' s Race Central Media Radio/);

  // create a locator
  const aboutLink = page.getByRole('link', { name: 'About' });
  const newsLink = page.getByRole('link', { name: 'News' });
  const podcastLink = page.getByRole('link', { name: 'Podcast' });
  const radioLink = page.getByRole('link', { name: 'Radio' });
  const tvLink = page.getByRole('link', { name: 'TV' });

  // Expect an attribute "to be strictly equal" to the value.
  await expect(aboutLink).toHaveAttribute('href', '/about');
  await expect(newsLink).toHaveAttribute('href', '/news');
  // await expect(podcastLink).toHaveAttribute('href', '/podcast');
  await expect(radioLink).toHaveAttribute('href', '/');
  await expect(tvLink).toHaveAttribute('href', '/tv');

  // Click the get started link.
  await aboutLink.click();
  // Expects the Title to contain About.
  await expect(page).toHaveTitle(/About Kurt Hansen's Race Central Media/);
  await newsLink.click();
  await expect(page).toHaveTitle(/Kurt Hansen's Race Central Media News Feed/);
  // await podcastLink.click();
  // await expect(page).toHaveTitle(/Kurt Hansen' s Race Central Media Podcast/);
  await radioLink.click();
  await expect(page).toHaveTitle(/Kurt Hansen' s Race Central Media Radio/);
  await tvLink.click();
  await expect(page).toHaveTitle(/Kurt Hansen's Race Central Media TV/);
});
