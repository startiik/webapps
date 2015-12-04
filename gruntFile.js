// grunt file
module.exports = function(grunt){
    grunt.initConfig({
        pkg:grunt.file.readJSON('package.json'),

        watch:{
            options:{livereload:true},
            files:['public/**','./routes/**'],
            tasks:[]
        },
        express:{
            all:{
                options:{
                    server:'app.js',
                    hostname:'localhost',
                    bases:['./public','./routes'],
                    livereload:true
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-express');
    grunt.registerTask('server',['express','watch']);

};