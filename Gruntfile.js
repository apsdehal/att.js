module.exports = function ( grunt ) {
	// Load all grunt tasks
	require("matchdep").filter("grunt-*").forEach(grunt.loadNpmTasks);
	
	// init the grunt config
	grunt.initConfig({
	    // Browserify the modules
		browserify : {
			index : {
				src : "src/index.js",
				dest : "build/@.js" 
			},
			test : {
				src : "tests/index_test.js",
				dest : "build/index_test.js"
			}
		},

		// Add tasks for unit tests
		karma : {
			unit : {
				configFile : "karma.config.js"
			}
		}
	});

	// Define dev environment tasks
	grunt.registerTask('default',['browserify']);
	// Define production environment tasks
	grunt.registerTask('production', ['env:prod', 'browserify:index']);
};