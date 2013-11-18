function Marquee(){
	if (scroll_end.offsetWidth - scroll_div.scrollLeft <= 0)
		scroll_div.scrollLeft -= scroll_begin.offsetWidth;
	else{
		scroll_div.scrollLeft++;
	}
}

scroll_end.innerHTML = scroll_begin.innerHTML;
var speed = 30;
var MyMar = setInterval(Marquee,speed);
scroll_div.onmouseover = function() { clearInterval(MyMar); }
scroll_div.onmouseout = function() { MyMar=setInterval(Marquee,speed); }