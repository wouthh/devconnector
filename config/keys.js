const SIGNING_SECRET_EXAMPLE = 'replace-with-a-local-development-secret';

function requiredEnvironmentVariable(name, disallowedValue) {
  const value = process.env[name];

  if (!value || !value.trim()) {
    throw new Error('Missing required environment variable: ' + name);
  }

  if (disallowedValue && value === disallowedValue) {
    throw new Error('Replace the example value for environment variable: ' + name);
  }

  return value;
}

module.exports = {
  mongoURI: requiredEnvironmentVariable('MONGO_URI'),
  secretOrKey: requiredEnvironmentVariable(
    'PASSPORT_SECRET_KEY',
    SIGNING_SECRET_EXAMPLE
  )
};
