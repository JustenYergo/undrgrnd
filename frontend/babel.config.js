module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    env: {
      prodcution: {
        plugins: ['react-native-paper/babel'],
      },
    },
  };
};
