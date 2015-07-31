Package.describe({
  name: 'starrynight:autodrop',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'Reset the database on a regular interval.',
  // URL to the Git repository containing the source code for this package.
  git: 'http://github.com/awatson1978/starrynight-autodrop',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function (api) {
  api.versionsFrom('1.1.0.2');
  api.use('percolate:synced-cron');
  api.addFiles('autodrop.js');
});

Package.onTest(function (api) {
  api.use('tinytest');
  api.use('starrynight:autodrop');
  api.addFiles('autodrop-tests.js');
});
