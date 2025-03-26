import { esbuildPlugin } from '@web/dev-server-esbuild';
import { playwrightLauncher } from '@web/test-runner-playwright';

export default {
  files: ['**/*.test.ts'],
  plugins: [esbuildPlugin({ ts: true, tsconfig: 'tsconfig.json' })],
  browsers: [
    playwrightLauncher({
      product: 'chromium',
    }),
    playwrightLauncher({
      product: 'firefox',
      launchOptions: {
        args: ['--no-sandbox', '--headless=false'],
        headless: true
      }
    }),
    playwrightLauncher({
      product: 'webkit',
    }),
  ],
  browserStartTimeout: 10000,
};
