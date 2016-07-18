module.exports = function(grunt) {

    require('es6-promise').polyfill();

    grunt.initConfig({
        // Set Grunt to watch our files and run tasks on them
        watch: {
            sass: {
                files: 'assets/sass/**/*.scss',
                tasks: ['sass']
            },
            css: {
                files: 'assets/css/styles.css',
                tasks: ['postcss'],
            }
        },

        // Run Sass on the listed files
        sass: {
            options: {
                sourceMap: true
            },
            dist: {
                files: {
                    'assets/css/styles.css': 'assets/sass/styles.scss',
                }
            }
        },

        // Use Postcss cssnano inc autoprefixer and a bunch of other optimizations
        postcss: {
            options: {
                processors: [
                    require('autoprefixer')({
                        browsers: 'last 2 versions'
                    }),
                    require('cssnano')({
                        zindex: false
                    })
                ]
            },
            dist: {
                src: 'assets/css/styles.css'
            }
        },

        // sass_globbing: {
        //     your_target: {
        //         files: {
        //             'src/_importMap.scss': 'src/partials/**/*.scss',
        //             'src/_variablesMap.scss': ['src/variables/**/*.scss', '!src/variables/foo.css'],
        //         },
        //         options: {
        //             useSingleQuotes: false,
        //             signature: '// Hello, World!'
        //         }
        //     }
        // }
    });

    /* Load tasks */

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-sass-globbing');
    grunt.loadNpmTasks('grunt-postcss');


    /* Run above tasks */

    grunt.registerTask('default', ['watch']);
    grunt.registerTask('dist', ['postcss', 'watch']);

};
