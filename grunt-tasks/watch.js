module.exports = {
    js: {
        files: ['<%= directories.js_src %>/*.js'],
        tasks: ['jshint', 'clean:js', 'concat', 'uglify'],
    },
    css: {
        files: ['<%= directories.scss %>/*.scss'],
        tasks: ['clean:css', 'compass:css']
    },
    options: {
        livereload: true,
    }
};
