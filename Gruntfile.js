var loader = require('load-grunt-tasks');

module.exports = function(grunt) {
    'use strict';

    grunt.util.linefeed = '\n';
    grunt.file.defaultEncoding = 'utf8';

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        clean: {
            build: ["lib/*.min.js"]
        },
        uglify: {
            forbrowser: {
                src: 'lib/<%= pkg.name %>.js',
                dest: 'lib/<%= pkg.name %>.min.js'
            }
        }
    });


    loader(grunt, {scope: 'devDependencies'});
    grunt.registerTask('build', [
        'clean:build',
        'uglify'
    ]);
    grunt.registerTask('default', 'build');
};
