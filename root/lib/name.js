/*
 * {%= name %}
 * {%= homepage %}
 *
 * Copyright (c) {%= grunt.template.today('yyyy') %} {%= author_name %}
 * Licensed under the {%= licenses.join(', ') %} license{%= licenses.length === 1 ? '' : 's' %}.
 */

var {%= js_safe_name %} = module.exports = function(opts) {
	var self = this;
};

{%= js_safe_name %}.prototype.hello = function() {
	return 'hello';
};
