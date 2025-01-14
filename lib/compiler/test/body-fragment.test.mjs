/* eslint-disable no-console */

import { transform } from '@astrojs/compiler';

async function run() {
  const result = await transform(
    `---
import ThemeToggleButton from './ThemeToggleButton.tsx';
---

<title>Uhhh</title>

<body><div>Hello!</div></body>`,
    {
      sourcemap: true,
      as: 'fragment',
      site: undefined,
      sourcefile: 'MoreMenu.astro',
      sourcemap: 'both',
      internalURL: 'astro/internal',
    }
  );

  if (!result.code.includes('<body><div>Hello!</div></body>')) {
    throw new Error('Expected output to contain <body><div>Hello!</div></body>');
  }
}

await run();
