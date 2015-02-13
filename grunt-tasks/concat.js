module.exports = {
    options: {
        separator: ';'
    },
    basic: {
        src: ['<%= directories.js_src %>/lib/**/*.js', '!<%= directories.js_src %>/lib/modernizr/modernizr.js', '<%= directories.js_src %>/custom-lib/**/*.js', '<%= directories.js_src %>/*.js', '!<%= directories.js_src %>/init.js', '<%= directories.js_src %>/init.js'],
        dest: '<%= directories.js %>/main.js'
    },
    modernizr: {
        src: ['<%= directories.js_src %>/lib/modernizr/modernizr.js'],
        dest: '<%= directories.js %>/modernizr.js'
    }
};
