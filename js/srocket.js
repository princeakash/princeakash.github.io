$(document).ready(function(e){
    	$("#start-button").click(function(e){
	   		$('.gameBg').css("background-image", "url(./img/home-screen.jpg)");
	   		$('.start-button').css("display", "none");
	   		$('.home-menu').show();
	    });
	    $("#cCampaign").click(function(e){
	   		$('.gameBg').css("background-image", "url(./img/campaign-bg.jpg)");
	   		$('.campaign-main').show();
	   		$('.home-menu').hide();
	    });
	    $("#instructions").click(function(e){
	   		$('.gameBg').css("background-image", "url(./img/main-bg.jpg)");
	   		$('.inst-main').show();
	   		$('.home-menu').hide();
	    });
	    $("#mPlace").click(function(e){
	   		$('.gameBg').css("background-image", "url(./img/market-place-bg.jpg)");
	   		$('.market-main').show();
	   		$('.home-menu').hide();
	    });
	    $("#market-customizebtn").click(function(e){
	   		$('.gameBg').css("background-image", "url(./img/main-bg.jpg)");
	   		$('.customize-main').show();
	   		$('.market-main').hide();
	    });
	    $(".planet").click(function(e){
	   		$('.gameBg').css("background-image", "url(./img/main-bg.jpg)");
	   		$('.game-play-bg').show();
	   		$('.campaign-main').hide();
	    });
	});