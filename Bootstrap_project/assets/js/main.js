"use strict";

$(window).on('load', function() {
    $('.spinner-wrapper').css('opacity', 0);
    $('.spinner-wrapper').css('z-index', -1);
});

$(function(){
    $('.theme_mode').on('click', function(){
        let bodyClassList = $('body').attr('class').split(' ');
        if($.inArray('bg-dark', bodyClassList) !== -1){
            $('body').find('.bg-dark').addClass('bg-light').removeClass('bg-dark');
            $('body').find('.text-light').addClass('text-dark').removeClass('text-light');
            $('body').find('.btn-outline-light').addClass('btn-outline-dark').removeClass('btn-outline-light');
            $('body').find('input').addClass('bg-light').removeClass('bg-transparent');
            $(document).find('body').addClass('bg-light').removeClass('bg-dark');
            $('.theme_mode').text('Light');
        }

        if($.inArray('bg-light', bodyClassList) !== -1){
            $('body').find('.bg-light').addClass('bg-dark').removeClass('bg-light');
            $('body').find('.text-dark').addClass('text-light').removeClass('text-dark');
            $('body').find('.btn-outline-dark').addClass('btn-outline-light').removeClass('btn-outline-dark');
            $('body').find('input').addClass('bg-transparent').removeClass('bg-light');
            $(document).find('body').addClass('bg-dark').removeClass('bg-light');
            $('.theme_mode').text('Dark');
        }
    })
});
