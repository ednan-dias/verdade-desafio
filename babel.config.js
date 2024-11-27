module.exports = function (api) {
  return {
    presets: [
      "babel-preset-expo",
      "module:@expo/knex-expo-sqlite-dialect/babel-preset",
    ],
  };
};
