/*jshint strict:false, browser:true */
/*global $*/

(function boomarklet() {

    var coverage = window.__coverage__;

    if (coverage) {
        $.ajax({
            type: 'POST',
            url: '/coverage/client',
            data: coverage,
            dataType: 'application/json'
        });
    } else {
        window.alert('No coverage gathered! Check if requested files were instrumented');
    }

}());
