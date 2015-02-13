module.exports = {
    css: {
        options: {
            sassDir: '<%= directories.scss %>',
            cssDir: '<%= directories.css %>',
            outputStyle: 'compressed',
            specify: '<%= directories.scss %>/*.scss',
            noLineComments: true,
            bundleExec: true
        }
    }
};
