$(document).ready(function()  {

	$(".obj").click(function() {
		let buttonName = $(this).attr('class').split(' ')[1].split('-')[0];
		let buttonActive = $(this).hasClass("active");

		if (buttonActive == false) {
			$('#' + buttonName).show();
			$(this).addClass("active");
			$(this).removeClass("inactive");

		} else {
			$('#' + buttonName).hide();
			$(this).addClass("inactive");
			$(this).removeClass("active");
		} 
	});

	$(".button-swirl").click(function() {

		let buttonName1 = $(this).attr('class').split(' ')[1];
		let buttonActive1 = $(this).hasClass("active");

		if (buttonActive1 == false){
			$(this).removeClass("inactive");
			$(this).addClass("active");


			$('#kali1-inactive').hide();
			$('#kali1-active').show();

			$('#kali2-inactive').hide();
			$('#kali2-active').show();

			$('#kali3-inactive').hide();
			$('#kali3-active').show();

			$('#kali4-inactive').hide();
			$('#kali4-active').show();

			$('#kali5-inactive').hide();
			$('#kali5-active').show();

			$('#kali6-inactive').hide();
			$('#kali6-active').show();

			$('#kali7-inactive').hide();
			$('#kali7-active').show();

			$('#kali8-inactive').hide();
			$('#kali8-active').show();
		}
		else
		{
			$(this).addClass("inactive");
			$(this).removeClass("active");

			$('#kali1-active').hide();
			$('#kali1-inactive').show();

			$('#kali2-active').hide();
			$('#kali2-inactive').show();

			$('#kali3-active').hide();
			$('#kali3-inactive').show();

			$('#kali4-active').hide();
			$('#kali4-inactive').show();

			$('#kali5-active').hide();
			$('#kali5-inactive').show();

			$('#kali6-active').hide();
			$('#kali6-inactive').show();

			$('#kali7-active').hide();
			$('#kali7-inactive').show();

			$('#kali8-active').hide();
			$('#kali8-inactive').show();
		}
	});

	$('body').on('keydown', function(e){
		$('#text-display').hide();
		let toplefttop = parseInt($("#top-left-box").css("top"));
		let topleftleft = parseInt($("#top-left-box").css("left"));

		let toprighttop = parseInt($("#top-right-box").css("top"));
		let toprightleft = parseInt($("#top-right-box").css("left"));

		let botlefttop = parseInt($("#bot-left-box").css("top"));
		let botleftleft = parseInt($("#bot-left-box").css("left"));

		let botrighttop = parseInt($("#bot-right-box").css("top"));
		let botrightleft = parseInt($("#bot-right-box").css("left"));

		let lefttoptop = parseInt($("#left-top-box").css("top"));
		let lefttopleft = parseInt($("#left-top-box").css("left"));

		let leftbottop = parseInt($("#left-bot-box").css("top"));
		let leftbotleft = parseInt($("#left-bot-box").css("left"));

		let righttoptop = parseInt($("#right-top-box").css("top"));
		let righttopleft = parseInt($("#right-top-box").css("left"));

		let rightbottop = parseInt($("#right-bot-box").css("top"));
		let rightbotleft = parseInt($("#right-bot-box").css("left"));

		let boxwidth = parseInt($("#bot-right-box").css("width"));
		let boxheight = parseInt($("#bot-right-box").css("height"));
	    let width = window.innerWidth - 60;
		let height = window.innerHeight - 60;

		if (e.which == 37 || e.which == 38 && toplefttop >= 0 && topleftleft >= 0
			                               && toprighttop >= 0 && toprightleft >= 0
			                               && botlefttop >= 0 && botleftleft >= 0
			                               && botrighttop >= 0  && botrightleft >= 0
			                               && lefttoptop >= 0 && lefttopleft >= 0
			                               && leftbottop >= 0 && leftbotleft >= 0
			                               && righttoptop >= 0 && righttopleft >= 0
			                               && rightbottop >= 0 && rightbottop >= 0)
		{
			console.log($("#left-bot-box").css( "top"))
			console.log($("#left-bot-box").css( "left"))
			$("#top-left-box").css( "top", "-=5%" );
			$("#top-left-box").css( "left", "-=5%" );
			$("#bot-left-box").css( "top", "+=5%" );
			$("#bot-left-box").css( "left", "-=5%" );

			$("#top-right-box").css( "top", "-=5%" );
			$("#top-right-box").css( "left", "+=5%" );
			$("#bot-right-box").css( "top", "+=5%" );
			$("#bot-right-box").css( "left", "+=5%" );

			$("#left-top-box").css( "top", "+=25%" );
			$("#left-top-box").css( "left", "+=25%" );
			$("#right-top-box").css( "top", "+=25%" );
			$("#right-top-box").css( "left", "-=25%" );

			$("#left-bot-box").css( "top", "-=25%" );
			$("#left-bot-box").css( "left", "+=25%" );
			$("#right-bot-box").css( "top", "-=25%" );
			$("#right-bot-box").css( "left", "-=25%" );
		}
		else if (e.which == 39 || e.which == 40 && toplefttop <= height && topleftleft <= width
			                               && toprighttop <= height && toprightleft <= width
			                               && botlefttop <= height && botleftleft <= width
			                               && botrighttop <= height && botrightleft <= width
			                               && lefttoptop <= height && lefttopleft <= width
			                               && leftbottop <= height && leftbotleft <= width
			                               && righttoptop <= height && righttopleft <= width 
			                               && rightbottop <= height && rightbottop <= width && toplefttop >= 0 && topleftleft >= 0
			                               && toprighttop >= 0 && toprightleft >= 0
			                               && botlefttop >= 0 && botleftleft >= 0
			                               && botrighttop >= 0  && botrightleft >= 0
			                               && lefttoptop >= 0 && lefttopleft >= 0
			                               && leftbottop >= 0 && leftbotleft >= 0
			                               && righttoptop >= 0 && righttopleft >= 0
			                               && rightbottop >= 0 && rightbottop >= 0)
		{
			console.log($("#left-bot-box").css( "top"))
			console.log($("#left-bot-box").css( "left"))
			$("#top-left-box").css( "top", "+=5%" );
			$("#top-left-box").css( "left", "+=5%" );
			$("#bot-left-box").css( "top", "-=5%" );
			$("#bot-left-box").css( "left", "+=5%" );

			$("#top-right-box").css( "top", "+=5%" );
			$("#top-right-box").css( "left", "-=5%" );
			$("#bot-right-box").css( "top", "-=5%" );
			$("#bot-right-box").css( "left", "-=5%" );

			$("#left-top-box").css( "top", "-=25%" );
			$("#left-top-box").css( "left", "-=25%" );
			$("#right-top-box").css( "top", "-=25%" );
			$("#right-top-box").css( "left", "+=25%" );

			$("#left-bot-box").css( "top", "+=25%" );
			$("#left-bot-box").css( "left", "-=25%" );
			$("#right-bot-box").css( "top", "+=25%" );
			$("#right-bot-box").css( "left", "+=25%" );
		}
		else if (toplefttop > height || topleftleft > width
			                               && toprighttop > height || toprightleft > width
			                               && botlefttop > height || botleftleft > width
			                               && botrighttop  >  height ||botrightleft > width
			                               && lefttoptop  >  height || lefttopleft > width
			                               && leftbottop  >  height || leftbotleft > width
			                               && righttoptop  >  height || righttopleft >width 
			                               && rightbottop  >  height || rightbottop > width || toplefttop < 0 ||topleftleft < 0
			                               && toprighttop < 0 || toprightleft < 0
			                               && botlefttop< 0 ||botleftleft < 0
			                               && botrighttop < 0  ||botrightleft < 0
			                               && lefttoptop < 0 || lefttopleft < 0
			                               && leftbottop < 0 || leftbotleft < 0
			                               && righttoptop < 0 || righttopleft < 0
			                               && rightbottop < 0 || rightbottop < 0) {
			alert("ERROR: browser edge reached! (use mouse to reset webpage)");
		}
	});

	$(".pointless-button").click(function() {
		let buttonActive2 = $(this).hasClass("active1");
		if (buttonActive2 == false){
			$(this).removeClass("inactive1");
			$(this).addClass("active1");
		}
		else {
			$(this).removeClass("active1");
			$(this).addClass("inactive1");
		}
	});

})