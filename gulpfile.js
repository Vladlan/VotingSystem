let gulp = require('gulp');
let shell = require('gulp-shell');

gulp.task('install', () => {
    process.chdir('back');
    gulp.src('')
        .pipe(shell('npm install'));

    process.chdir('front');
    gulp.src('')
        .pipe(shell('npm install'));
});

gulp.task('dev', () => {
    // Change directory to run backend npm
    process.chdir('back');
    gulp.src('')
        .pipe(shell('npm run dev'));

    process.chdir('front');
    gulp.src('')
        .pipe(shell('npm run start'));
});

gulp.task('prod', () => {
    // Change directory to run backend npm
    process.chdir('back');
    gulp.src('')
        .pipe(shell('npm run prod'));
});
