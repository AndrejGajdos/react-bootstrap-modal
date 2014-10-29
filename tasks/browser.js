var gulp = require('gulp')
  , clean = require('gulp-clean')
  , configs = require('./webpack.configs')
  , webpack = require('gulp-webpack');

module.exports = {

  clean: function(){
      return gulp.src('./browser/*', { read: false })
          .pipe(clean())
  }, 

  build: function() {
      return webpack(configs.browser)
        .pipe(gulp.dest('./browser/'));
  }

}
