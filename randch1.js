//chrome --disable-web-security --user-data-dir ?? --allow-file-access-from-files

//console.log($("textarea").attr("rows"));
//$("textarea").text("Hello1");
var str = "Hello2";
$("textarea").html(str);
str = str + "\n" + "Hello3"
$("textarea").html(str);

//var ifrm1 = $("#ifrm1").get(0).contentWindow.document;
//var ifrm2 = $("#ifrm2").get(0).contentDocument;
//var ifrm3 = $("#ifrm3").get(0).contentDocument;
//console.log($('#ifrm1').contents().find('title').html());
//console.log($('#ifrm2').contents().find('title').html());

$("#btn1").on("click", function () {
    var fdoc1 = window.frames.ifrm1.document;
    var fdoc2 = window.frames.ifrm2.document;

    if (fdoc1.getElementsByTagName("input")[0] == undefined) {
        fdoc1.location.reload(true);
        return;
    }
    msg = fdoc2.getElementsByClassName("msg_stranger");
    if (msg.length === 0) {
        msg = fdoc1.getElementsByClassName("msg_stranger");
    }
    lastmsgc = msg[msg.length - 1].getElementsByClassName("msg_in")[0].textContent;
    fdoc1.getElementsByTagName("input")[0].value = lastmsgc;
    fdoc1.getElementsByClassName("submit")[0].getElementsByTagName("button")[0].click()
    fdoc1.getElementsByTagName("input")[0].value = "1";
});

$("#btn2").on("click", function () {
    var fdoc1 = window.frames.ifrm1.document;
    var fdoc2 = window.frames.ifrm2.document;

    // 시작버튼
    //console.log(fdoc.getElementsByClassName("start")[0].getAttribute("height"));
    //if(fdoc.getElementsByClassName("start")[0])

    if (fdoc2.getElementsByTagName("input")[0] == undefined) {
        fdoc2.location.reload(true);
        return;
    }
    msg = fdoc1.getElementsByClassName("msg_stranger");
    if (msg.length === 0) {
        msg = fdoc2.getElementsByClassName("msg_stranger");
    }
    lastmsgc = msg[msg.length - 1].getElementsByClassName("msg_in")[0].textContent;
    fdoc2.getElementsByTagName("input")[0].value = lastmsgc;
    fdoc2.getElementsByClassName("submit")[0].getElementsByTagName("button")[0].click();
    fdoc2.getElementsByTagName("input")[0].value = "2";
});


$("#btn3").on("click", function () {
    var fdoc1 = window.frames.ifrm1.document;
    var fdoc2 = window.frames.ifrm2.document;

    deleteCookie(fdoc1, 'm1');
    //document.location.reload(true);
    fdoc1.location.reload(true);
    fdoc2.location.reload(true);
});

$("#btn4").on("click", function () {
    var fdoc2 = window.frames.ifrm2.document;
    var fdoc1 = window.frames.ifrm1.document;

    fdoc1.getElementsByClassName("start")[0].getElementsByTagName("button")[0].click();
    fdoc2.getElementsByClassName("start")[0].getElementsByTagName("button")[0].click();
});

var pmsg1;
var pmsg2;
var smsg = 'ㅎㅇ';
$("#btn5").on("click", function () {
    var fdoc2 = window.frames.ifrm2.document;
    var fdoc1 = window.frames.ifrm1.document;

    if (fdoc1.getElementsByTagName("input")[0] == undefined || fdoc2.getElementsByTagName("input")[0] == undefined) {
        if (fdoc1.getElementsByTagName("input")[0] == undefined) {
            fdoc1.getElementsByClassName("start")[0].getElementsByTagName("button")[0].click();
            pmsg1 = "";
        }
        if (fdoc2.getElementsByTagName("input")[0] == undefined) {
            fdoc2.getElementsByClassName("start")[0].getElementsByTagName("button")[0].click();
            pmsg2 = "";
        }
        return;
    }

    var msg1 = fdoc1.getElementsByClassName("msg_stranger");
    var msg2 = fdoc2.getElementsByClassName("msg_stranger");
    if (msg1.length !== 0) {
        lastmsgc1 = msg1[msg1.length - 1].getElementsByClassName("msg_in")[0].textContent;
        if (pmsg1 !== lastmsgc1) {
            fdoc2.getElementsByTagName("input")[0].value = lastmsgc1;
            fdoc2.getElementsByClassName("submit")[0].getElementsByTagName("button")[0].click()
            fdoc2.getElementsByTagName("input")[0].value = "2";
            pmsg1 = lastmsgc1;
        }
    }

    if (msg2.length !== 0) {
        lastmsgc2 = msg2[msg2.length - 1].getElementsByClassName("msg_in")[0].textContent;
        if (pmsg2 !== lastmsgc2) {
            fdoc1.getElementsByTagName("input")[0].value = lastmsgc2;
            fdoc1.getElementsByClassName("submit")[0].getElementsByTagName("button")[0].click()
            fdoc1.getElementsByTagName("input")[0].value = "1";
            pmsg2 = lastmsgc2;
        }
    }
});



function setCookie(doc, name, value, expiredays) {
    var cookie = name + "=" + escape(value) + "; path=/;"
    if (typeof expiredays != 'undefined') {
        var todayDate = new Date();
        todayDate.setDate(todayDate.getDate() + expiredays);
        cookie += "expires=" + todayDate.toGMTString() + ";"
    }
    doc.cookie = cookie;
}

function getCookie(doc, name) {
    name += "=";
    var cookie = doc.cookie;
    var startIdx = cookie.indexOf(name);
    if (startIdx != -1) {
        startIdx += name.length;
        var endIdx = cookie.indexOf(";", startIdx);
        if (endIdx == -1) {
            endIdx = cookie.length;
            return unescape(cookie.substring(startIdx, endIdx));
        }
    }
    return null;
}

function deleteCookie(doc, name) {
    setCookie(doc, name, "", -1);
}
