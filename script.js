var altNav = function() {
    document.getElementById("disappear").innerHTML = "<a href=games.html>Games</a> | <a href=art.html>Art</a> | <a href=poetry.html>Poetry</a> | <a href=other.html>Other</a>";
}

var regNav = function() {
    document.getElementById("disappear").innerHTML = "<a href=projects.html>Projects</a>";
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
    document.getElementById("image").src = "images/" + imgSrcs[i];
    document.getElementById("body").style.backgroundColor = bgColors[i];
}

var j = 0;
var cycleImages = function(num, amt) {
    j++;
    j %= amt;
    var image = "images/art/artExample" + num + "" + j + ".png";
    document.getElementById("cycle" + num).src = image;
}

var fileNames = ["Intelligence Should Always Be Capitalized",
                 "Nighttime Walk",
                 "Sonnet About a Lamp",
                 "Like a Sidewalk",
                 "J",
                 "Altering Natural Selection",
                 "Green",
                 "The Things I Carry",
                 "A Bit of Counterfactual Thinking",
                 "Death Anxiety",
                 "Molecules",
                 "Sunshine",
                 "Five Minutes"];
var k = 0;
var cyclePoetry = function() {
    k++;
    //k %= fileNames.length;
    var poem = "poetry/" + fileNames[k] + ".pdf";
    document.getElementById("poemTag").data = poem;
}

// var k = 0;
// var cyclePoetry = function(num, amt) {
//     k++;
//     k %= amt;
//     var image = "poetryExample" + num + "" + k + ".pdf";
//     document.getElementById("cycle" + num).data = image;
// }