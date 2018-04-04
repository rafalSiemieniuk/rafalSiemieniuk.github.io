'use strict';

var containerNavbar = document.getElementsByClassName('container-navbar')[0];
var navLink = document.getElementsByClassName('nav-link');
var freshLife = document.getElementById('fresh-life');
var about = document.getElementById('about');
var services = document.getElementById('services');
var gallery = document.getElementById('gallery');
var subscribe = document.getElementById('subscribe');
var blog = document.getElementById('blog');
var contact = document.getElementById('contact');

window.addEventListener('load', function () {
    removeActiveBar();
    screenDetection();
});
window.addEventListener('resize', function () {
    screenDetection();
});
window.addEventListener('scroll', function () {
    removeActiveBar();
    screenDetection();
});

for (var i = 0; i < navLink.length; i++) {
    navLink[i].addEventListener('click', function () {
        setActiveBar(this);
        screenDetection();
    });
}

///////////////////FUNCTIONS///////////////////

var screenDetection = function screenDetection() {
    var rectFreshLife = freshLife.getBoundingClientRect();
    var rectAbout = about.getBoundingClientRect();
    var rectServices = services.getBoundingClientRect();
    var rectGallery = gallery.getBoundingClientRect();
    var rectSubscribe = subscribe.getBoundingClientRect();
    var rectBlog = blog.getBoundingClientRect();
    var rectContact = contact.getBoundingClientRect();

    if (window.scrollY === 0 && window.innerWidth >= 992) {
        containerNavbar.removeAttribute('id');
        containerNavbar.setAttribute('id', 'bg_start');
        navLink[0].setAttribute('id', 'active');
    } else if (rectAbout.top > 101) {
        containerNavbar.removeAttribute('id');
        containerNavbar.setAttribute('id', 'bg_fresh_life');
        navLink[0].setAttribute('id', 'active');
    } else if (rectServices.top > 101) {
        containerNavbar.removeAttribute('id');
        containerNavbar.setAttribute('id', 'bg_about');
        navLink[1].setAttribute('id', 'active');
    } else if (rectGallery.top > 101) {
        containerNavbar.removeAttribute('id');
        containerNavbar.setAttribute('id', 'bg_services');
        navLink[2].setAttribute('id', 'active');
    } else if (rectSubscribe.top > 101) {
        containerNavbar.removeAttribute('id');
        containerNavbar.setAttribute('id', 'bg_gallery');
        navLink[3].setAttribute('id', 'active');
    } else if (rectBlog.top > 101) {
        containerNavbar.removeAttribute('id');
        containerNavbar.setAttribute('id', 'bg_subscribe');
        navLink[4].setAttribute('id', 'active');
    } else if (rectContact.top > 101) {
        containerNavbar.removeAttribute('id');
        containerNavbar.setAttribute('id', 'bg_blog');
        navLink[5].setAttribute('id', 'active');
    } else {
        containerNavbar.removeAttribute('id');
        containerNavbar.setAttribute('id', 'bg_contact');
        navLink[6].setAttribute('id', 'active');
    }
};

var setActiveBar = function setActiveBar(section) {
    for (var j = 0; j < navLink.length; j++) {
        navLink[j].removeAttribute('id');
    }
    section.setAttribute('id', 'active');
};
var removeActiveBar = function removeActiveBar() {
    for (var j = 0; j < navLink.length; j++) {
        navLink[j].removeAttribute('id');
    }
};

////////////////smooth scrolling////////////////

(function () // Code in a function to create an isolate scope
{
    var speed = 600;
    var moving_frequency = 15; // Affects performance !
    var links = document.getElementsByTagName('a');
    var href;
    for (var i = 0; i < links.length; i++) {
        href = links[i].attributes.href === undefined ? null : links[i].attributes.href.nodeValue.toString();
        if (href !== null && href.length > 1 && href.substr(0, 1) == '#') {
            links[i].onclick = function () {
                var element;
                var href = this.attributes.href.nodeValue.toString();
                if (element = document.getElementById(href.substr(1))) {
                    var hop_count = speed / moving_frequency;
                    var getScrollTopDocumentAtBegin = getScrollTopDocument();
                    var gap = (getScrollTopElement(element) - getScrollTopDocumentAtBegin) / hop_count;

                    for (var i = 1; i <= hop_count; i++) {
                        (function () {
                            var hop_top_position = gap * i;
                            setTimeout(function () {
                                window.scrollTo(0, hop_top_position + getScrollTopDocumentAtBegin);
                            }, moving_frequency * i);
                        })();
                    }
                }

                return false;
            };
        }
    }

    var getScrollTopElement = function getScrollTopElement(e) {
        var top = -100;

        while (e.offsetParent != undefined && e.offsetParent != null) {
            top += e.offsetTop + (e.clientTop != null ? e.clientTop : 0);
            e = e.offsetParent;
        }

        return top;
    };

    var getScrollTopDocument = function getScrollTopDocument() {
        return document.documentElement.scrollTop + document.body.scrollTop;
    };
})();