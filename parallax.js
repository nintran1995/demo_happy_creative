$(document).ready(function() {
    var sun = $(".hero__image--sun");
    var imageSunHeight = sun.height();
    var imageSunTop = sun.offset().top;
    var mountain = $(".hero__image--white-mountain");
    var beach = $(".hero__image--beach");
    var container = $(".body-container");
    $(window).scroll(function() {
        var scrollTop = $(window).scrollTop();

        if (window.scrollY < imageSunTop) {
            sun.css({
                height: imageSunHeight + scrollTop / 5,
                transform: 'translate3d(' + -window.scrollY / 8 + 'px,' + -window.scrollY / 2 + 'px, 0)'
            });
        }

        mountain.css({
            transform: 'translate3d(0,' + -window.scrollY / 15 + 'px, 0)'
        });
        container.css({
            transform: 'translate3d(0,' + -window.scrollY / 12 + 'px, 0)'
        });
        beach.css({
            transform: 'translate3d(0,' + window.scrollY / 10 + 'px, 0)'
        });
    });
});