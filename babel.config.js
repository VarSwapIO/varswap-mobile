module.exports = {
  presets: ['babel-preset-expo'],
  plugins: [
    'react-native-reanimated/plugin',
    [
      'module-resolver',
      {
        root: ['./src/'],
        alias: {
          screens: './src/screens',
          app: './src/app',
          constants: './src/constants',
          components: './src/components',
          utils: './src/utils',
          navigator: './src/navigator',
          assets: './src/assets',
          api: './src/api',
          hooks: './src/hooks',
          reducer: './src/redux/reducer',
          saga: './src/redux/saga',
          store: './src/redux/store',
          services: './src/services',
          styles: './src/styles',
          features: './src/features',
          entity: './src/entities',
          data: './src/data',
          core: './src/core',
        },
      },
    ],
  ],
};