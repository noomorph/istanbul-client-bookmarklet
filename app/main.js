/*jshint strict:false, browser:true */
/*global $*/

(function boomarklet() {

    var coverage = window.__coverage__;

    function clear(callback) {
        $.ajax({
            type: 'GET',
            url: '/coverage/reset',
            success: callback
        });
    }

    function collect(callback) {
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
        location.href = '/coverage';
    }

    if (coverage) {
        document.body.style.opacity = 0.5;

        clear(function () {
            collect(redirect);
        });
    } else {
        window.alert('No coverage gathered! Check if requested files were instrumented...');
    }

}());
