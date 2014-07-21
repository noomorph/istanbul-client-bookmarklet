/*jshint strict:false, browser:true */
/*global $*/

(function boomarklet(options) {

    var coverage = window.__coverage__;

    function clear(callback) {
        if (!options.clearBeforeSend) {
            return callback();
        }

        $.ajax({
            type: 'GET',
            url: '/coverage/reset',
            success: callback
        });
    }

    function collect(callback) {
        if (!options.sendCoverage) {
            return callback();
        }

        $.ajax({
            type: 'POST',
            url: '/coverage/client',
            data: JSON.stringify(coverage),
            processData: false,
            contentType: 'application/json; charset=UTF-8',
            success: callback
        });
    }

    function redirect() {
        if (options.redirectToCoverage) {
            location.href = '/coverage';
        }
    }

    if (coverage) {
        if (options.redirectToCoverage) {
            document.body.style.opacity = 0.5;
        }

        clear(function () {
            collect(redirect);
        });
    } else {
        window.alert('No coverage gathered! Check if requested files were instrumented...');
    }

}({
    clearBeforeSend: false,
    sendCoverage: true,
    redirectToCoverage: false
}));
