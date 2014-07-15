module.exports = function (grunt) {
  'use strict';

  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    sass: {
      main: {
       options: {
         outputStyle: 'compressed'
       },
       files: {
         'css/admin_css_override.css': 'scss/admin.scss'
       }
      }
    },

    watch: {
      grunt: { files: ['Gruntfile.js'] },

      sass: {
        files: 'scss/features/_*.scss',
        tasks: ['sass']
      }
    }

});

  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  grunt.registerTask('core', ['sass']);
  grunt.registerTask('build', ['core']);
  grunt.registerTask('default', ['build', 'watch']);

}