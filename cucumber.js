const common = [
  '--require-module ts-node/register' // Load TypeScript module
];

const mooc_backend = [
  ...common,
  'tests/apps/features/**/*.feature',
  '--format progress-bar',
  '--require tests/apps/features/step_definitions/*.steps.ts'
].join(' ');

module.exports = {
  default: mooc_backend
};
