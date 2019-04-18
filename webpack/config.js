const path = require("path");

module.exports = filename => {
	return {
		mode: "development",
		entry: path.resolve("projects", `${filename}`, "index.js"),
		output: {
			path: path.resolve(__dirname, "public"),
			filename: "bundle.js"
		},
		devServer: {
			contentBase: path.resolve("projects", `${filename}`, "webpack-server"),
			compress: true,
			port: 8080,
			open: true,
			disableHostCheck: true,
			historyApiFallback: true,
		},
	}
}
