var bodies = document.getElementsByTagName("body");
bodies[0].setAttribute("onload", "prettyPrint()");

var pres = document.getElementsByTagName("code");
for (var i = 0; i < pres.length; i++)
{
        pres[i].setAttribute("class", "prettyprint linenums");
}
