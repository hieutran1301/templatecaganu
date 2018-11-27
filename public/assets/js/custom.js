$(document).on('load',function(){
    $('#Content').hide();
});

$(document).ready(function () {

    // Loading
    $('#Loading').fadeOut(100);
    $('#Content').show(100);

    // Load product seen
    var data = new Array();
    var product = $.cookie('product');
    if(product){
        product =  JSON.parse(product);
        for (let i = 0; i < product.length; i++) {
            data.push(product[i]);            
        }
        console.log(data);
    }else{
        product = [];
    }

    // Save product seen
        // Get data        
        var product_item = [];
        
        product_item = {
            id          : $('#productId').val(),
            name        : $('#productName').val(),
            image       : $('#productImage').val(),
            price_old   : $('#productPriceOld').attr('text'),
            price_sale  : $('#productPriceSale').attr('text'),
            price_save  : $('#productPriceSave').val(),
            url         : $('#url').val()
        }
        data.push(product_item);

        // localStorage.setItem('product', JSON.stringify(list_product));
        $.cookie('product',JSON.stringify(data));        
        // console.log(data);
    // End save product seen

    // List product Carousel
    $('.carousel-product').owlCarousel({
        loop: true,
        margin: 10,
        autoplay: true,
        nav: true,
        navText: ["<span class='icon icon-cgn-circle-left'></span>", "<span class='icon icon-cgn-circle-right'></span>"],
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 5
            },
            1000: {
                items: 5
            }
        }
    })

    // Col-9
    $('.carousel-product-2').owlCarousel({
        loop: true,
        margin: 10,
        autoplay: false,
        nav: true,
        navText: ["<span class='icon icon-cgn-circle-left'></span>", "<span class='icon icon-cgn-circle-right'></span>"],
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 4
            },
            1000: {
                items: 4
            }
        }
    })

    // List images
    $('.carousel-image').owlCarousel({
        margin: 10,
        nav: true,
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 5
            },
            1000: {
                items: 8
            }
        }
    })

    // Autoclick button when input press "Enter"
    $('.input-txt').keyup(function(e){
        var key = $(this).val();
        var btn_toggle = $(this).attr('data-toggle');
        console.log(btn_toggle);
        var code = e.keyCode || e.which;

        if(code == 13) {
            $(btn_toggle).click();
        }
    })

    // Check current path
    var pathname = window.location.pathname;

    if (pathname == "/") {
        var deadline = new Date(Date.parse(new Date()) + 15 * 24 * 60 * 60 * 1000);
        initializeClock('clockdiv', deadline);
        $('.breadcrumb-wrap').css('display', 'none');
    } else {
        $('#menu').css('display', 'none');
        $('#menu-action').attr('data-toggle', 'hide')
    }

    // Show menu
    $('#menu-action').click(function () {
        if ($(this).attr('data-toggle') == 'hide') {
            $('#menu').show();
            $(this).attr('data-toggle', 'show');
        } else {
            $('#menu').hide();
            $(this).attr('data-toggle', 'hide');
        }
    });


    //Load more brand
    $('#load-more').click(function () {
        if ($(this).attr('data-toggle') == "false") {
            $('#item-load-more').css('display', 'block');
            $(this).attr('data-toggle', "true");
            $(this).text("Thu gọn");
            $(this).parent().find('i').addClass('fa-angle-up');
            $(this).parent().find('i').removeClass('fa-angle-down');
        } else {
            $('#item-load-more').css('display', 'none');
            $(this).attr('data-toggle', "false");
            $(this).text("Xem thêm");
            $(this).parent().find('i').removeClass('fa-angle-up');
            $(this).parent().find('i').addClass('fa-angle-down');
        }
    });

    // xZoom
    $('.xzoom, .xzoom-gallery').xzoom({
        zoomWidth: 600,
        title: true,
        Xoffset: 15
    });

    //Integration with hammer.js
    var isTouchSupported = 'ontouchstart' in window;

    if (isTouchSupported) {
        //If touch device
        $('.xzoom').each(function () {
            var xzoom = $(this).data('xzoom');
            xzoom.eventunbind();
        });

        $('.xzoom').each(function () {
            var xzoom = $(this).data('xzoom');
            $(this).hammer().on("tap", function (event) {
                event.pageX = event.gesture.center.pageX;
                event.pageY = event.gesture.center.pageY;
                var s = 1,
                    ls;

                xzoom.eventmove = function (element) {
                    element.hammer().on('drag', function (event) {
                        event.pageX = event.gesture.center.pageX;
                        event.pageY = event.gesture.center.pageY;
                        xzoom.movezoom(event);
                        event.gesture.preventDefault();
                    });
                }

                xzoom.eventleave = function (element) {
                    element.hammer().on('tap', function (event) {
                        xzoom.closezoom();
                    });
                }
                xzoom.openzoom(event);
            });
        });

        $('.xzoom').each(function () {
            var xzoom = $(this).data('xzoom');
            $(this).hammer().on("tap", function (event) {
                event.pageX = event.gesture.center.pageX;
                event.pageY = event.gesture.center.pageY;
                var s = 1,
                    ls;

                xzoom.eventmove = function (element) {
                    element.hammer().on('drag', function (event) {
                        event.pageX = event.gesture.center.pageX;
                        event.pageY = event.gesture.center.pageY;
                        xzoom.movezoom(event);
                        event.gesture.preventDefault();
                    });
                }

                var counter = 0;
                xzoom.eventclick = function (element) {
                    element.hammer().on('tap', function () {
                        counter++;
                        if (counter == 1) setTimeout(openmagnific, 300);
                        event.gesture.preventDefault();
                    });
                }

                function openmagnific() {
                    if (counter == 2) {
                        xzoom.closezoom();
                        var gallery = xzoom.gallery().cgallery;
                        var i, images = new Array();
                        for (i in gallery) {
                            images[i] = {
                                src: gallery[i]
                            };
                        }
                        $.magnificPopup.open({
                            items: images,
                            type: 'image',
                            gallery: {
                                enabled: true
                            }
                        });
                    } else {
                        xzoom.closezoom();
                    }
                    counter = 0;
                }
                xzoom.openzoom(event);
            });
        });

    } else {
        //Integration with magnific popup plugin
        $('#xzoom-magnific').bind('click', function (event) {
            var xzoom = $(this).data('xzoom');
            xzoom.closezoom();
            var gallery = xzoom.gallery().cgallery;
            var i, images = new Array();
            for (i in gallery) {
                images[i] = {
                    src: gallery[i]
                };
            }
            $.magnificPopup.open({
                items: images,
                type: 'image',
                gallery: {
                    enabled: true
                }
            });
            event.preventDefault();
        });
    }
});



