jQuery(function($) {

    var getSubdomain = function(domain) {
        if (/^(?:[0-9]{1,3}\.){3}[0-9]{1,3}$/.test(domain)) {
            // Looks like an IP address, so return as-is.
            return domain;
        }
        var parts = domain.split(".");
        if (parts.length <= 2) {
            return parts.join(".");
        } else {
            return parts.slice(0, -2).join(".");
        }
    };

    var domain = getSubdomain(window.location.hostname);
    var theTitleLink = $('#jenkins-home-link');
    if (theTitleLink.length === 0) {
        theTitleLink = $("#top-panel a").first();
        theTitleLink.html("<div id='my-title'>" + domain + " Jenkins </div>");
    } else {
        theTitleLink.html(domain);
        if (theTitleLink.parent("td").length === 0) {
            // ugh, hack
            theTitleLink.addClass("new-header-link");
        }
    }
    document.title="local jenkins"

});

