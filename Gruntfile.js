module.exports = function(grunt) {
    'use strict';

    function loadConfig(path) {
        var glob   = require('glob'),
            object = {},
            key;

        glob.sync('*', {
            cwd: path
        }).forEach(function(option) {
            key         = option.replace(/\.js$/, '');
            object[key] = require(path + option);
        });

        return object;
    }

    var config = {
        pkg: grunt.file.readJSON('package.json'),
        env: process.env,
        directories: {
            'js_src': 'resources/js-src',
            'js': 'assets/js',
            'scss': 'resources/scss',
            'css': 'assets/css'
        }
    };

    grunt.util._.merge(config, loadConfig('./grunt-tasks/'));

    grunt.initConfig(config);

    require('load-grunt-tasks')(grunt);

    grunt.registerTask('default', ['watch']);
};
