 // sidebar-open
    $(".sidebar-left-btn").click(function () {
        $(".sidebar-left").addClass("slide-left");
        $(".sidebar-left-btn").addClass("slide-btn");
        $(".logo").addClass("logo-left");
        $(".bg-overlay-page").addClass("slide");
    });

    // sidebar-close
    $(".bg-overlay-page,.sidebar-close-btn").click(function () {
        $(".sidebar-left").removeClass("slide-left");
        $(".sidebar-left-btn").removeClass("slide-btn");
        $(".logo").removeClass("logo-left");
        $(".bg-overlay-page").removeClass("slide");
    });

    // Close button movement
    $(".sidebar-left li a").click(function () {
        $(".sidebar-close-btn").addClass("move");
    });
    $(".sidebar-left li:first-child a").click(function () {
        $(".sidebar-close-btn").removeClass("move");
    });   