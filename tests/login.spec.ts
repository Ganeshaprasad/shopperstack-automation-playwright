
import { test } from '../src/fixtures/fixtures';

test('NavigatorLogin', async ({ loginpage }) => {
  await test.step('Login to ShoppersStack', async () => {
    await loginpage.login("ganesha.prasad96@gmail.com", "Ganesha@96");
  });
});


