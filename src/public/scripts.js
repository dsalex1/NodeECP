var socket = io();
socket.on('reload', function(){
	console.log("reload!!!!!!!!!!!!!!!!!");
	window.location.replace("./");
});

$(document).bind('keyup', function (e) {
	console.log(e.keyCode);
	window.location.replace("./keypress?keycode="+e.keyCode);
});

if (getParameterByName("Interval")!=null){
	setTimeout(function(){ 
		console.log("redirect to "+getParameterByName("Url"))
		window.location.replace(getParameterByName("Url") || "./"); // || used as null-coalescing operator
	}, getParameterByName("Interval"));
}
	
  
function getParameterByName(name, url) {
	if (!url) {
	  url = window.location.href;
	}
	name = name.replace(/[\[\]]/g, "\\$&");
	var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
		results = regex.exec(url);
	if (!results) return null;
	if (!results[2]) return '';
	return decodeURIComponent(results[2].replace(/\+/g, " "));
}


setTimeout(function(){ 
	//console.clear();
	//console.log("scroll");
	$('.scrollable').each(function() {
		
		//$(this).find( "li" ).css( "background-color", "red" );
		/*var content = $(this).find('.headline').html();
        var newtr = $("<tr>");
        newtr.html(content);
		console.log($(this).parent().find('.planExchangeHeader').find('.table'));
        $(this).parent().find('.planExchangeHeader').find('.table').append(newtr);
		$(this).find('.headline').remove();*/
		
		var space = $(this).height() ;
		//document.getElementById('scrollable').style.height = '100' + 'px';
		$(this).find(".scrollContainer").height('auto');
		//document.getElementById('scrollable').style.height = '100px';
		var height=$(this).find(".scrollContainer").height();
		//console.log(height);
		if (height>space){
			
			//headline adjustment
			var newHeadline=$(this).parent().find('.planExchangeHeader').find('.table')
			$(newHeadline).append($(this).find('.headline').clone());
			$(this).find('.headline').find('td').each(function(index,width) { 
				//console.log(""+index+" "+$(this).width()+" "+$(newHeadline).find('tr').children().eq(index).width());
				$(newHeadline).find('tr').children().eq(index).width($(this).width())
				$(this).css("color","rgba(255,255,255,0.0)");
			});
			//end of headline adjustment
			space-=$(newHeadline).height();
			$(this).find(".scrollContainer").height(space + 'px');
		  //console.log("scroll "+height+" at "+space);

		  $(this).find(".scrollContent").clone().appendTo( $(this).find(".scrollClones") );
		  function loop(height_,obj) {
			obj.find(".scrollClones").css({"margin-top": "0px"});
			obj.find(".scrollClones").animate ({
			  "margin-top": "-="+height_+"px",
			}, 20*height_, 'linear', function() {
			  loop(height_,obj);
			});
		  }
		  loop(height,$(this));
		}else{
			$(this).css({"flex-grow": "0"});
		}
	});
}, 1000);
