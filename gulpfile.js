'use strict'

global.$ = {
    package     : require('./package.json'),
    config      : require('./gulp/config'),
    fs          : require('fs'),
    path        : {
                task : require('./gulp/paths/tasks.js'),
                jsFoundation: require('./gulp/paths/js.foundation.js'),
                cssFoundation: require('./gulp/paths/css.foundation.js')
    },
    gulp        : require('gulp'),
    del         : require('del'),
    gp          : require('gulp-load-plugins')({lazy:false}),
    browserSync : require('browser-sync').create()
};


$.path.task.forEach(function(taskPath){
    require(taskPath)();
});

$.gulp.task('dev', $.gulp.series(
    'clean',
    $.gulp.parallel('sass:dev', 'pug', 'css:foundation', 'js:foundation', 'js:process', 'svg', 'img:dev', 'fonts')));

$.gulp.task('build', $.gulp.series(
    'clean',
    $.gulp.parallel('sass:build', 'pug', 'css:foundation', 'js:foundation', 'js:process', 'svg', 'img:build', 'fonts')));

$.gulp.task('default', $.gulp.series(
    'dev',
    $.gulp.parallel(
        'watch',
        'serve'
    )
));