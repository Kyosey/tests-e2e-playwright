import { test, expect } from "@playwright/test";

test("has title", async ({ page }) => {
  await page.goto("https://playwright.dev/");

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test("get started link", async ({ page }) => {
  await page.goto("https://playwright.dev/");

  // Click the get started link.
  await page.getByRole("link", { name: "Get started" }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(
    page.getByRole("heading", { name: "Installation" })
  ).toBeVisible();
});

// test("test", async ({ page }) => {
//   await page.goto("https://www.google.fr/");
//   await page.getByRole("button", { name: "Tout refuser" }).click();
//   await page.getByRole("combobox", { name: "Rech." }).click();
//   await page.getByRole("combobox", { name: "Rech." }).fill("playw");
//   await page.getByRole("combobox", { name: "Rech." }).press("ArrowDown");
// });

test.describe("Compteur", () => {
  test("devrait afficher 0 au démarrage", async ({ page }) => {
    await page.goto("http://localhost:5173/");
    const counter = await page.getByTestId("counter");
    await expect(counter).toHaveText("count is 0");
  });

  test("devrait afficher 2 après deux clics sur +", async ({ page }) => {
    await page.goto("http://localhost:5173/");
    const button = await page.getByTestId("counter");
    await button.click();
    await button.click();
    const counter = await page.getByTestId("counter");
    await expect(counter).toHaveText("count is 2");
  });
});
