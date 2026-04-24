import path from 'node:path';

export default {
  '**/*.{js,jsx,ts,tsx}': (filenames) => {
    const relativePaths = filenames.map((f) => path.relative(process.cwd(), f)).join(' ');

    return [
      `eslint --fix --max-warnings 0 --no-warn-ignored ${relativePaths}`,
      `prettier --write ${relativePaths}`,
    ];
  },
  '!**/*.{js,jsx,ts,tsx}': ['prettier --write --ignore-unknown'],
};
