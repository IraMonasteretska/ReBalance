$((function(){$(".leftname, .rightinfo").hover((function(){$(".rightname").css({transform:"translateY(-100%)"}),$(".rightinfo").css({transform:"translateY(0%)"})}),(function(){$(".rightname").css({transform:"translateY(0%)"}),$(".rightinfo").css({transform:"translateY(100%)"})})),$(".rightname, .leftinfo").hover((function(){$(".leftname").css({transform:"translateY(-100%)"}),$(".leftinfo").css({transform:"translateY(0%)"})}),(function(){$(".leftname").css({transform:"translateY(0%)"}),$(".leftinfo").css({transform:"translateY(100%)"})}));let s=($(window).width()-$(".container").width())/2;function t(s){var t=s.find("li").length;t>3&&(s.find("li:nth-last-child(-n+3)").clone().prependTo(s),s.addClass("animate"),s.css("animation-duration",4*t+"s"))}$(".rightinfo").css("padding-right",s+30+"px"),$(".leftinfo").css("padding-left",s+30+"px"),$(window).width()<992?($(".slider").css("padding-left",s+"px"),$(".cards").css("padding-left",s+"px")):($(".slider").css("padding-left","0px"),$(".cards").css("padding-left","0px")),$(window).width()<768?$(".comments").css("padding-left",s+"px"):$(".comments").css("padding-left","0px"),$(window).resize((function(){let s=($(window).width()-$(".container").width())/2;$(".rightinfo").css("padding-right",s+30+"px"),$(".leftinfo").css("padding-left",s+30+"px"),$(window).width()<992?($(".slider").css("padding-left",s+"px"),$(".cards").css("padding-left",s+"px")):($(".slider").css("padding-left","0px"),$(".cards").css("padding-left","0px")),$(window).width()<768?$(".comments").css("padding-left",s+"px"):$(".comments").css("padding-left","0px")})),$(".slider__inner").slick({slidesToShow:5,slidesToScroll:1,speed:800,prevArrow:'<button type="button" class="slick-prev"></button>',nextArrow:'<button type="button" class="slick-next"></button>',responsive:[{breakpoint:1400,settings:{slidesToShow:4,slidesToScroll:1}},{breakpoint:992,settings:{slidesToShow:3,slidesToScroll:1,infinite:!1}},{breakpoint:768,settings:{slidesToShow:2.5,slidesToScroll:1,infinite:!1}},{breakpoint:630,settings:{slidesToShow:2,slidesToScroll:1,infinite:!1}},{breakpoint:470,settings:{slidesToShow:1.5,slidesToScroll:1,infinite:!1}}]}),$(document).ready((function(){$slides=$(".slides"),$slides.bind("contentchanged",(function(){t($slides)})),t($slides)})),$(".comments__slider").slick({slidesToShow:2,slidesToScroll:1,speed:800,prevArrow:'<button type="button" class="slick-prev"></button>',nextArrow:'<button type="button" class="slick-next"></button>',responsive:[{breakpoint:768,settings:{slidesToShow:1.3,slidesToScroll:1,infinite:!1}}]}),$(".burger-btn").on("click",(function(){$(".mobile__menu").toggleClass("active"),$(this).toggleClass("active")})),$(".mobile__dropdown").on("click",(function(){$(this).toggleClass("active"),$(this).find(".mobile__dropdown-list").slideToggle()})),$(".cards__slider").slick({slidesToShow:2.5,slidesToScroll:1,speed:800,infinite:!1,prevArrow:'<button type="button" class="slick-prev"></button>',nextArrow:'<button type="button" class="slick-next"></button>',responsive:[{breakpoint:768,settings:{slidesToShow:2,slidesToScroll:1,infinite:!1}},{breakpoint:600,settings:{slidesToShow:1.5,slidesToScroll:1,infinite:!1}}]}),$(".gallery__slider").slick({slidesToShow:4,slidesToScroll:1,speed:800,infinite:!1,prevArrow:'<button type="button" class="slick-prev"></button>',nextArrow:'<button type="button" class="slick-next"></button>',responsive:[{breakpoint:768,settings:{slidesToShow:3,slidesToScroll:1,infinite:!1}},{breakpoint:600,settings:{slidesToShow:1.5,slidesToScroll:1,infinite:!1}}]});const i=Plyr.setup(".js-player");$(".btn-close").on("click",(function(){i.forEach((function(s){s.stop()}))})),setTimeout((function(){$(".messangersbox").css({transform:"translateX(0%)",opacity:"1"})}),3500)}));