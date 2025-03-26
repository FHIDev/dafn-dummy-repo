import { esbuildPlugin } from '@web/dev-server-esbuild';
import { playwrightLauncher } from '@web/test-runner-playwright';

export default {
  files: ['**/*.test.ts'],
  plugins: [esbuildPlugin({ ts: true, tsconfig: 'tsconfig.json' })],
  browsers: [
    playwrightLauncher({
      launchOptions: { args: ['--no-sandbox'] },
      product: 'chromium',
    }),
    playwrightLauncher({
      launchOptions: { args: ['--no-sandbox'] },
      product: 'firefox',
    }),
    playwrightLauncher({
      launchOptions: { args: ['--no-sandbox'] },
      product: 'webkit',
    }),
  ],
};