//Countdown
function getTimeRemaining(endtime) {
    var t = Date.parse(endtime) - Date.parse(new Date());
    var seconds = Math.floor((t / 1000) % 60);
    var minutes = Math.floor((t / 1000 / 60) % 60);
    var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    var days = Math.floor(t / (1000 * 60 * 60 * 24));
    return {
        'total': t,
        'days': days,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds
    };
}

function initializeClock(id, endtime) {
    var clock = document.getElementById(id);
    var daysSpan = clock.querySelector('.days');
    var hoursSpan = clock.querySelector('.hours');
    var minutesSpan = clock.querySelector('.minutes');
    var secondsSpan = clock.querySelector('.seconds');

    function updateClock() {
        var t = getTimeRemaining(endtime);

        //   daysSpan.innerHTML = t.days;
        hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
        minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
        secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

        if (t.total <= 0) {
            clearInterval(timeinterval);
        }
    }

    updateClock();
    var timeinterval = setInterval(updateClock, 1000);
}
// End Countdown

// View image before upload comment
var ArrImage = [];

function readURL(input) {
    if (input.files) {
        if (input.files.length <= 5 && (input.files.length + ArrImage.length) <= 5) {
            for (let i = 0; i < input.files.length; i++) {
                ArrImage.push(input.files[i]);
                $('.add-image .error-wrap .help-block').css('display', 'none');
                var reader = new FileReader();

                reader.onload = function (e) {
                    $('#ListImage').append(
                        '<div id="' + input.files[i].lastModified + '" class="image-item">' +
                        '<i modified="' + input.files[i].lastModified + '" class="remove-image-review icon-cgn-cancel-circle"></i>' +
                        '<div class="image">' +
                        '<img src="' + e.target.result + '" alt="">' +
                        '</div>' +
                        '</div>'
                    );
                };

                reader.readAsDataURL(input.files[i]);
            }
        } else {
            $('.add-image .error-wrap .help-block').text('Chỉ được tải lên tối đa 5 hình').css('display', 'block');
        }
    }
}
// End

