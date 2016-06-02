module.exports = function(grunt) {

  grunt.loadNpmTasks('grunt-contrib-jasmine');

  grunt.initConfig({
    jasmine: {
      all: {
        src: 'rectangle.js',
        options: {
          specs: 'spec/*_spec.js',
          junit: {
             path: 'report/'
          }
        }
      }
    }
  });

  grunt.registerTask('spec', ['jasmine']);
};
