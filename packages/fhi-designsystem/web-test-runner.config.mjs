import { esbuildPlugin } from '@web/dev-server-esbuild';
import { playwrightLauncher } from '@web/test-runner-playwright';

export default {
  files: ['**/*.test.ts'],
  plugins: [esbuildPlugin({ ts: true, tsconfig: 'tsconfig.json' })],
  nodeResolve: true,
  concurrentBrowsers: 3,
  browsers: [
    playwrightLauncher({
      product: 'chromium',
      launchOptions: {
        args: ['--no-sandbox'],
      },
    }),
    playwrightLauncher({
      product: 'firefox',
      launchOptions: {
        headless: false,
      },
    }),
    playwrightLauncher({ product: 'webkit' }),
  ],
  browserStartTimeout: 20000,
};
