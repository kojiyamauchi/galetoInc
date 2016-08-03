// JavaScript Document

jQuery(function ($) {

    // Set Cookie. Only First Access Intro Animation. ====================================================================
    if(Cookies.get('topFirstAccess')) {
        $('body').removeClass('introduction').addClass('slideShow');
        $('nav').removeClass('intro');
        $('h2#homeSubTitle, #topPage nav ul li').addClass('secondAccess');
        setTimeout(function () {
            $('body,h2#homeSubTitle, #topPage nav ul li').removeClass('secondAccess');
        }, 500);
    }
    $(window).on('load', function () {
        Cookies.set('topFirstAccess', 'first');
    });
    if($('body').hasClass('introduction')) {
        $('#aboutPageMainContents,#aboutPageBackGroundImageLeft,#aboutPageBackGroundImageCenter,#aboutPageBackGroundImageRight').addClass('aboutIntro');
        $('#worksPageMainContentsWrap,#worskPageTopImageBox,#worksPageBottomImageBox').addClass('worksIntro');
        $('#companyPageMainContents table,#companyPageImageAndMapBox').addClass('companyIntro');
    }

    // Sub Page Check Variable.
    var url = window.location.href;

    // Contact Page.
    if(url.indexOf('contact') > -1) {
        if(Cookies.get('contactFirstAccess')) {
            $('body').removeClass('contactIntro');
            $('#loadingWrap').css({
                'display': 'none'
            });
        }
        $(window).on('load', function () {
            Cookies.set('contactFirstAccess', 'first');
        });
    }
    if($('body').hasClass('contactIntro')) {
        $('html,body').css({
            'overflow': 'hidden'
        });
        $('body.contactIntro').css({
            'display': 'block'
        });
        setTimeout(function () {
            var contactLoadingLogoHeight = $('img#loadingIceCreamLogo').height();
            $('#loading').height(contactLoadingLogoHeight).fadeTo(500, 1, function () {
                $('#loadingIceCreamLogoExclamation').addClass('exclamationAnimation');
                $('#loadingWrap').delay(1500).fadeOut(500);
            });
        }, 100);
        setTimeout(function () {
            $('#mainImage').addClass('comp');
            $('#contactContents').addClass('comp');
        }, 1500);
        $('#globalNavi').delay(1500).slideDown(1000);
        setTimeout(function () {
            $("#contactPage #mainImage h1 span").each(function (index) {
                $(this).delay(index * 75).fadeTo(500, 1);
            });
            $("#contactPage #mainImage h1").animate({
                'border-bottom-color': 'rgba(8, 178, 224, 0.5)'
            }, 1250);
        }, 2750);

    }

    // Gallery Page. Don't Use.
    if(url.indexOf('gallery') > -1) {
        $('body').addClass('galleryIntro');
        if(Cookies.get('galleryFirstAccess')) {
            $('body').removeClass('galleryIntro');
        }
        $(window).on('load', function () {
            Cookies.set('galleryFirstAccess', 'first');
        });
    }
    if(url.indexOf('privacyPolicy') > -1) {
        $('body').addClass('privacyPolicyIntro');
        if(Cookies.get('privacyPolicyFirstAccess')) {
            $('body').removeClass('privacyPolicyIntro');
        }
        $(window).on('load', function () {
            Cookies.set('privacyPolicyFirstAccess', 'first');
        });
    }

    //Recruit Page.
    if(url.indexOf('recruit') > -1) {
        $('body').addClass('recruitIntro');
        if(Cookies.get('recruitFirstAccess')) {
            $('body').removeClass('recruitIntro');
            $('#loadingWrap').css({
                'display': 'none'
            });
        }
        $(window).on('load', function () {
            Cookies.set('recruitFirstAccess', 'first');
        });
    }
    if($('body').hasClass('recruitIntro')) {
        $('html,body').css({
            'overflow': 'hidden'
        });
        $('body.recruitIntro').css({
            'display': 'block'
        });
        setTimeout(function () {
            var recruitLoadingLogoHeight = $('img#loadingIceCreamLogo').height();
            $('#loadingWrap #loading').height(recruitLoadingLogoHeight).fadeTo(500, 1, function () {
                $('#loadingIceCreamLogoExclamation').addClass('exclamationAnimation');
                $('#loadingWrap').delay(1500).fadeOut(500);
            });
        }, 100);
        setTimeout(function () {
            $('#mainImage').addClass('comp');
            $('#recruitContents').addClass('comp');
        }, 1500);
        $('#globalNavi').delay(1500).slideDown(1000);
        setTimeout(function () {
            $("#recruitPage #mainImage h1 span").each(function (index) {
                $(this).delay(index * 75).fadeTo(500, 1);
            });
            $("#recruitPage #mainImage h1").animate({
                'border-bottom-color': 'rgba(8, 178, 224, 0.5)'
            }, 1250);
        }, 2750);
        setTimeout(function () {
            $('#recruitContents p').addClass('comp');
        }, 3750);
    }


    // Others Page Back → About Page & Works Page & Company Page functions. ====================================================================
    $(window).on('load', function () {
        var aboutPagePosition = $("#aboutPage").offset().top,
            worksPagePosition = $('#worksPage').offset().top,
            companyPagePosition = $('#companyPage').offset().top;
        if(url.match('/#aboutPage')) {
            $('html,body').scrollTop(aboutPagePosition);
        } else if(url.match('/#worksPage')) {
            $('html,body').scrollTop(worksPagePosition);
        } else if(url.match('/#companyPage')) {
            $('html,body').scrollTop(companyPagePosition);
        }
    });

    //eventToggleSyntax
    (function ($) {
        $.fn.eventToggle = function (fn) {
            var args = arguments,
                guid = fn.guid || jQuery.guid++,
                i = 0,
                toggler = function (event) {
                    var lastToggle = (jQuery._data(this, "lastToggle" + fn.guid) || 0) % i;
                    jQuery._data(this, "lastToggle" + fn.guid, lastToggle + 1);
                    event.preventDefault();
                    return args[lastToggle].apply(this, arguments) || false;
                };
            toggler.guid = guid;
            while(i < args.length) {
                args[i++].guid = guid;
            }
            return this.click(toggler);
        };
    })(jQuery);

    //menuToggle
    $(".btnMenu").eventToggle(function () {
        $("nav.usersNavi").slideDown(500, "swing");
    }, function () {
        $("nav.usersNavi").slideUp(500, "swing");
    });

    //getCurrent
    $("nav.usersNavi ul li a").each(function () {
        var $href = $(this).attr("href");
        if(location.href.match($href)) {
            $(this).addClass("usersNaviCurrent");
        } else {
            $(this).removeClass("usersNaviCurrent");
        }
    });


    // Layout Sorting Functions.=============================
    function layOutSorting() {

        // Global Variable. (Formally)
        var windowWidth = $(window).width(),
            windowHeight = $(window).height();

        // Top Page.
        var getIntroLogoMaskWidth = $("#introLogoMask").width(),
            getIntroIceCreamHeight = $("#introIceCream").height(),
            getIntroLogoImagesBoxHeight = getIntroLogoMaskWidth + getIntroIceCreamHeight,
            getTopPageHomeContentsHeaderHeight = $("#topPage #homeContents header").outerHeight(true),
            getHomeNavBottomCrevice = windowWidth * 0.00277777777778,
            getTopHomeContentsMainImageWrapMarginBottom = windowHeight * 0.01388888888889,
            getAboutPageHeading2Height = $("#aboutPage #aboutPageMainContents h2").outerHeight(true),
            getAboutPageHeading3Height = $("#aboutPage #aboutPageMainContents p").outerHeight();

        $("#introLogoImagesBox").height(getIntroLogoImagesBoxHeight);
        $("#rainbowAnimationWrap").height(getIntroLogoMaskWidth);
        $(".topSection, #topPage, #aboutPage, #worksPage, #companyPage").height(windowHeight);
        $("#mainImageAndSlideImagesWrap, #topHomeContentsMainImageWrap").height(windowHeight - getTopPageHomeContentsHeaderHeight + getHomeNavBottomCrevice);
        $('#slideImageBox').height(windowHeight - getTopPageHomeContentsHeaderHeight + getHomeNavBottomCrevice - 10);
        if(windowWidth < 1330) {
            $('#topPage #homeContents #topHomeContentsMainImageWrap #topHomeContentsMainImageIceCreamLogoBox').css({
                'bottom': '23%'
            });
            $('#topPage #homeContents #topHomeContentsMainImageWrap #topHomeContentsCopyRight').css({
                'bottom': '20%'
            });
        } else if(1331 < windowWidth && windowWidth < 1390) {
            $('#topPage #homeContents #topHomeContentsMainImageWrap #topHomeContentsMainImageIceCreamLogoBox').css({
                'bottom': '22%'
            });
            $('#topPage #homeContents #topHomeContentsMainImageWrap #topHomeContentsCopyRight').css({
                'bottom': '19%'
            });
        } else {
            $('#topPage #homeContents #topHomeContentsMainImageWrap #topHomeContentsMainImageIceCreamLogoBox').css({
                'bottom': '20.872865275142%'
            });
            $('#topPage #homeContents #topHomeContentsMainImageWrap #topHomeContentsCopyRight').css({
                'bottom': '17%'
            });
        }

        // About Page.
        $("#aboutPage #aboutPageMainContents").height(getAboutPageHeading2Height + getAboutPageHeading3Height);

        // Contact Page.
        $("#contactPage #mainImage, #contactPage #contactContents").height(windowHeight);

        // Recruit Page.
        $("#recruitPage").height(windowHeight);

        // Loading Logo Height.
        var loadingLogoHeight = $('img#loadingIceCreamLogo').height();
        $('#loading').height(loadingLogoHeight);

    }

    layOutSorting();

    $(window).on("load resize", function () {
        layOutSorting();
    });
    // Layout Sorting Functions End.=============================


    // intro SVG Animations Functions.=============================
    function logoSVGAnimation() {
        if(navigator.userAgent.indexOf("Chrome") > -1) {
            var passDuration = 1250;
            /*
             * Lazy Line Painter - Path Object
             * Generated using 'SVG to Lazy Line Converter'
             *
             * http://lazylinepainter.info
             * Copyright 2013, Cam O'Connell
             *
             */
            var pathObj = {
                "gelatoLogoFontBlackOutLine": {
                    "strokepath": [
                    {
                        "path": "M126.3,106.9c0-16.6-1.1-18.9-9.6-21.2c-1.7-0.4-5.3-0.6-7.3-0.6c-0.9,0-1.7-0.4-1.7-1.2c0-1.2,1.1-1.6,3.4-1.6  c9.5,0,22.9,0.6,24,0.6s14.5-0.6,20.9-0.6c2.4,0,3.4,0.4,3.4,1.7c0,0.8-0.8,1.2-1.7,1.2c-1.4,0-2.7,0.2-5.3,0.6  c-5.7,1-7.4,4.5-7.9,11.7c-0.4,6.6-0.4,12.8-0.4,21.4v23c0,9.3-0.2,9.7-2.8,11.1c-13.6,7-32.8,9.3-45.1,9.3  c-16.2,0-46.4-2.1-69.9-22C13.3,129.4,1,107.4,1,81.7C1,48.8,17.6,25.5,36.5,14C55.6,2.5,76.7,1,93,1c13.4,0,28.5,2.7,32.6,3.5  c4.4,1,11.9,1.9,17.2,2.1c2.2,0.2,2.6,1,2.6,1.8c0,2.9-1.5,8.7-1.5,29.2c0,3.3-0.4,4.3-1.9,4.3c-1,0-1.3-1.2-1.5-3.1  c-0.3-2.9-1.3-8.6-4.5-13.6c-5.3-7.8-22.5-16.6-50-16.6c-13.4,0-29.3,1.2-45.5,13.6c-12.3,9.5-21,28.2-21,52.3  c0,29,15.1,49.9,22.5,57c16.8,15.8,36.1,22,55.7,22c7.7,0,18.7-1.2,24.2-4.3c2.8-1.4,4.3-3.7,4.3-7.2L126.3,106.9 M812.5,25.4  c-32.6,0-59,25.6-59,57.1s26.4,57.1,59,57.1s59-25.6,59-57.1C871.6,51,845.2,25.4,812.5,25.4 M812.5,135.1  c-23.3,0-42.2-23.5-42.2-52.6s18.9-52.6,42.2-52.6s42.2,23.5,42.2,52.6C854.8,111.6,835.9,135.1,812.5,135.1 M215.7,68.5  c0-23.1,0-27.3-0.4-32.1c-0.3-5.1-1.2-7.5-6.4-8.2c-1.2-0.2-3.9-0.3-5.3-0.3c-0.6,0-1.3-0.7-1.3-1.2c0-0.9,0.7-1.2,2.5-1.2  c7.1,0,17.2,0.4,18.1,0.4c1.1,0,33.7,0.2,37.3,0c3-0.2,5.9-0.7,7.1-0.9c0.7-0.2,1.5-0.7,2.2-0.7c0.5,0,0.7,0.7,0.7,1.4  c0,1-0.9,2.8-1.2,7c-0.1,1.4-0.6,8.1-0.9,9.8c-0.2,0.7-0.7,1.6-1.4,1.6c-0.9,0-1.2-0.7-1.2-1.9c0-1-0.2-3.5-0.9-5.3  c-1.1-2.5-2.6-3.5-11.2-4.6c-2.6-0.3-20.7-0.5-22.5-0.5c-0.7,0-0.9,0.5-0.9,1.6v33.5c0,1,0,1.5,0.9,1.5c1.9,0,22.5,0,26-0.3  c3.8-0.4,6.1-0.5,7.6-2.1c1.1-1.1,1.8-1.9,2.3-1.9s0.9,0.4,0.9,1.2c0,0.9-0.9,3.3-1.3,8.2c-0.3,2.9-0.7,8.6-0.7,9.6  c0,1.2-0.4,2.8-1.4,2.8c-0.7,0-1-0.5-1-1.4c0-1.4,0-3-0.7-4.9c-0.5-2.1-1.9-3.8-8-4.6c-4.3-0.5-20.9-0.7-23.5-0.7  c-0.9,0-1.1,0.5-1.1,1.1v19.5c0,5.1-0.2,22.4,0,25.4c0.3,10,3.2,11.9,18.6,11.9c4.1,0,11.5,0,15.6-1.6c4.1-1.7,6.2-4.3,7.2-10.3  c0.3-1.8,0.6-2.3,1.6-2.3c0.9,0,1.1,1.2,1.1,2.3s-1.2,11.2-2.1,14.4c-1,3.9-2.7,3.9-8.7,3.9c-11.7,0-20.7-0.4-27.1-0.5  c-6.6-0.3-10.6-0.3-13-0.3c-0.4,0-3.3,0-6.7,0.2c-3.1,0.2-6.6,0.3-9,0.3c-1.7,0-2.5-0.3-2.5-1.2c0-0.5,0.3-1.2,1.2-1.2  c1.5,0,3.4-0.6,4.8-0.7c3-0.5,3.3-3.5,4.1-7.9c0.9-6.1,0.9-17.9,0.9-32.2V68.5 M360.2,94.1c0,22.1,0.3,31.2,3.2,33.9  c2.5,2.5,8.5,3.5,20.7,3.5c8.1,0,15.1-0.2,18.8-4.6c1.9-2.3,3.2-5.5,3.7-8.5c0.2-1.1,0.7-1.9,1.6-1.9c0.7,0,1.1,0.7,1.1,2.3  s-1.1,10.6-2.3,15.1c-1,3.5-1.6,4.1-9.9,4.1c-11.2,0-19.9-0.1-27.2-0.5c-7.1-0.2-12.4-0.3-17-0.3c-0.7,0-3.4,0-6.4,0.2  c-3.2,0.2-6.5,0.3-9,0.3c-1.6,0-2.5-0.3-2.5-1.2c0-0.5,0.4-1.2,1.2-1.2c1.5,0,3.4-0.4,4.8-0.7c3-0.7,3.4-3.5,4.1-8  c0.8-6.2,0.8-18.1,0.8-32.6V67.2c0-23.4,0-27.6-0.3-32.4c-0.3-5.1-1.2-7.6-6.4-8.3c-1.2-0.1-3.9-0.3-5.3-0.3c-0.5,0-1.3-0.7-1.3-1.3  c0-0.9,0.7-1.2,2.4-1.2c7.2,0,16.9,0.3,17.8,0.3c0.7,0,12.4-0.3,17.2-0.3c1.6,0,2.5,0.3,2.5,1.2c0,0.5-0.7,1-1.2,1  c-1.1,0-3.4,0.2-5.1,0.4c-4.6,0.9-5.5,3.2-5.8,8.5c-0.2,4.8-0.2,9-0.2,32.4L360.2,94.1 M511.1,30.5c1.9-4.8,2.6-5.7,3.7-5.7  c1.6,0,2.1,2.1,3.7,5.4c2.8,6.2,27.9,67.1,37.4,89.4c5.7,13.2,9.9,15.1,13.3,16.1c2.3,0.7,4.6,0.9,6.2,0.9c0.9,0,2,0.4,2,1.2  c0,0.9-1.8,1.2-3.6,1.2c-2.3,0-13.8,0-24.6-0.3c-3-0.2-5.5-0.2-5.5-1.1c0-0.7,0.4-0.7,1.1-1.1c0.9-0.3,2.5-1.5,1.4-4l-14.1-33.8  c-0.4-0.7-0.5-0.9-1.4-0.9h-36c-0.7,0-1.3,0.4-1.6,1.2l-8.8,23.6c-1.4,3.7-2.3,7.3-2.3,9.9c0,2.9,2.7,4,5.3,4h1.4  c1.3,0,1.6,0.5,1.6,1.2c0,0.9-0.9,1.2-2.3,1.2c-3.7,0-12.2-0.5-14-0.5c-1.6,0-9.4,0.5-15.8,0.5c-2,0-3-0.3-3-1.2  c0-0.7,0.7-1.2,1.4-1.2c1.1,0,3.4-0.1,4.6-0.3c7.1-0.9,10.1-6.1,13.1-13.6L511.1,30.5 M528.5,91.9c0.7,0,0.7-0.3,0.5-1l-15.4-40.4  c-0.8-2.3-1.7-2.3-2.6,0l-14.5,40.4c-0.2,0.7,0,1,0.5,1H528.5z M667.4,95.6c0,14.3,0,26,0.7,32.1c0.5,4.4,1.2,7.2,6.1,7.8  c2.1,0.4,5.6,0.7,7.1,0.7c1,0,1.2,0.7,1.2,1.2c0,0.7-0.7,1.2-2.5,1.2c-8.5,0-18.5-0.5-19.3-0.5c-0.7,0-11.5,0.5-16.1,0.5  c-1.8,0-2.4-0.4-2.4-1.2c0-0.5,0.3-1,1.2-1c1.4,0,3.2-0.4,4.6-0.7c3.2-0.7,4-3.7,4.5-8c0.8-6.1,0.8-17.8,0.8-32.1V33.3l-22.5,0.4  c-9.8,0.2-13.5,1.2-15.8,4.7c-1.8,2.6-1.9,3.7-2.5,4.7c-0.4,1.2-0.9,1.4-1.6,1.4c-0.4,0-1.1-0.4-1.1-1.2c0-1.6,3.2-14.8,3.4-16  c0.3-0.9,1.1-2.8,1.6-2.8c1.1,0,2.6,1.2,6.9,1.8c4.4,0.5,10.5,0.7,12.2,0.7h58.9c5.1,0,8.7-0.4,11.2-0.7c2.3-0.4,3.7-0.7,4.5-0.7  c0.7,0,0.7,0.9,0.7,1.7c0,4.5-0.5,15.2-0.5,16.9c0,1.2-0.7,1.9-1.4,1.9s-1-0.5-1.2-2.6l-0.2-1.6c-0.5-4.5-3.9-7.8-18.8-8.2  l-19.5-0.4v62.3",
                        "duration": passDuration
                    }],
                    "dimensions": {
                        "width": 873,
                        "height": 164
                    }
                }
            };
            /*
             Setup and Paint your lazyline!
             */
            $("#gelatoLogoFontBlackOutLine").lazylinepainter({
                "svgData": pathObj,
                "strokeWidth": 2,
                "strokeColor": "#000",
                "ease": "easeInOutExpo",
            }).lazylinepainter("paint");
        } else {
            var passDuration2 = 1800;
            /*
             * Lazy Line Painter - Path Object
             * Generated using 'SVG to Lazy Line Converter'
             *
             * http://lazylinepainter.info
             * Copyright 2013, Cam O'Connell
             *
             */
            var pathObj2 = {
                "gelatoLogoFontBlackOutLine": {
                    "strokepath": [
                    {
                        "path": "M126.3,106.9c0-16.6-1.1-18.9-9.6-21.2c-1.7-0.4-5.3-0.6-7.3-0.6c-0.9,0-1.7-0.4-1.7-1.2c0-1.2,1.1-1.6,3.4-1.6  c9.5,0,22.9,0.6,24,0.6s14.5-0.6,20.9-0.6c2.4,0,3.4,0.4,3.4,1.7c0,0.8-0.8,1.2-1.7,1.2c-1.4,0-2.7,0.2-5.3,0.6  c-5.7,1-7.4,4.5-7.9,11.7c-0.4,6.6-0.4,12.8-0.4,21.4v23c0,9.3-0.2,9.7-2.8,11.1c-13.6,7-32.8,9.3-45.1,9.3  c-16.2,0-46.4-2.1-69.9-22C13.3,129.4,1,107.4,1,81.7C1,48.8,17.6,25.5,36.5,14C55.6,2.5,76.7,1,93,1c13.4,0,28.5,2.7,32.6,3.5  c4.4,1,11.9,1.9,17.2,2.1c2.2,0.2,2.6,1,2.6,1.8c0,2.9-1.5,8.7-1.5,29.2c0,3.3-0.4,4.3-1.9,4.3c-1,0-1.3-1.2-1.5-3.1  c-0.3-2.9-1.3-8.6-4.5-13.6c-5.3-7.8-22.5-16.6-50-16.6c-13.4,0-29.3,1.2-45.5,13.6c-12.3,9.5-21,28.2-21,52.3  c0,29,15.1,49.9,22.5,57c16.8,15.8,36.1,22,55.7,22c7.7,0,18.7-1.2,24.2-4.3c2.8-1.4,4.3-3.7,4.3-7.2L126.3,106.9 M812.5,25.4  c-32.6,0-59,25.6-59,57.1s26.4,57.1,59,57.1s59-25.6,59-57.1C871.6,51,845.2,25.4,812.5,25.4 M812.5,135.1  c-23.3,0-42.2-23.5-42.2-52.6s18.9-52.6,42.2-52.6s42.2,23.5,42.2,52.6C854.8,111.6,835.9,135.1,812.5,135.1 M215.7,68.5  c0-23.1,0-27.3-0.4-32.1c-0.3-5.1-1.2-7.5-6.4-8.2c-1.2-0.2-3.9-0.3-5.3-0.3c-0.6,0-1.3-0.7-1.3-1.2c0-0.9,0.7-1.2,2.5-1.2  c7.1,0,17.2,0.4,18.1,0.4c1.1,0,33.7,0.2,37.3,0c3-0.2,5.9-0.7,7.1-0.9c0.7-0.2,1.5-0.7,2.2-0.7c0.5,0,0.7,0.7,0.7,1.4  c0,1-0.9,2.8-1.2,7c-0.1,1.4-0.6,8.1-0.9,9.8c-0.2,0.7-0.7,1.6-1.4,1.6c-0.9,0-1.2-0.7-1.2-1.9c0-1-0.2-3.5-0.9-5.3  c-1.1-2.5-2.6-3.5-11.2-4.6c-2.6-0.3-20.7-0.5-22.5-0.5c-0.7,0-0.9,0.5-0.9,1.6v33.5c0,1,0,1.5,0.9,1.5c1.9,0,22.5,0,26-0.3  c3.8-0.4,6.1-0.5,7.6-2.1c1.1-1.1,1.8-1.9,2.3-1.9s0.9,0.4,0.9,1.2c0,0.9-0.9,3.3-1.3,8.2c-0.3,2.9-0.7,8.6-0.7,9.6  c0,1.2-0.4,2.8-1.4,2.8c-0.7,0-1-0.5-1-1.4c0-1.4,0-3-0.7-4.9c-0.5-2.1-1.9-3.8-8-4.6c-4.3-0.5-20.9-0.7-23.5-0.7  c-0.9,0-1.1,0.5-1.1,1.1v19.5c0,5.1-0.2,22.4,0,25.4c0.3,10,3.2,11.9,18.6,11.9c4.1,0,11.5,0,15.6-1.6c4.1-1.7,6.2-4.3,7.2-10.3  c0.3-1.8,0.6-2.3,1.6-2.3c0.9,0,1.1,1.2,1.1,2.3s-1.2,11.2-2.1,14.4c-1,3.9-2.7,3.9-8.7,3.9c-11.7,0-20.7-0.4-27.1-0.5  c-6.6-0.3-10.6-0.3-13-0.3c-0.4,0-3.3,0-6.7,0.2c-3.1,0.2-6.6,0.3-9,0.3c-1.7,0-2.5-0.3-2.5-1.2c0-0.5,0.3-1.2,1.2-1.2  c1.5,0,3.4-0.6,4.8-0.7c3-0.5,3.3-3.5,4.1-7.9c0.9-6.1,0.9-17.9,0.9-32.2V68.5 M360.2,94.1c0,22.1,0.3,31.2,3.2,33.9  c2.5,2.5,8.5,3.5,20.7,3.5c8.1,0,15.1-0.2,18.8-4.6c1.9-2.3,3.2-5.5,3.7-8.5c0.2-1.1,0.7-1.9,1.6-1.9c0.7,0,1.1,0.7,1.1,2.3  s-1.1,10.6-2.3,15.1c-1,3.5-1.6,4.1-9.9,4.1c-11.2,0-19.9-0.1-27.2-0.5c-7.1-0.2-12.4-0.3-17-0.3c-0.7,0-3.4,0-6.4,0.2  c-3.2,0.2-6.5,0.3-9,0.3c-1.6,0-2.5-0.3-2.5-1.2c0-0.5,0.4-1.2,1.2-1.2c1.5,0,3.4-0.4,4.8-0.7c3-0.7,3.4-3.5,4.1-8  c0.8-6.2,0.8-18.1,0.8-32.6V67.2c0-23.4,0-27.6-0.3-32.4c-0.3-5.1-1.2-7.6-6.4-8.3c-1.2-0.1-3.9-0.3-5.3-0.3c-0.5,0-1.3-0.7-1.3-1.3  c0-0.9,0.7-1.2,2.4-1.2c7.2,0,16.9,0.3,17.8,0.3c0.7,0,12.4-0.3,17.2-0.3c1.6,0,2.5,0.3,2.5,1.2c0,0.5-0.7,1-1.2,1  c-1.1,0-3.4,0.2-5.1,0.4c-4.6,0.9-5.5,3.2-5.8,8.5c-0.2,4.8-0.2,9-0.2,32.4L360.2,94.1 M511.1,30.5c1.9-4.8,2.6-5.7,3.7-5.7  c1.6,0,2.1,2.1,3.7,5.4c2.8,6.2,27.9,67.1,37.4,89.4c5.7,13.2,9.9,15.1,13.3,16.1c2.3,0.7,4.6,0.9,6.2,0.9c0.9,0,2,0.4,2,1.2  c0,0.9-1.8,1.2-3.6,1.2c-2.3,0-13.8,0-24.6-0.3c-3-0.2-5.5-0.2-5.5-1.1c0-0.7,0.4-0.7,1.1-1.1c0.9-0.3,2.5-1.5,1.4-4l-14.1-33.8  c-0.4-0.7-0.5-0.9-1.4-0.9h-36c-0.7,0-1.3,0.4-1.6,1.2l-8.8,23.6c-1.4,3.7-2.3,7.3-2.3,9.9c0,2.9,2.7,4,5.3,4h1.4  c1.3,0,1.6,0.5,1.6,1.2c0,0.9-0.9,1.2-2.3,1.2c-3.7,0-12.2-0.5-14-0.5c-1.6,0-9.4,0.5-15.8,0.5c-2,0-3-0.3-3-1.2  c0-0.7,0.7-1.2,1.4-1.2c1.1,0,3.4-0.1,4.6-0.3c7.1-0.9,10.1-6.1,13.1-13.6L511.1,30.5 M528.5,91.9c0.7,0,0.7-0.3,0.5-1l-15.4-40.4  c-0.8-2.3-1.7-2.3-2.6,0l-14.5,40.4c-0.2,0.7,0,1,0.5,1H528.5z M667.4,95.6c0,14.3,0,26,0.7,32.1c0.5,4.4,1.2,7.2,6.1,7.8  c2.1,0.4,5.6,0.7,7.1,0.7c1,0,1.2,0.7,1.2,1.2c0,0.7-0.7,1.2-2.5,1.2c-8.5,0-18.5-0.5-19.3-0.5c-0.7,0-11.5,0.5-16.1,0.5  c-1.8,0-2.4-0.4-2.4-1.2c0-0.5,0.3-1,1.2-1c1.4,0,3.2-0.4,4.6-0.7c3.2-0.7,4-3.7,4.5-8c0.8-6.1,0.8-17.8,0.8-32.1V33.3l-22.5,0.4  c-9.8,0.2-13.5,1.2-15.8,4.7c-1.8,2.6-1.9,3.7-2.5,4.7c-0.4,1.2-0.9,1.4-1.6,1.4c-0.4,0-1.1-0.4-1.1-1.2c0-1.6,3.2-14.8,3.4-16  c0.3-0.9,1.1-2.8,1.6-2.8c1.1,0,2.6,1.2,6.9,1.8c4.4,0.5,10.5,0.7,12.2,0.7h58.9c5.1,0,8.7-0.4,11.2-0.7c2.3-0.4,3.7-0.7,4.5-0.7  c0.7,0,0.7,0.9,0.7,1.7c0,4.5-0.5,15.2-0.5,16.9c0,1.2-0.7,1.9-1.4,1.9s-1-0.5-1.2-2.6l-0.2-1.6c-0.5-4.5-3.9-7.8-18.8-8.2  l-19.5-0.4v62.3",
                        "duration": passDuration2
                    }],
                    "dimensions": {
                        "width": 873,
                        "height": 164
                    }
                }
            };
            /*
             Setup and Paint your lazyline!
             */
            $("#gelatoLogoFontBlackOutLine").lazylinepainter({
                "svgData": pathObj2,
                "strokeWidth": 2,
                "strokeColor": "#000",
                "ease": "easeInOutExpo",
            }).lazylinepainter("paint");
        }
    }
    // intro SVG Animations Functions End.=============================


    // intro Functions.=============================

    if($('body').hasClass('introduction')) {
        $('body').removeClass('secondAccess');
        $("html, body").scrollTop(0).css({
            "overflow": "hidden"
        });
        setTimeout(function () {
            $(".fadeAnimation").each(function (index) {
                $(this).delay(index * 75).fadeTo(1250, 1, "easeInExpo");
            });
            setTimeout(function () {
                $("img#introIceCreamExclamation").addClass("exclamationAnimation");
            }, 2500);
        }, 500);
        $("#intro").delay(4500).fadeOut(1000, function () {
            $("#topHomeContentsCopyRight").animate({
                "opacity": 1
            }, function () {
                if(navigator.userAgent.indexOf("Firefox") === -1) {
                    logoSVGAnimation();
                }
                setTimeout(function () {
                    $("#gelatoLogoFontBlackOutLine").fadeTo(500, 0);
                    $("#gelatoLogoFontBlack").fadeTo(750, 1, function () {
                        $("#homeSubTitle span").each(function (index) {
                            $(this).delay(index * 25).animate({
                                "opacity": 1
                            }, function () {
                                $("nav.intro ul li").delay(700).each(function (index) {
                                    $(this).delay(index * 75).queue(function () {
                                        $(this).addClass('rotate').dequeue();
                                    });
                                    //$("#topHomeContentsMainImageIceCreamLogoBox").addClass("scaleAnimation");
                                    $("#topHomeContentsMainImageIceCreamLogoBox img").delay(1000).fadeIn(750, "easeInExpo");
                                    setTimeout(function () {
                                        $("#borderTop").animate({
                                            "width": "100%",
                                        }, 3000, "easeOutCubic");
                                        $("img#headerBackGroundBlue").animate({
                                            "left": "0px",
                                        }, 3000, "easeOutCubic");
                                        $("#topHomeContentsMainImageBox").animate({
                                            "left": "0px",
                                            "opacity": 1
                                        }, 3000, "easeOutCubic");
                                        setTimeout(function () {
                                            $("#topPageHomeContentsIceCreamLogoExclamation").addClass("exclamationAnimation");
                                            $("button.scrollButton").delay(2500).css({
                                                "position": "absolute"
                                            }).fadeTo(500, 1, function () {
                                                $("#introAnimationLinkMask").css({
                                                    "display": "none"
                                                });
                                                $("html, body").removeAttr("style");
                                                $('#topPage #homeContents header nav').removeClass('intro');
                                                $('#slideImageBoxCopyRight').show();
                                                $('#topHomeContentsMainImageWrap').delay(4000).fadeOut(1000);
                                                $('#slideImageBox').delay(4000).vegas({
                                                    overlay: false,
                                                    transition: 'blur',
                                                    transitionDuration: 2000,
                                                    delay: 7500,
                                                    animationDuration: 20000,
                                                    slides: [
                                                    {
                                                        src: 'images/01.jpg'
                                                    },
                                                    {
                                                        src: 'images/02.jpg'
                                                    },
                                                    {
                                                        src: 'images/03.jpg'
                                                    },
                                                    {
                                                        src: 'images/04.jpg'
                                                    }]
                                                });
                                            });
                                        }, 3500);
                                    }, 2000);
                                });
                            });
                        });
                    });
                }, 900);
            });
        });
    }
    // intro Functions End.====================================================================


    // Scroll & Parts Animation Functions.====================================================================
    var scrollDuration = 750;

    $(window).scroll(function () {
        var windowHeight = $(window).height(),
            windowTopPosition = $(window).scrollTop(),
            aboutPagePosition = $("#aboutPage").offset().top,
            worksPagePosition = $("#worksPage").offset().top,
            companyPagePosition = $("#companyPage").offset().top;

        if(windowHeight + 200 <= windowTopPosition) {
            $("nav#fixedNavi").slideDown();
        } else {
            $("nav#fixedNavi").slideUp();
        }
        if(aboutPagePosition <= windowTopPosition && windowTopPosition <= (aboutPagePosition + windowHeight)) {
            $("a#fixedNaviAbout").css({
                "color": "rgba(8, 178, 224, 1);"
            });
            $("a#fixedNaviAbout").parent("li").addClass("fixedNaviCurrent");
        } else {
            $("a#fixedNaviAbout").css({
                "color": "rgba(0,0,0,1);"
            });
            $("a#fixedNaviAbout").parent("li").removeClass("fixedNaviCurrent");
        }
        if(worksPagePosition <= windowTopPosition && windowTopPosition <= (worksPagePosition + windowHeight)) {
            $("a#fixedNaviWorks").css({
                "color": "rgba(8, 178, 224, 1);"
            });
            $("a#fixedNaviWorks").parent("li").addClass("fixedNaviCurrent");
        } else {
            $("a#fixedNaviWorks").css({
                "color": "rgba(0,0,0,1);"
            });
            $("a#fixedNaviWorks").parent("li").removeClass("fixedNaviCurrent");
        }
        if(companyPagePosition <= windowTopPosition && windowTopPosition <= (companyPagePosition + windowHeight)) {
            $("a#fixedNaviCompany").css({
                "color": "rgba(8, 178, 224, 1);"
            });
            $("a#fixedNaviCompany").parent("li").addClass("fixedNaviCurrent");
        } else {
            $("a#fixedNaviCompany").css({
                "color": "rgba(0,0,0,1);"
            });
            $("a#fixedNaviCompany").parent("li").removeClass("fixedNaviCurrent");
        }

        if(windowHeight <= windowTopPosition) {
            $('#aboutPageMainContents,#aboutPageBackGroundImageLeft,#aboutPageBackGroundImageCenter,#aboutPageBackGroundImageRight').removeClass('aboutIntro');
        }
        if(windowHeight + 200 <= windowTopPosition) {
            setTimeout(function () {
                $("#aboutPage #aboutPageMainContents h2 span").each(function (index) {
                    $(this).delay(index * 75).fadeTo(500, 1);
                });
            }, 750);
            $('#aboutPageBackGroundImageLeft,#aboutPageBackGroundImageCenter,#aboutPageBackGroundImageRight').removeClass('aboutIntro');
        }
        if(windowHeight * 2 + 250 <= windowTopPosition) {
            $('#worksPageMainContentsWrap,#worskPageTopImageBox,#worksPageBottomImageBox').removeClass('worksIntro');
        }

        if(windowHeight * 2 + 500 <= windowTopPosition) {
            setTimeout(function () {
                $("#worksPageMainContents h2 span").each(function (index) {
                    $(this).delay(index * 75).fadeTo(500, 1);
                });
            }, 750);
        }
        if(windowHeight * 3 + 500 <= windowTopPosition) {
            $('#companyPageMainContents table,#companyPageImageAndMapBox').removeClass('companyIntro');
        }

        if(windowHeight * 3 + 750 <= windowTopPosition) {
            setTimeout(function () {
                $("#companyPageMainContents h2 span").each(function (index) {
                    $(this).delay(index * 75).fadeTo(500, 1);
                });
            }, 750);
        }
    });

    $("a#fixedNaviHome, #companyPage button.scrollButton").on("click", function (e) {
        $("html,body").animate({
            scrollTop: 0
        }, scrollDuration, "easeInExpo");
        e.preventDefault();
        return false;
    });
    $("a#naviAbout, a#fixedNaviAbout, #topPage button.scrollButton").on("click", function (e) {
        $("html,body").animate({
            scrollTop: $("#aboutPage").offset().top
        }, scrollDuration, "easeInExpo", function () {
            setTimeout(function () {
                $(".aboutPageFadeAnimation").each(function (index) {
                    $(this).delay(index * 75).fadeTo(500, 1);
                });
            }, 250);
        });
        e.preventDefault();
        return false;
    });
    $("a#naviWorks, a#fixedNaviWorks, #aboutPage button.scrollButton").on("click", function (e) {
        $("html,body").animate({
            scrollTop: $("#worksPage").offset().top
        }, scrollDuration, "easeInExpo", function () {
            setTimeout(function () {
                $("#worksPageMainContents h2 span").each(function (index) {
                    $(this).delay(index * 75).fadeTo(500, 1);
                });
            }, 250);
        });
        e.preventDefault();
        return false;
    });
    $("a#naviCompany, a#fixedNaviCompany, #worksPage button.scrollButton").on("click", function (e) {
        $("html,body").animate({
            scrollTop: $("#companyPage").offset().top
        }, scrollDuration, "easeInExpo", function () {
            setTimeout(function () {
                $("#companyPageMainContents h2 span").each(function (index) {
                    $(this).delay(index * 75).fadeTo(500, 1);
                });
            }, 250);
        });
        e.preventDefault();
        return false;
    });

    // Scroll Button Mouse Over Animations.
    $("button.scrollButton").on("mouseover", function () {
        $(this).stop(true).fadeTo(500, 0.6);
    }).on("mouseout", function () {
        $(this).stop(true).fadeTo(500, 1);
    });

    // Navigation Gallery Link Mouse Over Animations.
    $("#homeContents header nav #linkGallery, nav#fixedNavi #linkGallery").on("mouseover", function () {
        $(this).children('a').next('span#instagramIcon').stop(true).css({
            'display': 'block'
        }).animate({
            'margin-top': '3px',
            'opacity': '1'
        });
    }).on("mouseout", function () {
        $(this).children('a').next('span#instagramIcon').stop(true).animate({
            'margin-top': '0px',
            'opacity': '0'
        }, function () {
            $(this).css({
                'display': 'none'
            });
        });
    });
    $("nav#fixedNavi #linkGallery a").on("mouseover", function () {
        $(this).next('span#instagramIcon').stop(true).css({
            'display': 'block'
        }).animate({
            'margin-top': '3px',
            'opacity': '1'
        });
    }).on("mouseout", function () {
        $(this).next('span#instagramIcon').stop(true).animate({
            'margin-top': '0px',
            'opacity': '0'
        }, function () {
            $(this).css({
                'display': 'none'
            });
        });
    });
    $("#recruitPage nav#globalNavi #linkGallery a").on("mouseover", function () {
        $(this).next('span#instagramIcon').stop(true).animate({
            'margin-top': '5px',
            'opacity': '1'
        });
    }).on("mouseout", function () {
        $(this).next('span#instagramIcon').stop(true).animate({
            'margin-top': '0px',
            'opacity': '0'
        });
    });
    $("#contactPage nav#globalNavi #linkGallery a").on("mouseover", function () {
        $(this).next('span#instagramIcon').stop(true).animate({
            'margin-top': '5px',
            'opacity': '1'
        });
        $('#contactContents h2').stop(true).fadeTo(400, 0);
    }).on("mouseout", function () {
        $(this).next('span#instagramIcon').stop(true).animate({
            'margin-top': '0px',
            'opacity': '0'
        });
        $('#contactContents h2').stop(true).fadeTo(400, 1);
    });

    // Google Map Open Animations.
    $("a#openMap").eventToggle(function () {
        $(this).html("CLOSE<br>MAP");
        $("#comapnyPageImageBox").hide("drop", {
            direction: "right"
        }, 500);
        $("#googleMap, p#goToGoogleMap").animate({
            "left": 0,
            "opacity": 1
        }, 500);
    }, function () {
        $(this).html("OPEN<br>MAP");
        $("#comapnyPageImageBox").show("drop", {
            direction: "right"
        }, 500);
        $("#googleMap, p#goToGoogleMap").animate({
            "left": "20%",
            "opacity": 0
        }, 500);
    });

    // Contact Page Send Button Mouse Over Action.
    $('button.contactSubmit').on('mouseover', function () {
        $(this).text('Send');
    }).on('mouseout', function () {
        $(this).text('送信');
    });

    // Parts Animation Functions End.====================================================================


    // Mail Form Validation .====================================================================

    $('form button.contactSubmit').click(function (e) {
        if(!$('#inputName').val().match(/^[ぁ-んァ-ヶー一-龠　 ]+$/)) {
            $('#inputName').val('').attr('placeholder', '必須項目です。ひら・カナ・漢字でお願いします。').addClass('validateError');
            e.preventDefault();
            return false;
        }
    });

    $('form button.contactSubmit').click(function (e) {
        if(!$('#inputPhonetic').val().match(/^[ァ-ロワヲンー　 ]+$/)) {
            $('#inputPhonetic').val('').attr('placeholder', '必須項目です。カナでお願いします。').addClass('validateError');
            e.preventDefault();
            return false;
        }
    });
    $('form button.contactSubmit').click(function (e) {
        if(!$('#inputMail').val().match(/^[A-Za-z0-9]+[\w\.-]+@[\w\.-]+\.\w{2,}$/)) {
            $('#inputMail').val('').attr('placeholder', '必須項目です。メールアドレスを入力してください。').addClass('validateError');
            e.preventDefault();
            return false;
        }
    });
    $('form button.contactSubmit').click(function (e) {
        var mailAddress = $('#inputMail').val();
        if(!$('#inputMailConfirm').val().match(mailAddress) || $('#inputMailConfirm').val() === '') {
            $('#inputMailConfirm').val('').attr('placeholder', '必須項目です。上記アドレスと異なるか未入力です。').addClass('validateError');
            e.preventDefault();
            return false;
        }
    });
    $('form button.contactSubmit').click(function (e) {
        if(!$('#inputTel').val().match(/^[0-9\-]+$/)) {
            $('#inputTel').val('').attr('placeholder', '必須項目です。電話番号を入力して下さい').addClass('validateError');
            e.preventDefault();
            return false;
        }
    });
    $('form button.contactSubmit').click(function (e) {
        if($('#inputMatter').val() === '') {
            $('#inputMatter').val('').attr('placeholder', '必須項目です。お問い合わせ内容を入力して下さい。').addClass('validateError');
            e.preventDefault();
            return false;
        }
    });

    // Contact Form Confirm Page Functions.====================================================================
    $('table.formTable tr:nth-of-type(5)').css({
        'display': 'none'
    });

    $('input.send').on('mouseover', function () {
        $(this).val('Send');
    }).on('mouseout', function () {
        $(this).val('送信する');
    });
    $('input.back').on('mouseover', function () {
        $(this).val('back');
    }).on('mouseout', function () {
        $(this).val('前画面に戻る');
    });



    // Slide Show Functions.========================================================================
    if($('body').hasClass('slideShow')) {
        $('#slideImageBox').vegas({
            overlay: false,
            transition: 'blur',
            transitionDuration: 2000,
            delay: 7500,
            animationDuration: 20000,
            slides: [
            {
                src: 'images/01.jpg'
            },
            {
                src: 'images/02.jpg'
            },
            {
                src: 'images/03.jpg'
            },
            {
                src: 'images/04.jpg'
            }]
        });
    }
    // Slide Show Functions End.====================================================================


    // SP Access Case, Allocation PC → SP URL.
    function spReplaceURL() {
        var homeURL = window.location.hostname + "/sp",
            path = window.location.pathname,
            parameter = window.location.search,
            hash = window.location.hash,
            spURL = "http://" + homeURL + path + parameter + hash;
        if(navigator.userAgent.indexOf("iPhone") > -1 || navigator.userAgent.indexOf("iPod") > -1 || navigator.userAgent.indexOf("iPad") > -1 || navigator.userAgent.indexOf("Android") > -1) {
            location.href = spURL;
        }
    }

    spReplaceURL();

    $(window).on('load', function () {
        spReplaceURL();
    });


    // Google Map API Functions.====================================================================
    function callingGoogleMap() {
        var latlng = new google.maps.LatLng(35.644584, 139.672440);
        var myOptions = {
            zoom: 17,
            center: latlng,
            mapTypeControlOptions: {
                mapTypeIds: ["colorScheme", google.maps.MapTypeId.ROADMAP]
            }
        };
        var map = new google.maps.Map(document.getElementById("googleMap"), myOptions);

        var icon = new google.maps.MarkerImage("http://gelato-inc.com/images/googleMapIcon.png",
            new google.maps.Size(65, 95),
            new google.maps.Point(0, 0),
            new google.maps.Point(24, 48),
            new google.maps.Size(52, 76)

        );
        var markerOptions = {
            position: latlng,
            map: map,
            icon: icon,
            title: "Gelato Inc."
        };
        var marker = new google.maps.Marker(markerOptions);

        var styleOptions = [
        {
            "stylers": [
            {
                "color": "#83d8ef"
            },
            {
                "saturation": 30
            },
            {
                "visibility": "on"
            }]
        }, {
            "featureType": "administrative",
            "stylers": [
            {
                "visibility": "off"
            }]
        }, {
            "featureType": "landscape",
            "stylers": [
            {
                "color": "#83d8ef"
            },
            {
                "lightness": 80
            },
            {
                "visibility": "simplified"
            }]
        }, {
            "featureType": "poi",
            "stylers": [
            {
                "visibility": "off"
            }]
        }, {
            "featureType": "road",
            "stylers": [
            {
                "visibility": "off"
            }]
        }, {
            "featureType": "transit",
            "stylers": [
            {
                "color": "#83d8ef"
            },
            {
                "lightness": -40
            },
            {
                "visibility": "simplified"
            }]
        }, {
            "featureType": "water",
            "stylers": [
            {
                "visibility": "off"
            }]
        }, {
            "featureType": "landscape.man_made",
            "stylers": [
            {
                "visibility": "off"
            }]
        }, {
            "featureType": "road.highway.controlled_access",
            "stylers": [
            {
                "color": "#000000"
            },
            {
                "visibility": "simplified"
            },
            {
                "lightness": 30
            }]
        }, {
            "featureType": "transit.line",
            "elementType": "labels.text",
            "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 30
            },
            {
                "visibility": "simplified"
            }]
        }, {
            "featureType": "transit.station",
            "stylers": [
            {
                "visibility": "off"
            }]
        }, {
            "featureType": "transit.station.rail",
            "stylers": [
            {
                "color": "#000000"
            },
            {
                "visibility": "simplified"
            },
            {
                "lightness": 30
            }]
        }, {
            "featureType": "transit.station",
            "elementType": "geometry",
            "stylers": [
            {
                "visibility": "simplified"
            }]
        }, {
            "featureType": "administrative",
            "elementType": "labels.text",
            "stylers": [
            {
                "visibility": "simplified"
            },
            {
                "color": "#000000"
            },
            {
                "lightness": 40
            }]
        }];

        var styledMapOptions = {
            name: "Gelato Inc."
        };
        var styleType = new google.maps.StyledMapType(styleOptions, styledMapOptions);
        map.mapTypes.set("colorScheme", styleType);
        map.setMapTypeId("colorScheme");
    }

    callingGoogleMap();

    // Google Map API Functions End.====================================================================

    //============================================
});
