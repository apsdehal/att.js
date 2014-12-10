module.exports = function ( grunt ) {
	// Load all grunt tasks
	// require("matchdep").filter("grunt-*").forEach(grunt.loadNpmTasks);
	
	grunt.loadNpmTasks('grunt-browserify');
	grunt.loadNpmTasks('grunt-contrib-uglify');
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
	    uglify: {
	      options: {
	        mangle: true,
	        compress: true,
	        beautify: false
	      },
	      dist: {
	        src: 'build/@.js',
	        dest: 'build/@.min.js'
	      }
	    },
	});

	// Define dev environment tasks
	grunt.registerTask('default',['browserify', 'uglify']);
	// Define production environment tasks
};