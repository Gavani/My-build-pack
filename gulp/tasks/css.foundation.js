'use strict';

module.exports = function() {
  $.gulp.task('css:foundation', function() {
    return $.gulp.src($.path.cssFoundation)
      .pipe($.gp.concat('foundation.css'))
      .pipe($.gp.csso())
      .pipe($.gulp.dest($.config.build + '/assets/styles'))
  })
};
