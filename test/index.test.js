test('load default config file', () => {
	const config = require('../index.js');
	expect(config.test).toBe('test')
	expect(config.nested.test1).toBe('test1')
	expect(config.nested.test2).toBe('test2')
	expect(config.list[0]).toBe('list1')
	expect(config.list[1]).toBe('list2')
})

test('load custom config file', () => {
	const config = require('../index.js').load('custom.yml');
	console.log(config);
	expect(config.customTest).toBe('testcustom')
	expect(config.customNested.test1).toBe('test1custom')
	expect(config.customNested.test2).toBe('test2custom')
	expect(config.customList[0]).toBe('list1custom')
	expect(config.customList[1]).toBe('list2custom')
})
