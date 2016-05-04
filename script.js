
var onWindowLoad = function(title) {
    insertHUD(title);
    windowScroll(null);
}


window.onscroll = windowScroll;
function windowScroll(ev) {
    if (document.getElementById("top")) {
        //adjust page div offsets
        if (window.pageYOffset < 79) {
            document.getElementById("top").style.top = (-window.pageYOffset) + "px";
            document.getElementById("pic").style.top = (50 - window.pageYOffset) + "px";
            document.getElementById("nav").style.top = (75 - window.pageYOffset) + "px";
            document.getElementById("main").style.top = (500 - window.pageYOffset) + "px";
        } else if (window.pageYOffset >= 79) {
            document.getElementById("top").style.top = "-79px";
            document.getElementById("pic").style.top = "-29px";
            document.getElementById("nav").style.top = "-4px";
            document.getElementById("main").style.top = "421px";
        }
    }
}


var insertHUD = function(title) {
    //initial cookie save if necessary
    if (document.cookie === "") {
        saveCookie();
    }
    curBG = document.cookie.substring(8, 9);
    //just to cut down some repeated code in the html
    document.getElementById("hud").innerHTML =
        "<div id=\"top\">"+
            "<h1>" + title + "</h1>"+
        "</div>"+
        "<div id=\"nav\">"+
            "<table align=\"center\">"+
                "<tr>"+
                    "<td class=\"rtd\" style=\"width:5px\">"+
                        "<h3>|</h3>"+
                    "</td>"+
                    "<td class=\"rtd\">"+
                        "<h3><a href=\"index.html\">Home</a></h3>"+
                    "</td>"+
                    "<td class=\"rtd\" style=\"width:5px\">"+
                        "<h3>|</h3>"+
                    "</td>"+
                    "<td class=\"rtd\" onmouseenter=\"altNav()\" onclick=\"altNav()\" onmouseleave=\"regNav()\">"+
                        "<h3><span id=\"disappear\">Projects</span></h3>"+
                    "</td>"+
                    "<td class=\"rtd\" style=\"width:5px\">"+
                        "<h3>|</h3>"+
                    "</td>"+
                    "<td class=\"rtd\">"+
                        "<h3><a href=\"resume.html\">Resume</a></h3>"+
                    "</td>"+
                    "<td class=\"rtd\" style=\"width:5px\">"+
                        "<h3>|</h3>"+
                    "</td>"+
                    "<td class=\"rtd\">"+
                        "<h3><a onclick=\"changeColor()\">Change Color</a></h3>"+
                    "</td>"+
                    "<td class=\"rtd\" style=\"width:5px\">"+
                        "<h3>|</h3>"+
                    "</td>"+
                "</tr>"+
            "</table>"+
        "</div>"+
        "<div id=\"pic\">"+
            "<div id=\"crop\">"+
                "<img id=\"image\" src=\"" + imgSrcs[curBG] + "\" width=\"100%\" height=\"899px\">"+
            "</div>"+
        "</div>";
    setColorFields();
}


var bgTopColors = ["#CCCCFF", "#CCFFCC", "#FFCCCC", "#FFFFCC"];
var imgSrcs = ["images/blueMain.png", "images/greenMain.png", "images/redMain.png", "images/yellowMain.png"];
var offsets = ["-200px", "-100px", "-350px", "0px"];
var bgColors = ["#888899", "#889988", "#998888", "#999988"];
var curBG = 0;
var changeColor = function() {
    curBG++;
    curBG %= bgTopColors.length;
    setColorFields();
    saveCookie();
}
var setColorFields = function() {
    //change colored parts of the webpage
    document.getElementById("top").style.backgroundColor = bgTopColors[curBG];
    document.getElementById("image").src = "";
    document.getElementById("crop").style.marginTop = offsets[curBG];
    document.getElementById("image").src = imgSrcs[curBG];
    document.getElementById("body").style.backgroundColor = bgColors[curBG];
}


var saveCookie = function() {
    //save current background color
    document.cookie = "savedBG=" + curBG;
}


var curIMG = 0;
var cycleImages = function(num, amt) {
    curIMG++;
    curIMG %= amt;
    var image = "images/art/artExample" + num + curIMG + ".png";
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
var curPoem = 0;
var cyclePoetry = function() {
    curPoem++;
    curPoem %= fileNames.length;
    document.getElementById("poemTag").innerHTML = "<object data=\"poetry/" + fileNames[curPoem] + ".pdf\" type=\"application/pdf\" width=\"100%\" height=\"1075px\"></object>";
}


var altNav = function() {
    document.getElementById("disappear").innerHTML = "<a href=games.html>Games</a>  |  <a href=art.html>Art</a>  |  <a href=poetry.html>Poetry</a>  |  <a href=other.html>Other</a>";
}
var regNav = function() {
    document.getElementById("disappear").innerHTML = "<a href=projects.html>Projects</a>";
}