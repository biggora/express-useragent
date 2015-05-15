/**
 * Created by Alex on 5/14/2015.
 */

module.exports = function(grunt) {
    'use strict';

    // Force use of Unix newlines
    grunt.util.linefeed = '\n';
    grunt.file.defaultEncoding = 'utf8';

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        banner: '/*!\n' +
        ' * express-useragent.js v<%= pkg.version %> (<%= pkg.homepage %>)\n' +
        ' * Copyright 2011-<%= grunt.template.today("yyyy") %> <%= pkg.author.name %>\n' +
        ' * Licensed under <%= _.pluck(pkg.licenses, "type") %> (<%= _.pluck(pkg.licenses, "url") %>)\n' +
        ' */\n',
        clean: {
            build: ["lib/*.min.js"]
        },
        uglify: {
            options: {
                banner: '<%= banner %>'
            },
            forbrowser: {
                src: 'lib/<%= pkg.name %>.js',
                dest: 'lib/<%= pkg.name %>.min.js'
            }
        }
    });

    require('load-grunt-tasks')(grunt, {scope: 'devDependencies'});
    grunt.registerTask('build', [
        'clean:build',
        'uglify'
    ]);
    grunt.registerTask('default', 'build');
};