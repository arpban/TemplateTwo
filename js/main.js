$(function(){
	var $dropdownheadermenu = $('#dropdown-header-menu');
	var $headermenutoggle = $('#header-menu-toggle');
	$headermenutoggle.on('click', function(){
		if($(this).hasClass('open')){
			$(this).removeClass('open');	
		}
		else {
			$(this).addClass('open');	
		}
		$dropdownheadermenu.slideToggle(400);
	});
});
var map;
var mapOptions;
function initMap(){
	mapOptions = {
		center:{lat:40.786112,lng:-73.963297},
		zoom:13,
		scaleControl:false,
		scrollwheel:false,
		zoomControlOptions: {position:google.maps.ControlPosition.LEFT_TOP},
		streetViewControl:true,
		streetViewControlOptions:{position:google.maps.ControlPosition.LEFT_BOTTOM}
	}
	map = new google.maps.Map(document.getElementById('map'), mapOptions);
}