module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    compass: {
      dist: {
        options: {
          sassDir: 'src/sass',
          cssDir: 'src/css'
        }
      }
    },

    jshint: {
      options: { reporter: require('jshint-stylish') },
      build: ['Gruntfile.js', 'src/**/*.js']
    },

    includereplace: {
      dist: {
        files: [
          {src: '*.html', dest: 'dist/', expand: true, cwd: 'src'},
          {src: '*.css', dest: 'dist/css', expand: true, cwd: 'src/css'},
          {src: '*.js', dest: 'dist/js', expand: true, cwd: 'src/js'}
        ]
      }
    },

    browserSync: {
      dist: {
        bsFiles: {
          src : [
            'dist/css/*.css',
            'dist/*.html'
          ]
        },
        options: {
          watchTask: true,
          server: './dist'
        }
      }
    },

    watch: {
      default: {
        files: ['src/**/*.html', 'src/**/*.css'],
        tasks: ['includereplace']
      },
      sass: {
        files: ['src/**/*.sass'],
        tasks: ['compass', 'includereplace']
      },
      js: {
        files: 'src/**/*.js',
        tasks: ['jshint', 'includereplace']
      }
    }
  });

  grunt.loadNpmTasks('grunt-include-replace');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-browser-sync');

  // Default task(s).
  grunt.registerTask('default', ['jshint', 'compass', 'includereplace', 'browserSync', 'watch']);
};
