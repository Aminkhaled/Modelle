/**
 * Created by Dreamer on 7/26/2017.
 */

$(document).ready(function () {
    $('.items .item-hover').hide();

    $('.items .item-product-1').hover(function () {
        $('.items .item-product-1 .item-hover').show();
        $('.items .item-product-1 .item-text hr').css({
            top: 67 + '%'
        });
        $('.items .item-product-2 .item-text hr').css({
            top: 82 + '%'
        });
        $('.items .item-product-3 .item-text hr').css({
            top: 82 + '%'
        });
        $('.items .item-product-4 .item-text hr').css({
            top: 82 + '%'
        });
    }, function () {
        $('.items .item-product-1 .item-hover').hide();
        $('.items .item-product-1 .item-text hr').css({
            top: 79 + '%'
        });

    });

    $('.items .item-product-2').hover(function () {
        $('.items .item-product-2 .item-hover').show();
        $('.items .item-product-2 .item-text hr').css({
            top: 67 + '%'
        });
        $('.items .item-product-1 .item-text hr').css({
            top: 82 + '%'
        });
        $('.items .item-product-3 .item-text hr').css({
            top: 82 + '%'
        });
        $('.items .item-product-4 .item-text hr').css({
            top: 82 + '%'
        });
    }, function () {
        $('.items .item-product-2 .item-hover').hide();
        $('.items .item-product-2 .item-text hr').css({
            top: 79 + '%'
        });

    });

    $('.items .item-product-3').hover(function () {
        $('.items .item-product-3 .item-hover').show();
        $('.items .item-product-3 .item-text hr').css({
            top: 67 + '%'
        });
        $('.items .item-product-1 .item-text hr').css({
            top: 82 + '%'
        });
        $('.items .item-product-2 .item-text hr').css({
            top: 82 + '%'
        });
        $('.items .item-product-4 .item-text hr').css({
            top: 82 + '%'
        });
    }, function () {
        $('.items .item-product-3 .item-hover').hide();
        $('.items .item-product-3 .item-text hr').css({
            top: 79 + '%'
        });

    });

    $('.items .item-product-4').hover(function () {
        $('.items .item-product-4 .item-hover').show();
        $('.items .item-product-4 .item-text hr').css({
            top: 67 + '%'
        });
    }, function () {
        $('.items .item-product-4 .item-hover').hide();
        $('.items .item-product-4 .item-text hr').css({
            top: 79 + '%'
        });
        $('.items .item-product-1 .item-text hr').css({
            top: 82 + '%'
        });
        $('.items .item-product-2 .item-text hr').css({
            top: 82 + '%'
        });
        $('.items .item-product-3 .item-text hr').css({
            top: 82 + '%'
        });
    });

    $('.nav-toggle').click(function () {
        $('.nav-ul').toggleClass('active');
    });
});
