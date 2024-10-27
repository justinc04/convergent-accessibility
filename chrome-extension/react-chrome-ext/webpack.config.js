const path = require("path");
const HTMLPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
    entry: {
        index: "./src/index.js"
    },
    mode: "production",
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
                { from: path.resolve("manifest.json"), to: path.resolve("build") },
            ],
        }),
        new HTMLPlugin({
            template: './public/index.html', // Add this line to use your template
        })
    ],
    resolve: {
        extensions: [".jsx", ".js"],
    },
    output: {
        path: path.resolve("build"),
        filename: "[name].js",
        // Add this to ensure assets are referenced correctly
        clean: true
    },
};