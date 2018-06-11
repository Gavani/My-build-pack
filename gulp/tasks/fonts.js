module.exports = function() {
    $.gulp.task('fonts', () => {
        return $.gulp.src($.config.src + '/fonts/**/*.*')
            .pipe($.gulp.dest($.config.build+'/assets/fonts/'));
    });
};
