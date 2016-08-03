var gulp = require("gulp"), // call gulp.
    plumber = require("gulp-plumber"), // case, error task. don't stop watch plugin.
    compass = require("gulp-compass"), // sass compass pulgin.
    gutil = require("gulp-util"), // gulp-util plugin.
    imageMin = require("gulp-imagemin"), // images compression plugin.
    pngImageMin = require("imagemin-pngquant"), // png images compression plugin.
    changed = require("gulp-changed"), // only change file watch plugin.
    noCompressionImagesFold = (["noCompressionImages/*.jpg", "noCompressionImages/*.jpeg", "noCompressionImages/*.png", "noCompressionImages/*.gif", "noCompressionImages/*.svg"]), // no compression images fold.
    compressionImageFold = "images/", // finish compression images fold.
    noCompressionImagesFoldSP = (["sp/noCompressionImages/*.jpg", "sp/noCompressionImages/*.jpeg", "sp/noCompressionImages/*.png", "sp/noCompressionImages/*.gif", "sp/noCompressionImages/*.svg"]), // no compression images fold.
    compressionImageFoldSP = "sp/images/", // finish compression images fold.
    autoprefixer = require("gulp-autoprefixer"), // add vendor prefix in CSS automatically.
    ftp = require("vinyl-ftp"), // ftp plugin.
    sftp = require("gulp-sftp"), // sftp plugin.
    using_PHP_LocalServerConnect = require("gulp-connect-php"), // using php local server connect plugin.
    browserSync = require("browser-sync"), // local browser sync plugin.
    upLoadFileWrite = (["index.php", "**/*.php", "*.html", "**/*.html", "css/*.css", "css/**/*", "css/*.css.map", "sass/*.scss", "js/*.js", "images/*", "font/*", "video/*", "sp/css/*.css", "sp/css/**/*", "sp/css/*.css.map", "sp/sass/*.scss", "sp/js/*.js", "sp/images/*"]), // upload file write.
    notUpLoadFileWrite = (["!css/ie.css", "!css/print.css", "!css/screen.css", "!css/ie.css.map", "!css/print.css.map", "!css/screen.css.map", "!sass/ie.scss", "!sass/print.scss", "!sass/screen.scss", "!**/.DS_Store", "!node_modules/**/*"]), // don't upload file write.
    upLoadFile = upLoadFileWrite.concat(notUpLoadFileWrite); //ftp upload file. variable upLoadFileWrite concatenate variable notUpLoadFileWrite.

// sass compass.
gulp.task("compass", function () {
    gulp.src("sass/*.scss")
        .pipe(plumber()) // case, sass compile error. don't stop watch.
        .pipe(compass({
            config_file: "sass/config.rb",
            comments: false,
            sass: "sass/",
            css: "css/"
        }));
});
// sass compass SP.
gulp.task("compassSP", function () {
    gulp.src("sp/sass/*.scss")
        .pipe(plumber()) // case, sass compile error. don't stop watch.
        .pipe(compass({
            config_file: "sp/sass/config.rb",
            comments: false,
            sass: "sp/sass/",
            css: "sp/css/"
        }));
});

// add vendor prefix automatically.
gulp.task("autoprefixer", function () {
    return gulp.src("css/gelato.css")
        .pipe(autoprefixer({
            browsers: ["last 2 versions", "ie >= 9", "Android >= 4", "ios_saf >= 8"],
            cascade: false
        }))
        .pipe(gulp.dest("css/"));
});

// add vendor prefix automatically.
gulp.task("autoprefixerSP", function () {
    return gulp.src("sp/css/gelatoSP.css")
        .pipe(autoprefixer({
            browsers: ["last 2 versions", "ie >= 9", "Android >= 4", "ios_saf >= 8"],
            cascade: false
        }))
        .pipe(gulp.dest("sp/css/"));
});

// compression images.
gulp.task("compressionImages", function () {
    gulp.src(noCompressionImagesFold)
        .pipe(plumber())
        .pipe(changed(compressionImageFold))
        .pipe(imageMin({
            use: [pngImageMin({
                quality: "60-80",
                speed: 4
            })]
        }))
        .pipe(gulp.dest(compressionImageFold));
});
// compression images SP.
gulp.task("compressionImagesSP", function () {
    gulp.src(noCompressionImagesFoldSP)
        .pipe(plumber())
        .pipe(changed(compressionImageFoldSP))
        .pipe(imageMin({
            use: [pngImageMin({
                quality: "60-80",
                speed: 4
            })]
        }))
        .pipe(gulp.dest(compressionImageFoldSP));
});

// local browser connect & sync.
gulp.task("browserSync", function () {
    using_PHP_LocalServerConnect.server({
        port: 8080,
        bin: "/Applications/MAMP/bin/php/php5.6.10/bin/php", // PHP pass.
        ini: "/Applications/MAMP/bin/php/php5.6.10/conf/php.ini" // PHP.ini pass.
    }, function () {
        browserSync({
            proxy: "localhost:8080",
            notify: false,
            browser: "google chrome"
        });
    });
});

// file save's local browser reload.
gulp.task("localBrowserReload", function () {
    browserSync.reload();
});

// ftp upload.
gulp.task("ftpUpLoad", function () {
    var ftpConnect = ftp.create({
        host: "***",
        user: "***",
        password: "***",
        parallel: 7,
        log: gutil.log
    });
    gulp.src(upLoadFile, {
            base: ".",
            buffer: false
        })
        .pipe(ftpConnect.newer("***"))
        .pipe(ftpConnect.dest("***"));
});

// gulp default task, terminal command "gulp".
gulp.task("default", ["browserSync"], function () { // first task, local server connect & local browser sync.
    gulp.watch(noCompressionImagesFold, ["compressionImages"]); // watching case, noCompressionImages fold changed images, compression images.
    gulp.watch("sass/*.scss", ["compass"]); // watching sass file save's auto compile, using compass.
    gulp.watch(noCompressionImagesFoldSP, ["compressionImagesSP"]); // watching case, noCompressionImages fold changed images, compression images SP.
    gulp.watch("sp/sass/*.scss", ["compassSP"]); // watching sass file save's auto compile, using compass SP.
    gulp.watch("css/*.css", ["autoprefixer"]); // watching change's CSS flie. add vendor prefix automatically.
    gulp.watch("sp/css/*.css", ["autoprefixerSP"]); // watching change's CSS flie. add vendor prefix automatically.
    gulp.watch(upLoadFile, ["ftpUpLoad"]); //watching file save's auto ftp upload.
    gulp.watch(upLoadFile, ["localBrowserReload"]); // watching file save's local browser reload.
});
