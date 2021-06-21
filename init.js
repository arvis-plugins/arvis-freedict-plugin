const arvish = require("arvish");

if (!arvish.config.has("setting")) {
  const defaultConfig = {
    // Ref: https://dictionaryapi.dev/
    lang: 'en_US'
  };

  arvish.config.set("setting", defaultConfig);
}
