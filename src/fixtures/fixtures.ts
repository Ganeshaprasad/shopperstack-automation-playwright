import { test as base } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

// Define a TypeScript type for extra things we want in tests
type PageFixture = {
  loginpage: LoginPage;
}


//  Create our own "test" function that knows about loginPage fixture
//  base.extend<PageFixtures>(...) tells Playwright:
//  "Please add loginPage to the default fixtures"

export const test = base.extend<PageFixture>({

  // Define how to create the "loginPage" fixture
  // ({ page })  -> Playwright gives us the default 'page' object
  // use(...)    -> function we call to pass our fixture into the test
  loginpage: async ({ page }, use) => {

    // Step 1: Create LoginPage object using Playwright's page
    const loginpage = new LoginPage(page);

    // Step 2: Give this loginPage object to the test
    // After this line, in the test you can write: ({ loginPage })
    await use(loginpage);
    
    // Step 3: After the test finishes, control comes back here
    // If we needed cleanup, we would do it after use(...)
  }
});
export { } from '@playwright/test';