"use strict";
module.exports = function(grunt) {
	
	//load connect plugin
	 grunt.loadNpmTasks('grunt-contrib-connect');
	
	/*
	 * grunt taskName:targetName
	 * omitting targetName will run all the tasks associated taskName.
	*/
	grunt.initConfig({
		connect: {
			server: {
                options: {
                    open: true,
                    base: 'kamal',
                    keepalive: true
                }
            }
		}
	});
    
   grunt.registerTask('default', ['connect']);
};