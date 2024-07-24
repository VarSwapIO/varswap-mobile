const { getDefaultConfig } = require('expo/metro-config');
const { mergeConfig } = require('@react-native/metro-config');

/**
 * Metro configuration
 * https://facebook.github.io/metro/docs/configuration
 *
 * @type {import('metro-config').MetroConfig}
 */
// const path = require('path')
// const config = {};
// module.exports = (async () => {
//     const {
//         resolver: { sourceExts, assetExts }
//     } = await getDefaultConfig(__dirname, config);
//     return {
//         transformer: {
//             babelTransformerPath: require.resolve("react-native-svg-transformer")
//         },
//         resolver: {
//             assetExts: assetExts.filter(ext => ext !== "svg"),
//             sourceExts: [...sourceExts, "svg"],
//             resolverMainFields: ["sbmodern", "react-native", "browser", "main"],
//         },
//         watchFolders: [path.resolve(__dirname, "../")],
//     };
// })();


module.exports = (() => {
    const config = getDefaultConfig(__dirname);

    const { transformer, resolver } = config;

    config.transformer = {
        ...transformer,
        babelTransformerPath: require.resolve("react-native-svg-transformer")
    };
    config.resolver = {
        ...resolver,
        assetExts: resolver.assetExts.filter((ext) => ext !== "svg"),
        sourceExts: [...resolver.sourceExts, "svg"]
    };

    return config;
})();