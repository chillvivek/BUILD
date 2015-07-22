'use strict';

module.exports = function(grunt) {

    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            build: {
                src: 'src/keyboard.js',
                dest: 'dist/keyboard.min.js'
            }
        },

        copy: {
            main: {
                src: 'package.json',
                dest: 'dist/package.json'
            },
            src: {
                src: 'src/keyboard.js',
                dest: 'dist/keyboard.js'
            }
        }

    });

    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-copy');

    grunt.registerTask('dist', ['uglify', 'copy:main', 'copy:src']);
    grunt.registerTask('default', ['dist']);

};