// Remove Image cmt product
$(document).on('click', '.remove-image-review', function () {
    let modified = $(this).attr('modified');
    for (let i = 0; i < ArrImage.length; i++) {
        if (ArrImage[i].lastModified == modified) {
            ArrImage.splice(i, 1);
            $('#' + modified).remove();
        }
    }
})
// End

// Scroll fix list product on page order
$(window).on("scroll", function (e) {
    let width = $('.order-block').width();
    let height = $('.cart-block').height();
    if ($(this).scrollTop() > 145) {
        if ($(this).scrollTop() > 930) {
            $('#order').addClass("fix-order").css({
                width: width,
                top: 'unset',
                bottom: (230 + $(this).scrollTop() - 930)
            });
        } else {
            $('#order').addClass("fix-order").css({
                width: width,
                top: 0,
                bottom: 0
            });
        }
    } else {
        $('#order').removeClass("fix-order").css('width', width);
    }

});
// End

// Tabs 
$('ul.tabs li').click(function () {
    var tab_id = $(this).attr('data-tab');

    $('ul.tabs li').removeClass('current');
    $('.tab-content').removeClass('current');

    $(this).addClass('current');
    $("#" + tab_id).addClass('current');
})
// End

//Select bank
$('.bank>li').click(function(){
    $('.bank>li').removeClass('active');
    $(this).addClass('active');
});
// End

// Load more detail product
$('#LoadMore').click(function(){
    if($(this).attr('data-load') == "more"){
        $('.product-content-detail').css('height','auto');
        $(this).attr('data-load','less');
        $(this).text('Ẩn bớt');
    }else{
        $('.product-content-detail').css('height','400px');
        $(this).attr('data-load','more');
        $(this).text('Hiện thị tất cả');
    }
})
// End

// Add Cart
$( document ).ready(function() {
    $('.total').text(J_Formatatnumber(shoppingCart.totalCart()));
    var cartArray = shoppingCart.listCart();
    if(cartArray.length == 0){
        $('#list-cart').append(
            "<div class='item-product'>"+
            "<a href='/'>Tiếp tục mua hàng<a>"+
            "<h3>Giỏ hàng của bạn đang trống</h3>"+
            "</div>"
        );
    }else{

    }
});

// Buy
$('#btn-buy').click(function(){
    var cartArray = shoppingCart.listCart();
    $('#qtyTotalBuy').text(cartArray.length);
    console.log(cartArray);
})

// Search product
$('#BtnSearch').click(function(){
    let key = $('#KeySearch').val();
    if(key.length>0){
        key.replace(' ', '+');
        window.location="/tim-kiem?c=0&q="+key;
    }
})
// End

// Show list notification
$("#noti").click(function(){
    if($('.box-noti').hasClass('active')){
        $('.box-noti').removeClass('active');
    }else{
        $('.box-noti').addClass('active');
    }
});
// End

// Show acount option
$("#account").click(function(){
    if($('.box').hasClass('active')){
        $('.box').removeClass('active');
    }else{
        $('.box').addClass('active');
    }
});
// End