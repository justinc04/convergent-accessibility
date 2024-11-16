const path = require("path");
const HTMLPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
    entry: {
        index: "./src/index.js"
    },
    mode: "development",
    devtool: "source-map",
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                use: [
                    {
                        loader: "babel-loader",
                        options: {
                            presets: ['@babel/preset-react', '@babel/preset-env']
                        }
                    }
                ],
                exclude: /node_modules/,
            },
            {
                exclude: /node_modules/,
                test: /\.css$/i,
                use: [
                    "style-loader",
                    "css-loader"
                ]
            },
        ],
    },
    plugins: [
        new CopyPlugin({
            patterns: [
                { from: path.resolve("public/manifest.json"), to: path.resolve("build") },
                { from: path.resolve("public/content.js"), to: path.resolve("build") }, // Add this line for adding content.js to build
            ],
        }),
        new HTMLPlugin({
            template: './public/index.html',
        })
    ],
    resolve: {
        extensions: [".jsx", ".js"],
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'scripts.js',
        clean: true,
    }
};
