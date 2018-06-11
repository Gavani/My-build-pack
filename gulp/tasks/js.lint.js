'use strict';

module.exports = function() {
  $.gulp.task('js:lint', function() {
    return $.gulp.src($.path.src +'/js/main.js')
      .pipe($.gp.eslint())
      .pipe($.gp.eslint.format());
  })
};