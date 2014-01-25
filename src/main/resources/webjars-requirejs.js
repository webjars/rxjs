/*global requirejs */

requirejs.config({
    map: {
        '*': {
            'rx': 'webjars!rx.js'
        }
    },
    shim: {
        'rx.aggregates': [ 'webjars!rx.js' ],
        'rx.async': [ 'webjars!rx.js' ],
        'rx.async.compat': [ 'webjars!rx.js' ],
        'rx.binding': [ 'webjars!rx.js' ],
        'rx.coincidence': [ 'webjars!rx.js' ],
        'rx.experimental': [ 'webjars!rx.js' ],
        'rx.joinpatterns': [ 'webjars!rx.js' ],
        'rx.testing': [ 'webjars!rx.js' ],
        'rx.time': [ 'webjars!rx.js' ],
        'rx.virtualtime': [ 'webjars!rx.js' ],
        'rx.aggregates.min': [ 'webjars!rx.js' ],
        'rx.async.min': [ 'webjars!rx.js' ],
        'rx.async.compat.min': [ 'webjars!rx.js' ],
        'rx.binding.min': [ 'webjars!rx.js' ],
        'rx.coincidence.min': [ 'webjars!rx.js' ],
        'rx.experimental.min': [ 'webjars!rx.js' ],
        'rx.joinpatterns.min': [ 'webjars!rx.js' ],
        'rx.testing.min': [ 'webjars!rx.js' ],
        'rx.time.min': [ 'webjars!rx.js' ],
        'rx.virtualtime.min': [ 'webjars!rx.js' ],
    }
});
