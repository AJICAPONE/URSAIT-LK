module.exports = function() {
    $.gulp.task('svg2', () => {
        return $.gulp.src('./dev/static/img/svg2/*.svg')
            .pipe($.gp.svgmin({
                js2svg: {
                    pretty: true
                }
            }))
            .pipe($.gp.cheerio({
                run: function($) {
                    // $('[fill]').removeAttr('fill');
                    // $('[stroke]').removeAttr('stroke');
                    // $('[style]').removeAttr('style');
                },
                parserOptions: { xmlMode: true }
            }))
            .pipe($.gp.replace('&gt;', '>'))
            .pipe($.gp.svgSprite({
                mode: {
                    symbol: {
                        sprite: "sprite2.svg"
                    }
                }
            }))
            .pipe($.gulp.dest('./build/static/img/svg2/'));
    });
};