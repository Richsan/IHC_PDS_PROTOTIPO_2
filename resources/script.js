var overlay;

var slide;
var slidePos = 0;

function main()
{

	overlay = $("#overlay");
	document.getElementById("closeBt").onclick = fechar;
	document.getElementById("resizeBt").onclick = ajustarImg;
}
function fechar()
{
	 window.onscroll=function(){};
	overlay.hide();
}
function desajustarImg()
{
	var img = document.getElementById("imgView");
	img.style.width = img.naturalWidth + "px";
	img.style.height = img.naturalHeight + "px";
	$("#imgView").css('max-height','none');
	$("#imgView").css('max-width','none');
	$(".imgHolder").css('display', 'block');
	$(".imgHolder").css('align-items', 'top');
	var bt = document.getElementById("resizeBt");
	bt.innerHTML = "Ajustar";
	bt.onclick = ajustarImg;

}
function ajustarImg()
{
	$("#imgView").css('height','auto');
	$("#imgView").css('width','auto');
	$("#imgView").css('max-height','100%');
	$("#imgView").css('max-width','100%');
	$(".imgHolder").css('display', 'flex');
	$(".imgHolder").css('align-items', 'center');
	var bt = document.getElementById("resizeBt");
	bt.innerHTML = "Tamanho Original";
	bt.onclick = desajustarImg;
}

function visualizar()
{
	console.log("visu");
	overlay.show();
	$(document).scrollTop(0);
	
	window.onscroll=function(){window.scrollTo(0, 0);};
}

function selectSlide(num)
{
	slide.goToSlide(num);
	$.sidr('close', 'galeriaSidr');
}

function docReady()
{
    
    function slideTransition(_, _, newIdx)
	{
		var info, text, name, view;
		slidePos = newIdx;

		info = document.getElementById("info");
		text = document.getElementById("ler");
		view = document.getElementById("imgView");
		name = document.getElementById("titleObject");
		imgUrl = document.getElementById("img" + newIdx).src;
		
		info.href = "info"+cenarioId+""+document.getElementById("objCode" + newIdx).innerHTML+".htm";
		text.href = "text"+cenarioId+"" + document.getElementById("objCode" + newIdx).innerHTML+".htm";
		view.src = imgUrl;


		var nameTxt = document.getElementById("objNameId" + newIdx).innerHTML;
		name.innerHTML = "<h1>" + nameTxt + "</h1>";

	}
	var init = parseInt(document.getElementById("start").innerHTML);
	slide = $('#slide').bxSlider(
			{
				responsive: true,
				touchEnabled: true,
				infiniteLoop: false,
				adaptiveHeight: true,
				hideControlOnEnd: true,
				pager: false,
				onSlideBefore: slideTransition
			});
			
	selectSlide(slidePos);
}
$(document).ready(docReady);
window.onload = main;
