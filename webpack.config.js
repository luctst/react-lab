const path = require("path");

module.exports = {
    mode: "development",
    entry: path.resolve(__dirname, "src", "app.js"),
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "app-min.js"
    },
    module: {
        rules: [
            {
                test: /\.js/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-react"],
                        plugins: ["@babel/plugin-proposal-class-properties"]
                    }
                }
            }
        ]
    },
    devServer: {
        contentBase: path.resolve(__dirname, "dist"),
        compress: true,
        port: 3000
    }
}