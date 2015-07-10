$(document).ready(function() {
	$("#imgLogo").fadeIn(1000);
	$(function(){
	      setInterval(function(){
	         $(".defilement ul").animate({marginLeft:-934},1200,function(){
	            $(this).css({marginLeft:0}).find("li:last").after($(this).find("li:first"));
	         })
	      }, 3500);
	   });
});