var gulp = require("gulp");
var server= require("gulp-webserver");
var data = require("./src/data/data.json");

gulp.task("server", function() {
    return gulp.src("src")
        .pipe(server({
            port: '9090',
            open: true,
            livereload: true,
            middleware: function(req, res, next) {
              
                if (req.url === '/ban') {
                		res.end(JSON.stringify(data))
					}
                next()
            }
        }))
})
