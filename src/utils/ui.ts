import type { Page } from '@playwright/test';

export async function clickOkButton(page: Page): Promise<void> {
  // Prefer a button role with exact name "OK" (case-insensitive)
  const okButton = page.getByRole('button', { name: /^ok$/i });
  if (await okButton.count() > 0) {
    await okButton.first().click();
    return;
  }

  // Fallback: any element whose text content is exactly "OK" (case-insensitive)
  const okText = page.locator('xpath=//*[translate(normalize-space(.), "ABCDEFGHIJKLMNOPQRSTUVWXYZ", "abcdefghijklmnopqrstuvwxyz") = "ok"]');
  if (await okText.count() > 0) {
    await okText.first().click();
    return;
  }

  throw new Error('OK button not found on the page');
}
