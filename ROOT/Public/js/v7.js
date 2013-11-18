function MM_preloadImages() { //v3.0
  var d=document; if(d.images){ if(!d.MM_p) d.MM_p=new Array();
    var i,j=d.MM_p.length,a=MM_preloadImages.arguments; for(i=0; i<a.length; i++)
    if (a[i].indexOf("#")!=0){ d.MM_p[j]=new Image; d.MM_p[j++].src=a[i];}}
}

function MM_reloadPage(init) {  //reloads the window if Nav4 resized
  if (init==true) with (navigator) {if ((appName=="Netscape")&&(parseInt(appVersion)==4)) {
    document.MM_pgW=innerWidth; document.MM_pgH=innerHeight; onresize=MM_reloadPage; }}
  else if (innerWidth!=document.MM_pgW || innerHeight!=document.MM_pgH) location.reload();
}
MM_reloadPage(true);

function MM_swapImgRestore() { //v3.0
  var i,x,a=document.MM_sr; for(i=0;a&&i<a.length&&(x=a[i])&&x.oSrc;i++) x.src=x.oSrc;
}

function MM_findObj(n, d) { //v4.01
  var p,i,x;  if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) {
    d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}
  if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];
  for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=MM_findObj(n,d.layers[i].document);
  if(!x && d.getElementById) x=d.getElementById(n); return x;
}

function MM_swapImage() { //v3.0
  var i,j=0,x,a=MM_swapImage.arguments; document.MM_sr=new Array; for(i=0;i<(a.length-2);i+=3)
   if ((x=MM_findObj(a[i]))!=null){document.MM_sr[j++]=x; if(!x.oSrc) x.oSrc=x.src; x.src=a[i+2];}
}

//行样式
function set_css(theObj, theCSS) {
	theObj.StyleName = theCSS;
}

//显示部分价格
function dispnav() {
	if (document.getElementById("plist").style.display == "none") {
		document.getElementById("plist").style.display = "";
		document.getElementById("showtxt").style.display = "none";
		document.getElementById("hidetxt").style.display = "";
	} else {
		document.getElementById("plist").style.display = "none";
		document.getElementById("showtxt").style.display = "";
		document.getElementById("hidetxt").style.display = "none";
	}
}

//图像改变大小
function ResizeImage(obj, MaxW, MaxH){
    var imageObject;
    if (obj != null) imageObject = obj;
    var state=imageObject.readyState;
	if (state != 'complete') {
        setTimeout("ResizeImage(null,"+MaxW+","+MaxH+")",50);
		return;
    }
    var oldImage = new Image();
    oldImage.src = imageObject.src;
    var dW = oldImage.width; 
	var dH = oldImage.height;

    if (dW > MaxW || dH > MaxH) {
        a = dW/MaxW; 
		b = dH/MaxH;
        if (b > a) a = b;
        dW = dW/a; 
		dH = dH/a;
    }
    if (dW > 0 && dH > 0) {
        imageObject.width = dW;
		imageObject.height = dH;
	}
}

//QQ
function QQlink(qq,picmode){
	document.write("<a href='http://wpa.qq.com/msgrd?V=1&Uin="+qq+"&Site=青青花木网&Menu=yes' target='blank'><img src='http://wpa.qq.com/pa?p=2:"+qq+":"+picmode+"' border='0' align='absmiddle' alt='QQ号："+qq+" 点击即时交流' onload='javascript:if(this.width>30) this.src=\"http://img.312green.com/img/qqhide.gif\";' ></a>");
	return;
}

//sameheight
function sameheight(){
	if ( document.getElementById("maincontent").offsetHeight < document.getElementById("sidebar").offsetHeight ) {
		document.getElementById("maincontent").style.height = document.getElementById("sidebar").offsetHeight + "px";
	} else {
		document.getElementById("sidebar").style.height = document.getElementById("maincontent").offsetHeight + "px";
	}
}
