function createPlayerNew() {
    $(".video_container_body").html("<div id=\"mobileSWFContainer\"></div>");
    var a = 972,
        b = 500,
        c = GetCookie("lng") == "ru" ? "ru" : "en";
    var d = {
        menu: "false",
        wmode: "window"
    };
    var e = {
        id: "mobileSWF"
    };
    var f = "";
    swfobject.embedSWF("/default/img/mobile_swf/IOS_" + c + ".swf?x=" + Math.random(), "mobileSWFContainer", a, b, "9.0.0", "/default/img/expressInstall.swf", f, d, e)
}

function closeSWF() {
    swfobject.removeSWF("mobileSWF");
    $(".video_container").removeClass("open")
}
// $(function() {
//     var a = Core.cookie.get("lng", "ru"),
//         b = "";
//     switch (a) {
//         case "tw":
//             b = "zh-TW";
//             break;
//         case "br":
//             b = "pt-BR";
//             break;
//         case "sw":
//             b = "sv-se";
//             break;
//         default:
//             b = a;
//             break;
//     }
//     if (getRefId() != 57) {
//         if (typeof grecaptcha === "undefined") {
//             notAuth.loadScript("https://www.google.com/recaptcha/api.js?onload=onloadRender&render=explicit&hl=" + b, true, true)
//         } else {
//             onloadRender()
//         }
//     }
//     $(".video_container").click(function() {
//         $(this).toggleClass("open");
//         if ($("div.video_container").hasClass("open")) {
//             createPlayerNew();
//             setTimeout(closeSWF, 75000)
//         } else {
//             swfobject.removeSWF("mobileSWF")
//         }
//     })
// });

// function renderCaptcha(a, b, c) {
//     if ($("#" + a + "").length) {
//         window["objCaptcha_" + a] = grecaptcha.render(a, {
//             "sitekey": "6LcHxwcUAAAAAIUazEuUGlfmc7IyjkUDFXwtd70t",
//             "theme": "light",
//             "expired-callback": "function() {}",
//             "callback": c,
//             "badge": "bottomleft",
//             "bind": b
//         })
//     }
// }

function sendLink() {
    var a = $("#mobile_send_sms_link_android .g-recaptcha-response").val();
    userPhone.sendSmsUrlAndroid(a);
    return false
}

// function onloadRender() {
    // renderCaptcha("mobile_send_sms_link_android", "send_sms_link_android", sendLink)
// }
$(document).on("click", ".but_android", function(a) {
    a.preventDefault();
    $(".popup-android").arcticmodal()
}).on("click", ".popup-android__close", function() {
    $(this).arcticmodal("close");
    $(".popup-android__form .popup-android__message").hide()
});
$(document).on("click", ".but_ios", function(a) {
    a.preventDefault();
    $(".popup-ios").arcticmodal()
}).on("click", ".popup-ios__close", function() {
    $(this).arcticmodal("close");
    $(".popup-ios__form .popup-ios__message").hide()
});
$(document).ready(function(){
   $(".bottom_pblock").show();
});