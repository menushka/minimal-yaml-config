# Minimal YAML Config

Basically the title, a very minimal (9 lines of code, 1 dependency) package for loading a YAML config file.  Really nothing special, just wanted to make a drop in replacement for 'dotenv' for my projects that supported some more convenient data types like lists and dictionary.

## Installation

Install with [npm](https://www.npmjs.com/).

```bash
npm install minimal-yaml-config
```

## Usage

Basic usage:

```yaml
# config.yml
property: propertyValue
dictionary:
  key: dictionaryValue
list:
  - listValue
```

```javascript
const config = require('minimal-yaml-config');
console.log(config.property); // propertyValue
console.log(config.dictionary.key); // dictionaryValue
console.log(config.list[0]); // listValue
```

If you want to name the config something different:
```yaml
# custom.yml
custom: customValue
```

```javascript
const config = require('minimal-yaml-config').load('custom.yml');
console.log(config.custom); // customValue
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)
