$(function () {

    $('.carousel').carousel({
        interval: 3000
    })

    $("#distinction > li > a").click(function (e) {
        $(document).scrollTop($(".pepper-tab").offset().top);
        var href = $(this).attr("href");
        $("#pepper-nav-list a[href =" + '"' + (href) + '"' + "]").tab("show");
        console.log("a[href =" + '"' + (href) + '"' + "]");
        e.preventDefault();
    })
})