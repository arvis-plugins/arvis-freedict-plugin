const arvish = require("arvish");

if (!arvish.getConfig().has("setting")) {
  const defaultConfig = {
    // Ref: https://dictionaryapi.dev/
    lang: 'en_US'
  };

  arvish.getConfig().set("setting", defaultConfig);
}
