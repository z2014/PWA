import gulp from 'gulp';
import log from 'fancy-log';
import sequence from 'gulp-sequence';
import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';
import webpackDevConfig from '../config/webpack.dev.config';

gulp.task('webpack-dev-server', function() {
    log.info('webpack-dev-server serving at:', webpackDevConfig.devServer.port);
    let compilerConfig = webpack(webpackDevConfig);
    new WebpackDevServer(compilerConfig, webpackDevConfig.devServer).listen(webpackDevConfig.devServer.port, webpackDevConfig.devServer.host, function(error) {
        if (error) {
            log.error('webpack-dev-server error:', error);
        }
    })
})
gulp.task('serve', sequence(['webpack-dev-server']));
