function getEnv(name) {
  if (name == null) {
    return process.env;
  }

  return process.env[name];
}

module.exports = { getEnv };
