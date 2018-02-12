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
    var titleName = domain + " Jenkins";
    var theTitleLink = jQuery('#jenkins-home-link');
    if (theTitleLink.length === 0) {
        theTitleLink = jQuery("#top-panel a").first();
        theTitleLink.html("<div id='my-title'>" + titleName + "</div>");
    } else {
        theTitleLink.html(domain + " Jenkins");
        if (theTitleLink.parent("td").length === 0) {
            // ugh, hack
            theTitleLink.addClass("new-header-link");
        }
    }
    var theLogo = jQuery('.logo');
    if (theLogo.length === 1) {
        theLogo.append('<div class=serverName>' + titleName + '</div>');
    }
    document.title= document.title +"[" + titleName + "]"

});

