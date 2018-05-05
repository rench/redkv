var gulp = require('gulp');
const mocha = require('gulp-mocha');

gulp.task('t', () => {
    process.env.NODE_ENV='test';
    return gulp.src('test/test_factory.js', {read: false})
    .pipe(mocha({"exit":true,"bail":true}))
    .once('error', () => {
        console.log('Exit by error');
        process.exit(1);
    })
    .once('end', () => {
        process.exit();
    })
    ;
});

