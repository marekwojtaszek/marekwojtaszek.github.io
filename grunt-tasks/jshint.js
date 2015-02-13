module.exports = {
    files: ['Gruntfile.js', '<%= directories.js_src %>/*.js'],
    options: {
        eqnull: true,
        immed: true,
        latedef: true,
        trailing: true,
        maxdepth: 4,
        evil: true,
        globals: {
            'console': true
        }
    }
};
