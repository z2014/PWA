/**
 * Spec base folders structure variables here
 * */


let baseConfig = {
    dir: {
        src: 'src',
        dist: {
            root: 'dist',
            js: 'static/js',
            css: 'static/css',
            img: 'static/img'
        },
        test: {
            unit: 'test/unit',
            e2e: 'test/e2e'
        },
        assets: [
            {
                from: 'src/assets',
                to: 'assets'
            }
        ]
    },
    // development-level config
    dev: {
        host: '127.0.0.1',
        port: 8080
    }
};

export default baseConfig;
