$(document).ready(function () {
    svg4everybody({});
});


$(function() {

    //скролл к верху страницы
    $(window).scroll(function() {
        if($(this).scrollTop() != 0) {
            $('.up').fadeIn();
        } else {
            $('.up').fadeOut();
        }
    });
    $('.up').click(function() {
        $('body,html').animate({scrollTop:0},800);
    });
    
    //выбор города
    $(document).ready(function(){
        //Скрыть PopUp при загрузке страницы
        PopUpHide();
        $(".close-city").on("click", function () {
            PopUpHide();
        });
        $(".city-choice").on("click", function () {
            PopUpHide();
        });
    });
    function PopUpShow(){
        $(".city-you").show();
        $(".city-choice").show();
    }

    //Функция скрытия PopUp
    function PopUpHide(){
        $(".city-you").hide();
        $(".city-choice").hide();
    }


    $('.header-main__city').click(function () {
        $('.city-you').fadeToggle(100);
    });
    $('.header-media-open__box-icon-span').click(function () {
        $('.city-you').fadeToggle(100);
    });
    $('.city-you__btn-grey').click(function () {
        $('.city-choice').fadeToggle(100);
    });


    //about показать/скрыть текст
    $('#open-btn').click(function(){
        var block=$('.about-inside-container');
        if(block.hasClass('opened')){
            block.removeClass('opened');
            block.slideUp();
            $(this).text('Открыть');
        }
        else{
            block.addClass('opened');
            block.slideDown();
            $(this).text('Закрыть');
        }
    });

    //меню левое показать
    $('.header-menu__opener').click(function(){
        var block=$('.menu-nav');
        if(block.hasClass('opened')){
            block.removeClass('opened');
            block.slideUp();
        }
        else{
            block.addClass('opened');
            block.slideDown();
        }
    })

    //меню левое выпадающий список
    $('.menu-nav__item').click(function(){
        var block=$(this).parents('.menu-nav__border').find('.menu-nav__item-sub');
        if($(this).hasClass('opened')){
            $(this).removeClass('opened');
            block.slideUp();
        }
        else{
            $('.menu-nav__item-sub').hide;
            $('.menu-nav__item').removeClass('opened');
            $(this).addClass('opened');
            block.slideDown();
        }
    });

    //мобильное меню открыть
    $('.header-media__menu').click(function(){
        var block=$('.menu-media-full');
        if(block.hasClass('opened')){
            block.removeClass('opened');
            block.slideUp();
        }
        else{
            block.addClass('opened');
            block.slideDown();
        }
    });

    //мобильное меню закрыть
    $('.header-media-open__menu').click(function(){
        var none=$('.menu-media-full');
        if(none.hasClass('closed')){
            none.addClass('closed');
            none.slideDown();
        }
        else{
            none.removeClass('closed');
            none.slideUp();
        }
    });

    $('.header-media__menu').click(function(){
        var block=$('.menu-media-full');
        if(block.hasClass('opened')){
            block.removeClass('opened');
        }
    });

    //поиск мобильное
    $('.search-header-media').click(function(){
        var block=$('.header-media__box-search');
        if(block.hasClass('opened')){
            block.addClass('opened');
            block.slideUp();
        }
        else{
            block.removeClass('opened');
            block.slideDown();
        }
    });

    //мобильное меню, категории
    $('.header-media-nav').click(function(){
        var block=$('.menu-media-category');
        if(block.hasClass('opened')){
            block.removeClass('opened');
            block.slideUp();
        }
        else{
            block.addClass('opened');
            block.slideDown();
        }
        var none=$('.header-media-main');
        if(none.hasClass('closed')){
            none.removeClass('closed');
            none.slideDown();
        }
        else{
            none.addClass('closed');
            none.slideUp();
        }
    });

    $(document).mouseup(function (e) {
        var container = $(".menu-media-full");
        if (container.has(e.target).length === 0){
            container.hide();
            container.removeClass('opened');
        }
    });

    //мобильное меню, категории, субкатегории
    $('.menu-media-category__item').click(function(){
        var block=$(this).parents('.menu-media-category__border').find('.menu-media-category__sub');
        if($(this).hasClass('opened')){
            $(this).removeClass('opened');
            block.slideUp();
        }
        else{
            $(this).addClass('opened');
            block.slideDown();
        }
    });

    //мобильное меню, категории статей
    $('.blog-sidebar-media__btn').click(function(){
        var block=$('.blog-sidebar-media__include');
        if(block.hasClass('opened')){
            block.removeClass('opened');
            block.slideUp();
        }
        else{
            block.addClass('opened');
            block.slideDown();
        }
    });

    //прайс разворачиваем категорию
    $('.price-category__item-box').click(function(){
        var block=$(this).parents('.price-category__item').find('.price-inside');
        if($(this).hasClass('opened')){
            $(this).removeClass('opened');
            block.slideUp();
        }
        else{
            $(this).addClass('opened');
            block.slideDown();
        }
    });

    //прайс разворачиваем промо
    $('.price-footer__discount-border').click(function(){
        var block=$(this).parents('.price-footer__discount-item').find('.price-footer__discount-inside-box');
        if($(this).hasClass('opened')){
            $(this).removeClass('opened');
            block.slideUp();
        }
        else{
            $(this).addClass('opened');
            block.slideDown();
        }
    });

    //доставка/оплата
    $('.pay-delivery__menu-item').click(function(){
       var block=$(this).parents('.pay-delivery').find('' + $(this).data('tab'));
       $('.pay-delivery__block .tab').hide();
       $('.pay-delivery__menu-item').removeClass('opened');
        $(this).addClass('opened');
        block.show();
    });

    //faq
    $('.faq__item-box').click(function(){
        var block=$(this).parents('.faq__item').find('.faq__item-inside');
        if($(this).hasClass('opened')){
            $(this).removeClass('opened');
            block.slideUp();
        }
        else{
            $(this).addClass('opened');
            block.slideDown();
        }
    });

    //каталог фильтр слева
    $('.parametrs__item-box').click(function(){
        var block=$(this).parents('.parametrs__item').find('.parametrs__item-inside');
        if($(this).hasClass('opened')){
            $(this).removeClass('opened');
            block.slideUp();
        }
        else{
            $(this).addClass('opened');
            block.slideDown();
        }
    });

    //каталог фильтр мобильная
    $('.catalog-right__filter-btn-box').click(function(){
        var block=$(this).parents('.catalog-right__filter-btn').find('.catalog-right__filter-btn-inside');
        if($(this).hasClass('opened')){
            $(this).removeClass('opened');
            block.slideUp();
        }
        else{
            $(this).addClass('opened');
            block.slideDown();
        }
    });
    $('.catalog-right__filter-btn-box').click(function(){
        var block=$(this);
        if(block.hasClass('opened')){
            block.removeClass('opened');
            block.slideUp();
        }
        else{
            block.addClass('opened');
            block.slideDown();
        }
    });
    $('.catalog-right__filter-btn-box').click(function(){
        var block=$('.catalog-right__filter-box');
        if(block.hasClass('opened')){
            block.addClass('opened');
            block.slideUp();
        }
        else{
            block.removeClass('opened');
            block.slideDown();
        }
    });
    $('.catalog-right__filter-btn').click(function(){
        var block=$(this).css({'width':'100%','margin-right':'0','margin-bottom':'10px'});
    });

    //карточка товара
    $('.product-menu-item').click(function(){
        var block=$(this).parents('.product-info').find('' + $(this).data('tab'));
        $('.product-inside .tab').hide();
        $('.product-menu-item').removeClass('opened');
        $(this).addClass('opened');
        block.show();
    });

    //авторизация
    $('.login__menu-item').click(function(){
        var block=$(this).parents('.login').find('' + $(this).data('tab'));
        $('.login__inside .tab').hide();
        $('.login__menu-item').removeClass('opened');
        $(this).addClass('opened');
        block.show();
    });

    //личный кабинет
    $('.personal-orders__menu-item').click(function(){
        var block=$(this).parents('.cabinet-place__personal-orders').find($(this).data('tab'));
        $('.personal-orders__inside .tab').hide();
        $('.personal-orders__menu-item').removeClass('opened');
        $(this).addClass('opened');
        block.show();
    });
    $('.personal-orders__menu-item').click(function(){
        var block=$(this).parents('.cabinet-place__personal-orders').find($(this).data('tab'));
        $('.personal-orders__inside-media .tab').hide();
        $('.personal-orders__menu-item').removeClass('opened');
        $(this).addClass('opened');
        block.show();
    });
    $('.personal-orders__inside-atribut').click(function(){
        var block=$(this).parents('.personal-orders__inside-active-item').find('.personal-orders__inside-details');
        if($(this).hasClass('opened')){
            $(this).removeClass('opened');
            block.slideUp();
        }
        else{
            $(this).addClass('opened');
            block.slideDown();
        }
    });
    $('.personal-orders__inside-more').click(function(){
        var block=$(this).parents('.personal-orders__inside-active-item').find('.personal-orders__inside-details');
        if($(this).hasClass('opened')){
            $(this).removeClass('opened');
            block.slideUp();
        }
        else{
            $(this).addClass('opened');
            block.slideDown();
        }
    });

    //личный кабинет основное меню
    $('.cabinet-sidebar__item').click(function(){
        var block=$(this).parents('.cabinet').find('' + $(this).data('tab'));
        $('.cabinet-place .tab').hide();
        $('.cabinet-sidebar__item').removeClass('opened');
        $(this).addClass('opened');
        block.show();
    });




    //карусуль
    $(document).ready(function () {
        //слайдер топ
        $('.teaser-phone').slick({
            dots:true,
            arrows:false,
            infinity:true,
            autoplay:true,
            autoplayspeed:500
        });
        //product-teaser
        $('.products_ad__teaser').slick({
            arrows:true,
            infinity:true,
            mobileFirst:true,
            responsive: [
                {
                    breakpoint: 768,
                    settings:'unslick'
                },
                {
                    breakpoint: 200,
                    settings:'slick'
                }
            ]
        });
        //преимущества
        $('.advantage-box').slick({
            arrows:true,
            infinity:true,
            prevArrow:'<button class="slick-prev slick-arrow advantage__arrow-left"><i class="fa fa-arrow-left"></i></button>',
            nextArrow:'<button class="slick-next slick-arrow advantage__arrow-right"><i class="fa fa-arrow-right"></i></button>',
            mobileFirst:true,
            responsive: [
                {
                    breakpoint: 768,
                    settings:'unslick'
                },
                {
                    breakpoint: 200,
                    settings:'slick'
                }
            ]
        });
        //хит продаж
        $('.products-hit__teaser').slick({
            arrows:true,
            infinity:true,
            mobileFirst:true,
            responsive: [
                {
                    breakpoint: 768,
                    settings:'unslick'
                },
                {
                    breakpoint: 200,
                    settings:'slick'
                }
            ]
        });
        //товары для аута
        $('.products_out__teaser').slick({
            arrows:true,
            infinity:true,
            mobileFirst:true,
            responsive: [
                {
                    breakpoint: 768,
                    settings:'unslick'
                },
                {
                    breakpoint: 200,
                    settings:'slick'
                }
            ]
        });
        //Отзывы
        $('.reviews_message').slick({
            arrows:true,
            prevArrow:'<button class="slick-prev slick-arrow reviews__arrow-left"><i class="fa fa-arrow-left"></i></button>',
            nextArrow:'<button class="slick-next slick-arrow reviews__arrow-right"><i class="fa fa-arrow-right"></i></button>',
            infinity:true
        });

        //товары блог
        $('.article-promo').slick({
            arrows:false,
            infinity:true,
            mobileFirst:true,
            responsive: [
                {
                    breakpoint: 768,
                    settings:'unslick'
                },
                {
                    breakpoint: 200,
                    settings:'slick'
                }
            ]
        });

        //карточка товара
        $('.product-left__gallery-big').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: true,
            asNavFor: '.product-left__gallery-small'
        });
        $('.product-left__gallery-small').slick({
            slidesToShow: 3,
            //slidesToScroll: 1,
            asNavFor: '.product-left__gallery-big',
            //centerMode: true,
            focusOnSelect: true
        });

        //карточка товара, комплект
        $('.products__extra').slick({
            arrows:false,
            infinity:true,
            mobileFirst:true,
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: true,
            rightPadding: '60px',
            responsive: [
                {
                    breakpoint: 768,
                    settings:'unslick'
                },
                {
                    breakpoint: 200,
                    settings:'slick'
                }
            ]
        });

        //карточка товара, доп товары
        $('.products__additionally').slick({
            arrows:false,
            infinity:true,
            mobileFirst:true,
            centerMode: true,
            rightPadding: '60px',
            responsive: [
                {
                    breakpoint: 768,
                    settings:'unslick'
                },
                {
                    breakpoint: 200,
                    settings:'slick'
                }
            ]
        });

        //popup login
        $('.login__inside-entry-a').on('click',function () {
            $.fancybox.open( $('.recovery'),{
            })
        });

        //popup cabinet
        $('.personal-data__info-text-btn').on('click',function () {
            $.fancybox.open( $('.recovery-data'),{
            })
        });
        $('.recovery__popup-data-btn-close').on('click',function () {
            $.fancybox.close( $('.recovery-data'),{
            })
        });
        $('.recovery__popup-data-btn-person').on('click',function () {
            $.fancybox.open( $('.recovery-apply'),{
            });
        });
        $('.recovery__popup-data-btn-close').on('click',function () {
            $.fancybox.close( $('.recovery-apply'),{
            })
        });
    });

});





