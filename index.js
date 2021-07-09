const arvish = require("arvish");

const conf = {
  lang: JSON.parse(process.env.lang)
};

const transform = (resp) => {
  const items = [];

  resp.map((word) => {
    word.meanings.map((meaning) => {
      meaning.definitions.map((definition) => {
        items.push({
          title: `[${meaning.partOfSpeech}]: ${word.word}: ${definition.definition}`,
          subtitle: definition.example ? `${definition.example}` : "",
          arg: definition.definition,
          variables: {
            action: "clipboard",
          },
        });
      });
    });
  });

  return items;
};

const getPluginItems = async ({ inputStr }) => {
  if (inputStr === "") {
    return {
      items: [],
    };
  }

  const configItems = [];

  if (inputStr && inputStr.length > 1) {
    try {
      const resp = await arvish.fetch(
        `https://api.dictionaryapi.dev/api/v2/entries/${conf.lang}/${inputStr}`,
        { maxAge: 86400000 }
      );

      return {
        items: [...transform(resp), ...configItems],
      };
    } catch (err) {}
  }

  return {
    items: configItems,
  };
};

module.exports = getPluginItems;
