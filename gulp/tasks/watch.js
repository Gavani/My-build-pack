'use strict';

module.exports = function() {
  $.gulp.task('watch', function() {
    $.gulp.watch($.config.src + '/styles/**/*.scss', $.gulp.series('sass:dev'));
    $.gulp.watch($.config.src + '/template/**/*.pug', $.gulp.series('pug'));
    $.gulp.watch($.config.src + '/js/**/*.js', $.gulp.series('js:process'));
    $.gulp.watch($.config.src + '/images/**/*.*', $.gulp.series('img:dev'));
  });
};
