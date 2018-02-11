//console.log($("textarea").attr("rows"));
//$("textarea").text("Hello1");
var str = "Hello2";
$("textarea").html(str);
str = str + "\n" + "Hello3"
$("textarea").html(str);

//var ifrm1 = $("#ifrm1").get(0).contentWindow.document;
//var ifrm2 = $("#ifrm2").get(0).contentDocument;
//var ifrm3 = $("#ifrm3").get(0).contentDocument;

console.log(document.domain);
var chWin;

$("#btn1").on("click", function () {
    //console.log(window);
    //console.log(ifrm2);
    //console.log($('#ifrm1').contents().find('h1').html());
    //console.log(window.frames.ifrm1.document);

    chWin = window.open("http://www.gagalive.com/randomchat/");
    //chWin = window.open("r_child.html");
    console.log(chWin);
});

$("#btn2").on("click", function () {
    console.log(chWin);
    console.log(chWin.document.getElementsByTagName("title")[0].innerHTML);
});

// document.getElementsByTagName("title")[0].innerHTML;

// Write in text
// document.getElementsByTagName("input")[0].setAttribute("value","안녕하세요?")
// document.getElementsByTagName("input")[0].value = '오랜만입니다.'
// document.getElementsByTagName("input")[0].removeAttribute("readonly");

// Send MSG
// document.getElementsByClassName("submit")[0].getElementsByTagName("button")[0].click()

// GET MSG
var msg = document.getElementsByClassName("msg_stranger");
var lastmsgc = msg[msg.length - 1].getElementsByClassName("msg_in")[0].textContent;
var lastmsgt = msg[msg.length - 1].getElementsByClassName("date")[0].childNodes[2].textContent;
var ptime = "";

//
var msg = document.getElementsByClassName("msg_stranger");
var len = msg.length;
if (plen !== len) {
    console.log(msg[len - 1].getElementsByClassName("msg_in")[0].textContent);
    plen = len;
}

var ifrm = document.createElement("iframe");
ifrm.setAttribute("id", "midfrm");
ifrm.setAttribute("src", "http://localhost:8080/test.jsp?msg=" + msg[len - 1].getElementsByClassName("msg_in")[0].textContent);
ifrm.setAttribute("height", "100");
ifrm.setAttribute("width", "200");
ifrm.setAttribute("style", "overflow-x:scroll !important; overflow-y:scroll !important;");
ifrm.setAttribute("scrolling", "yes");
document.body.appendChild(ifrm);

