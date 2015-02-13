;(function(){
    'use strict';

    var utils = (function() {

        /**
         * Execute function after page load
         * @param  {Function} callback     Function to execute
         * @param  {Array}    callbackArgs Function's arguments
         */
        function onLoad(callback, callbackArgs) {
            callback.apply(null, callbackArgs);
        }

        return {
            onLoad : onLoad
        };
    })();

    window.utils = utils;
})();
