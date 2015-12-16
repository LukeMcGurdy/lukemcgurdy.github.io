module.exports = function (grunt) {


	// Default port
	//var LIVERELOAD_PORT = 35729;

	grunt.initConfig({
		// Set Grunt to watch our files and run tasks on them
		watch: {
			sass: {
				files: '**/*.scss',
				//tasks: ['sass', 'bsReload:css'],
				tasks: ['sass']
			},
			css: {
				files: 'assets/css/styles.css',
				tasks: ['postcss']
			},
		},    

		// Run Sass on the listed files
		sass: {
			options: {
				sourceMap: true
			},
			dist: {
				files: {
					'assets/css/styles.css' : 'assets/sass/styles.scss',
				}
			}
		},

		// Use Postcss to create sourcemaps for Sass, autoprefixer and cssnano
		postcss: {
			options: {
//				map: {
//					inline: false,
//					annotation: 'assets/css/maps/'
//				},
				processors: [
					require('autoprefixer')({
						browsers: 'last 3 versions'
					}),
					require('cssnano')()
				]
			},
			dist: {
				src: 'assets/css/styles.css'
			}
		},

		// Autorefresh browser - http://localhost:3000/yourpage.html
//		browserSync: {
//			default_options: {
//				bsFiles: {
//					src: "css/*.css"
//				},
//				options: {
//					//watchTask: true,
//					server: {
//						baseDir: "./"
//					}
//				}
//			}
//		},
//		bsReload: {
//			css: "*.css"
//		}

		//		htmllint: {
		//			all: ["*.html"]
		//		},
        
		// Create a OS notification to tell us when tasks have been completed or if there are errors
		notify_hooks: {
			options: {
				enabled: true,
				success: true,
				duration: 3
			}
		},        

	});


	/* Load tasks */

	grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-sass-globbing');
	grunt.loadNpmTasks('grunt-sass');
    //grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-postcss');
	grunt.loadNpmTasks('grunt-notify');
	//grunt.loadNpmTasks('grunt-browser-sync');
	//grunt.loadNpmTasks('grunt-contrib-csslint');
	//grunt.loadNpmTasks('grunt-html');
	//grunt.loadNpmTasks('grunt-contrib-connect');


	/* Run above tasks */

	//grunt.registerTask('default', ['browserSync', 'watch']);
	grunt.registerTask('default', ['postcss', 'watch']);
	//grunt.registerTask('postcss', ['postcss', 'watch']);

	grunt.task.run('notify_hooks');
};