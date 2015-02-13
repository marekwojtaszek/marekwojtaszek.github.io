;(function(){
    'use strict';

    var init = function() {

        /**
         * Object for managing queued methods invocation
         */
        var Queue = function () {
            this.push = function () {
                for(var i = 0; i < arguments.length; i++) {
                    try {
                        var obj = arguments[i][0];
                        var method = arguments[i][1];
                        var args = arguments[i][2];

                        if(typeof window[obj] === 'object' && typeof window[obj][method] === 'function') {
                            window[obj][method].apply(window[obj], args);
                        }
                    } catch (e) {}
                }
            };
        };

        var _old_q = window._q;                     // store all queued methods invocation
        window._q  = new Queue();                   // create queue manager
        window._q.push.apply(window._q, _old_q);    // invoke all queued methods
    };

    window.init = init;
    window.init();
})();
