jQuery(document).ready(function ($) {

    var current_fs, next_fs, previous_fs; //fieldsets
    var opacity;

    $(".next").click(function () {

        current_fs = $(this).parent();
        next_fs = $(this).parent().next();

        //Add Class Active
        $("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");

        //show the next fieldset
        next_fs.show();
        //hide the current fieldset with style
        current_fs.animate({ opacity: 0 }, {
            step: function (now) {
                // for making fielset appear animation
                opacity = 1 - now;

                current_fs.css({
                    'display': 'none',
                    'position': 'relative'
                });
                next_fs.css({ 'opacity': opacity });
            },
            duration: 600
        });
    });

    $(".previous").click(function () {

        current_fs = $(this).parent();
        previous_fs = $(this).parent().prev();

        //Remove class active
        $("#progressbar li").eq($("fieldset").index(current_fs)).removeClass("active");

        //show the previous fieldset
        previous_fs.show();

        //hide the current fieldset with style
        current_fs.animate({ opacity: 0 }, {
            step: function (now) {
                // for making fielset appear animation
                opacity = 1 - now;

                current_fs.css({
                    'display': 'none',
                    'position': 'relative'
                });
                previous_fs.css({ 'opacity': opacity });
            },
            duration: 600
        });
    });

    $('.radio-group .radio').click(function () {
        $(this).parent().find('.radio').removeClass('selected');
        $(this).addClass('selected');
    });

    $(".submit").click(function () {
        return false;
    })


    $(".other-btn").click(function () {
        $(".other-field").show();
    });
    $(".my-tooggle").click(function () {
        $(".other-field").hide();
    });
    $(".other-btn-2").click(function () {
        $(".other-field-2").show();

    });
    $(".my-new-toggle").click(function () {
        $(".other-field-2").hide();

    });
    $(".other-btn-3").click(function () {
        $(".other-field-3").show();
    });
    $(".my-new-toggle").click(function () {
        $(".other-field-3").hide();
    });

    $('#button-validate').click(function () {
        var current_weeight = '';
        var current_weeight = '';

        if ($.trim($('#currentww').val()).length == 0) {
            current_weeight = 'This field is required';
            $('#current_weeight').text(current_weeight);

        }
    })

});
