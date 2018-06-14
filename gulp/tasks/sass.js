'use strict'

module.exports = function () {
    $.gulp.task('sass:dev', function() {
        return $.gulp.src($.config.src+'/styles/app.scss')
        .pipe($.gp.sourcemaps.init())
        .pipe($.gp.sassGlob())
        .pipe($.gp.sass())
        .on('error', $.gp.notify.onError(function(error){
            return {
                title : 'Sasss',
                message: error.message
            }
        }))
        .pipe($.gp.autoprefixer(
            $.config.browsers
        ))
        .pipe($.gp.sourcemaps.write())
        .pipe($.gulp.dest($.config.build + '/assets/styles'))
        .pipe($.browserSync.reload({
            stream: true
        }));
    });

    $.gulp.task('sass:build', function() {
        return $.gulp.src($.config.src+'/styles/app.scss')
        .pipe($.gp.sassGlob())
        .pipe($.gp.sass())
        .pipe($.gp.autoprefixer(
            $.config.browsers
        ))
        .pipe($.gp.csscomb())
        .pipe($.gp.csso())
        .pipe($.gp.rename('main.min.css'))
        .pipe($.gulp.dest($.config.build + '/assets/styles'))
    });
};
