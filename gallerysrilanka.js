function colo()
{
    var col = ["q.jpg","r.jpg","s.jpg","u.jpg","v.jpg","w.jpg","t.jpg","x.jpg",]
    var len=col.length;
    var ran=Math.random()*len;
    var rannum=Math.round(ran)
    document.getElementById("a").style.backgroundImage="URL(./"+col[rannum]+")"
    var updatethetime=setTimeout(function(){colo()},5000)
}
function imgK(pic,heading,discription)
{
    document.getElementById("bigscreen").removeAttribute("style");
    document.getElementById("imgheading").innerHTML=heading;
    document.getElementById("imgparagraph").innerHTML=discription;
    bigscreen.style.display="flex"
    fullImg.src=pic;
}
function imgV()
{
    document.getElementById("bigscreen").setAttribute("style","display:none")
}