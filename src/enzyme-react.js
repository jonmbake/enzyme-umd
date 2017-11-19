exports.react = require('react');
exports['react-dom'] = require('react-dom');
exports['react-test-renderer'] = require('react-test-renderer');
var Enzyme = exports.enzyme = require('enzyme');
var Adapter = require('enzyme-adapter-react-16');
Enzyme.configure({ adapter: new Adapter() });
