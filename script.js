var altNav = function() {
    document.getElementById("disappear").innerHTML = "<a href=games.html>Games</a> | <a href=art.html>Art</a> | <a href=poetry.html>Poetry</a> | <a href=other.html>Other</a>";
}

var regNav = function() {
    document.getElementById("disappear").innerHTML = "Projects";
}

window.onscroll = scroll;
function scroll(ev) {
    if (window.pageYOffset < 79) {
        document.getElementById("top").style.top = (-window.pageYOffset) + "px";
        document.getElementById("pic").style.top = (50 - window.pageYOffset) + "px";
        document.getElementById("nav").style.top = (75 - window.pageYOffset) + "px";
        document.getElementById("main").style.top = (500 - window.pageYOffset) + "px";
    }
    else if (window.pageYOffset >= 79) {
        document.getElementById("top").style.top = "-79px";
        document.getElementById("pic").style.top = "-29px";
        document.getElementById("nav").style.top = "-4px";
        document.getElementById("main").style.top = "421px";
    }
}

var bgTopColors = ["#CCCCFF","#CCFFCC","#FFCCCC","#FFFFCC"];
var imgSrcs = ["blueMain.png","greenMain.png","redMain.png","yellowMain.png"];
var offsets = ["-200px","-100px","-350px","0px"];
var bgColors =["#888899","#889988","#998888","#999988"];
var i = 0;
var changeColor = function() {
    i++;
    i %= 4;
    document.getElementById("top").style.backgroundColor = bgTopColors[i];
    document.getElementById("image").src = "";
    document.getElementById("crop").style.marginTop = offsets[i];
    document.getElementById("image").src = imgSrcs[i];
    document.getElementById("body").style.backgroundColor = bgColors[i];
}

var j = 0;
var cycleImages = function(num, amt) {
    j++;
    j %= amt;
    var image = "artExample" + num + "" + j + ".png";
    document.getElementById("cycle" + num).src = image;
}

var k = 0;
var cyclePoetry = function(num, amt) {
    k++;
    k %= amt;
    var image = "poetryExample" + num + "" + k + ".pdf";
    document.getElementById("cycle" + num).data = image;
}