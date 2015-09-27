Package.describe({
  name: 'astrocoders:api',
  version: '0.0.1',
  summary: '',
  git: '',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  
  api.use('ddp');

  api.addFiles([
    'api.js',
    'connection.js',
    'auth.js'
  ]);

  api.export(['Astrocoders']);
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('astrocoders:api');
  api.addFiles('api-tests.js');
});
