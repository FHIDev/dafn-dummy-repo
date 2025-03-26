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
        headless: false,
      },
    }),
    playwrightLauncher({
      product: 'webkit',
    }),
  ],
  browserStartTimeout: 60000,
};
