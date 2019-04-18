const config = require("./webpack/config");
const modules = require("./webpack/module-config");
const plugins = require("./webpack/plugins-config");

/**
 * Export
 */
module.exports = env => {
	const webpackConfig = config(env.filename);
	return {...webpackConfig, module: modules, plugins,};
};
