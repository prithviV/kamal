"use strict";
module.exports = function(grunt) {
	
	//load jshint plugin
	grunt.loadNpmTasks('grunt-contrib-jshint');
	
	/*
	 * grunt taskName:targetName
	 * omitting targetName will run all the tasks associated taskName.
	*/
	grunt.initConfig({
		jshint: {
			options: {
				node: true
			},
			all: ['Gruntfile.js', 'kamal/js/**/*.js', '!kamal/js/vendor/**/*.js']
		}
	});
};