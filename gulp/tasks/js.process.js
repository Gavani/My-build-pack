'use strict';

module.exports = function() {
  $.gulp.task('js:process', function() {
    return $.gulp.src($.config.src+'/js/main.js')
      .pipe($.gp.sourcemaps.init())
      .pipe($.gp.concat('app.js'))
      .pipe($.gp.sourcemaps.write())
      .pipe($.gulp.dest($.config.build + '/assets/js'))
  })
};
