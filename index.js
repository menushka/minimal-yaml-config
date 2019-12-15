const fs = require('fs');
const jsYaml = require('js-yaml');

const yamlConfig = (file) => {
	file = file || "config.yml";
	return jsYaml.safeLoad(fs.readFileSync(file, 'utf8'));
}
module.exports = yamlConfig('config.yml')
module.exports.load = yamlConfig
