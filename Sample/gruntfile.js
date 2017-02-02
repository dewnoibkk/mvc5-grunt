/// <binding AfterBuild="clean:js, ts, uglify:ug" Clean="clean:js" />
module.exports = function (grunt) {
    // load Grunt plugins from NPM
    grunt.loadNpmTasks("grunt-contrib-uglify");
    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.loadNpmTasks("grunt-contrib-clean");
    grunt.loadNpmTasks("grunt-contrib-cssmin");
    grunt.loadNpmTasks("grunt-ts");

    // configure plugins
    grunt.initConfig({
        clean: {
            js: [
                "Scripts/**/*.js",
                "Scripts/**/*.js.map"
            ]
        },

        ts: {
            default: {
                src: ["Scripts/**/*.ts"],
                options: {
                    sourceMap: false
                }
            }
        },

        cssmin: {
            options: {
                shorthandCompacting: true,
                roundingPrecision: -1
            },
            target: {
                files: {
                    "Contents/css/style.css": [
                        "contents/style.css"
                    ]
                }
            }
        },

        uglify: {
            ug: {
                options: {
                    sourceMap: true
                },
                files: {
                    "Scripts/bundle.js": [
                        "Scripts/app.js",
                        "Scripts/**/*.js"
                    ]
                }
            },
            deploy: {
                options: {
                    sourceMap: false
                },
                files: {
                    "Scripts/bundle.js": [
                        "Scripts/app.js",
                        "Scripts/**/*.js"
                    ]
                }
            }
        },

        watch: {
            scripts: {
                files: ["Scripts/**/*.ts"],
                tasks: ["clean:js", "ts", "uglify:ug"]
            }
        }
    });

    // define tasks
    grunt.registerTask("build", ["clean:js", "ts", "uglify:ug", "cssmin"]);
    grunt.registerTask("deploy", ["clean:js", "ts", "uglify:deploy", "cssmin", "clean:deploy"]);
};
