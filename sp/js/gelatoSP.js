// JavaScript Document

jQuery(function ($) {

    // Mail Form Validation .====================================================================
    $('form button.contactSubmit').click(function (e) {
        if(!$('#inputName').val().match(/^[ぁ-んァ-ヶー一-龠　 ]+$/)) {
            $('#inputName').val('').attr('placeholder', 'ひら・カナ・漢字でお願いします。').addClass('validateError');
            e.preventDefault();
            return false;
        }
    });

    $('form button.contactSubmit').click(function (e) {
        if(!$('#inputPhonetic').val().match(/^[ァ-ロワヲンー　 ]+$/)) {
            $('#inputPhonetic').val('').attr('placeholder', 'カナでお願いします。').addClass('validateError');
            e.preventDefault();
            return false;
        }
    });
    $('form button.contactSubmit').click(function (e) {
        if(!$('#inputMail').val().match(/^[A-Za-z0-9]+[\w\.-]+@[\w\.-]+\.\w{2,}$/)) {
            $('#inputMail').val('').attr('placeholder', 'メールアドレスを入力してください。').addClass('validateError');
            e.preventDefault();
            return false;
        }
    });
    $('form button.contactSubmit').click(function (e) {
        var mailAddress = $('#inputMail').val();
        if(!$('#inputMailConfirm').val().match(mailAddress) || $('#inputMailConfirm').val() === '') {
            $('#inputMailConfirm').val('').attr('placeholder', '上記アドレスと異なるか未入力です。').addClass('validateError');
            e.preventDefault();
            return false;
        }
    });
    $('form button.contactSubmit').click(function (e) {
        if(!$('#inputTel').val().match(/^[0-9\-]+$/)) {
            $('#inputTel').val('').attr('placeholder', '電話番号を入力して下さい').addClass('validateError');
            e.preventDefault();
            return false;
        }
    });
    $('form button.contactSubmit').click(function (e) {
        if($('#inputMatter').val() === '') {
            $('#inputMatter').val('').attr('placeholder', 'お問い合わせ内容を入力して下さい。').addClass('validateError');
            e.preventDefault();
            return false;
        }
    });


    // intro SVG Animations Functions.=============================
    function logoSVGAnimation() {

        var passDuration = 1800;
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
    }
    // intro SVG Animations Functions End.=============================


    // Set Cookie. Only First Access Intro Animation. ====================================================================
    if(Cookies.get('topFirstAccess')) {
        $('body').removeClass('introduction').addClass('slideShow');
    }
    $(window).on('load', function () {
        Cookies.set('topFirstAccess', 'first');
    });
    if($('body').hasClass('introduction')) {
        setTimeout(function () {
            $(".fadeAnimation").each(function (index) {
                $(this).delay(index * 75).fadeTo(1250, 1, "easeInExpo");
            });
            setTimeout(function () {
                $("img#introIceCreamExclamation").addClass("exclamationAnimation");
            }, 2500);
        }, 500);
        $("#introLogoImagesBox").delay(4500).fadeOut(1000, function () {
            if(navigator.userAgent.indexOf("Android") === -1) {
                logoSVGAnimation();
            }
            setTimeout(function () {
                $("#gelatoLogoFontBlackOutLine").fadeTo(500, 0);
                $("#gelatoLogoFontBlack").fadeTo(750, 1, function () {
                    $("#homeSubTitle span").delay(250).each(function (index) {
                        $(this).delay(index * 25).animate({
                            "opacity": 1
                        });
                    });
                    $('#intro').delay(2250).fadeOut(1000);
                    $('header h1, h2').delay(3500).fadeTo(1000, 1, function () {
                        $('button#menuBtn').fadeTo(1000, 1);
                        $('p#copyRight').delay(400).fadeTo(1000, 1);
                    });
                    $('#topImageBox').delay(1500).vegas({
                        overlay: false,
                        transition: 'blur',
                        transitionDuration: 2000,
                        delay: 7500,
                        animationDuration: 20000,
                        slides: [
                        {
                            src: 'images/topPageBackgroundIMG.jpg'
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
            }, 900);
        });
    }


    // Layout Sorting Functions.=============================
    function layOutSorting() {

        var windowWidth = $(window).width(),
            windowHeight = $(window).height();

        // Top Page.
        var getIntroLogoMaskWidth = $("#introLogoMask").width(),
            getIntroIceCreamHeight = $("#introIceCream").height(),
            getIntroLogoImagesBoxHeight = getIntroLogoMaskWidth + getIntroIceCreamHeight,
            getIntroLogoFontHeight = $('#gelatoLogoFontBlack').height(),
            getIntroSubTitleHeight = $('p#homeSubTitle').outerHeight(true),
            topPageHeadingWidth = $('#topPage header h1').width();

        $("#introLogoImagesBox").height(getIntroLogoImagesBoxHeight);
        $("#rainbowAnimationWrap").height(getIntroLogoMaskWidth);
        $('#fontAnimation').height(getIntroLogoFontHeight + getIntroSubTitleHeight);
        $('#gelatoLogoFontBlackOutLine').height(getIntroLogoFontHeight);
        $('#topPage header h1').height(topPageHeadingWidth * 0.17142857142857);

    }

    layOutSorting();

    $(window).on("load resize", function () {
        layOutSorting();
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

    // Menu Open
    $("#menuBtn").on('click', function () {
        $("nav").animate({
            'height': '100%',
            'opacity': '1',
            'bottom': '0'
        });
    });
    $('#menuHamburger').on('click', function () {
        $("nav").animate({
            'height': '100%',
            'opacity': '1',
            'bottom': '0'
        });
        $(this).children('span').removeClass('fa-align-justify').addClass('fa-close');
    });
    // Menu Close
    $('#menuClose').on('click', function () {
        $("nav").animate({
            'height': '0%',
            'opacity': '0',
            'bottom': '-10%'
        });
        $('#menuHamburger span').removeClass('fa-close').addClass('fa-align-justify');
    });

    // Sub Page Heading Animation & Page Top Button Case Window Scroll Fade In. & Scroll Wrap Page Landscape Copyright Fade In.
    $('#scrollWrap').on('scroll resize', function () {
        var scrollValue = $(this).scrollTop(),
            scrollPosition = $(this).height() + $(this).scrollTop(),
            scrollHeightWorks = $('#worksContents').outerHeight(),
            scrollHeightCompany = $('#companyContents').outerHeight(),
            copyRightOpacity = $('p#copyRight').css('opacity'),
            getID = $('body').attr('id');

        // Heading Animation & Page Top Fade.
        if(scrollValue > 50) {
            $('body:not(#topPage) header h1').addClass('fontSmall');
            $('#pageTop').fadeIn(500);
        } else {
            $('body:not(#topPage) header h1').removeClass('fontSmall');
            $('#pageTop').fadeOut(500);
        }

        // WorksPage Copyright Fade.
        if(getID === 'worksPage' && scrollHeightWorks - scrollPosition < 10 && copyRightOpacity === '0') {
            $('p#copyRight').fadeTo(250, 1);
        } else if(scrollHeightWorks - scrollPosition > 10 && copyRightOpacity === '1') {
            $('p#copyRight').fadeTo(250, 0, function () {});
        }

        // CompanyPage Copyright Fade.
        if(getID === 'companyPage' && scrollHeightCompany - scrollPosition < 10 && copyRightOpacity === '0') {
            $('p#copyRight').fadeTo(250, 1);
        } else if(scrollHeightCompany - scrollPosition > 10 && copyRightOpacity === '1') {
            $('p#copyRight').fadeTo(250, 0, function () {});
        }
        console.log(getID);
    });

    // Page Top.
    $('#pageTop').on('click', function () {
        $('#scrollWrap').animate({
            scrollTop: 0
        }, 250, 'swing');
    });

    //getCurrent
    $("nav ul li a").each(function () {
        var $href = $(this).attr("href");
        if(location.href.match($href)) {
            $(this).addClass("current");
        } else {
            $(this).removeClass("current");
        }
    });

    // Top Page Slide Show.
    if($('body').hasClass('slideShow')) {
        $('#topImageBox').delay(4000).vegas({
            overlay: false,
            transition: 'blur',
            transitionDuration: 2000,
            delay: 7500,
            animationDuration: 20000,
            slides: [
            {
                src: 'images/topPageBackgroundIMG.jpg'
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


    //PC Access Case, Allocation SP → PC URL.
    function pcReplaceURL() {
        var homeURL = window.location.hostname,
            path = window.location.pathname,
            replacePath = path.replace("/sp", ""),
            parameter = window.location.search,
            hash = window.location.hash,
            pcURL = "http://" + homeURL + replacePath + parameter + hash;
        if(navigator.userAgent.indexOf("iPhone") == -1 && navigator.userAgent.indexOf("iPad") == -1 && navigator.userAgent.indexOf("iPod") == -1 && navigator.userAgent.indexOf("Android") == -1) {
            location.href = pcURL;
        }
    }

    pcReplaceURL();

});
