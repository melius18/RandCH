//chrome --disable-web-security --user-data-dir ?? --allow-file-access-from-files --private
//file:///D:/src_code/inside_js/jrp/randch.html

var audio1 = new Audio('./sound/gunreload.wav');
var audio2 = new Audio('./sound/doorbell.wav');

var ch_state = function () {
    var fdoc1 = window.frames.ifrm1.document;
    var fdoc2 = window.frames.ifrm2.document;

    var msg_len1 = fdoc1.getElementsByClassName("msg_stranger").length;
    var msg_len2 = fdoc2.getElementsByClassName("msg_stranger").length;

    var f1_s1 = fdoc1.getElementsByClassName("msg_loading")[0];
    var f1_s2 = fdoc1.getElementsByTagName("input")[0];
    var f2_s1 = fdoc2.getElementsByClassName("msg_loading")[0];
    var f2_s2 = fdoc2.getElementsByTagName("input")[0];

    if (f1_s1 === undefined && f1_s2 === undefined && f2_s2 !== undefined) {
        if (msg_len2 < 10) {
            fdoc2.getElementsByClassName("v_close")[0].click();
        } else {
            $("#btn6").trigger("click");
            audio2.play();
        }
    }

    if (f2_s1 === undefined && f2_s2 === undefined && f1_s2 !== undefined) {
        if (msg_len1 < 10) {
            fdoc1.getElementsByClassName("v_close")[0].click();
        } else {
            $("#btn6").trigger("click");
            audio2.play();
        }
    }

    var mgs1 = fdoc1.getElementsByClassName("msg_in")[7];
    if (mgs1 !== undefined) {
        var psswd;
        var pattern = /SPAM|스팸/;
        if ((pattern.test(mgs1.textContent)) === true) {
            for (var i = 0; i < mgs1.textContent.length; i++) {
                if (mgs1.textContent[i] === ":") {
                    psswd = mgs1.textContent.substring(i + 1);
                }
            }
            console.log(psswd);
            audio1.play();
        }
    }
}

$("#btn1").on("click", function () {
    //state 0 ready to chat
    //console.log(fdoc1.getElementsByClassName("msg_loading")[0]);  // undefined
    //console.log(fdoc1.getElementsByTagName("input")[0]);          // undefined

    //state 1 in searching
    //console.log(fdoc1.getElementsByClassName("msg_loading")[0]);  // not undefined
    //console.log(fdoc1.getElementsByTagName("input")[0]);          // undefined

    //state 2 in chatting
    //console.log(fdoc1.getElementsByTagName("input")[0]);          // not undefined
});

$("#btn2").on("click", function () {
    //state 0 ready to chat
    //console.log(fdoc1.getElementsByClassName("msg_loading")[0]);  // undefined
    //console.log(fdoc1.getElementsByTagName("input")[0]);          // undefined

    //state 1 in searching
    //console.log(fdoc1.getElementsByClassName("msg_loading")[0]);  // not undefined
    //console.log(fdoc1.getElementsByTagName("input")[0]);          // undefined

    //state 2 in chatting
    //console.log(fdoc1.getElementsByTagName("input")[0]);          // not undefined
});



$("#btn3").on("click", function () {
    var fdoc1 = window.frames.ifrm1.document;
    var fdoc2 = window.frames.ifrm2.document;

    deleteCookie(fdoc1, 'm1');
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

    ch_state();

    if (fdoc1.getElementsByTagName("input")[0] === undefined || fdoc2.getElementsByTagName("input")[0] === undefined) {
        if (fdoc1.getElementsByTagName("input")[0] === undefined) {
            fdoc1.getElementsByClassName("start")[0].getElementsByTagName("button")[0].click();
            pmsg1 = "";
        }
        if (fdoc2.getElementsByTagName("input")[0] === undefined) {
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
            console.log("msg: " + msg2.length);
            if ((msg2.length > 14) && (msg2.length % 5 === 0)) {
                audio2.play();
            }
        }
    }
});

var flg6 = false;
var tim6;
$("#btn6").on("click", function () {
    if (document.getElementById("rad1").checked === false) {
        tim6 = setInterval(function () {
            $("#btn5").trigger("click");
        }, 500);
        document.getElementById("rad1").checked = true;
    }
    else {
        clearInterval(tim6);
        document.getElementById("rad1").checked = false;
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
