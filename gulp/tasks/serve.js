'use strict';

module.exports = function() {
  $.gulp.task('serve', function() {
    $.browserSync.init({
      open: false,
      server: $.config.build
    });

    $.browserSync.watch([$.config.build + '/**/*.*', '!**/*.css'], $.browserSync.reload);
  });
};
