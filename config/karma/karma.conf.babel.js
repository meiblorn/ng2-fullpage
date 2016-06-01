import WebpackTest from './../webpack/webpack.test.babel';

import config from './../helpers/config';

const SPEC_BUNDLE_PATH = config('test.spec.bundle.filename');

export default karma => {
    karma.set({
        basePath: '',
        frameworks: ['jasmine'],
        exclude: [],
        files: [{pattern: SPEC_BUNDLE_PATH, watched: false}],
        preprocessors: (() => {
            var result = {};
            result[SPEC_BUNDLE_PATH] = ['webpack', 'sourcemap'];
            return result;
        })(),
        webpack: WebpackTest,
        coverageReporter: {
            dir: config('test.reports.coverage.directory'),
            reporters: [
                {type: 'text-summary', subdir: '../summary-report'},
                {type: 'json', subdir: '../json-report'},
                {type: 'html', subdir: '../html-report'},
                {type: 'lcov', subdir: '../lcov-report'}
            ]
        },
        webpackServer: {noInfo: true},
        logLevel: karma.LOG_INFO,
        port: 9876,
        colors: true,
        autoWatch: false,
        reporters: ['progress', 'mocha', 'coverage'],
        browsers: ['Chrome'],
        singleRun: true
    });
};
