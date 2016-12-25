"use strict";
module.exports = function(grunt) {
	//load module
	grunt.loadNpmTasks('grunt-run');
	
	grunt.registerTask('test', '', function () {
		var done = this.async();
		var child = grunt.util.spawn({
		  cmd: 'npm', // <- A better way to find the node binary
		  args: ['run', 'start']
		});
		child.stdout.pipe(process.stdout);
		child.stderr.pipe(process.stderr);
		
		
		/*var exec = require('child_process').execSync;
		var result = exec("node kamal/app/app.js", {stdio:'inherit'});
			grunt.log.write(result);
			*/
	});
    
   grunt.registerTask('default', ['test']);
};