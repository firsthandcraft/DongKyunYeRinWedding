
$(document).ready(function(){
    var container = document.getElementById('map');
		var options = {
			center: new kakao.maps.LatLng(37.51684746591705, 126.72214167109121),
			level: 3
		};
    var markerPosition  = new kakao.maps.LatLng(37.51684746591705, 126.72214167109121); 

    // 마커를 생성합니다
    var marker = new kakao.maps.Marker({
        position: markerPosition
    });
    
    // 마커가 지도 위에 표시되도록 설정합니다
    marker.setMap(map);
		var map = new kakao.maps.Map(container, options);
    var sudoSlider = $("#scene_slider").sudoSlider({
    auto:true,
    effect: "fade",
    pause: 2000,
    speed: 1500,
    boxCols: 6,
    boxRows: 8,
    prevNext: false,
    controlsFade: false,
    continuous: true
    });
    var slides = $("#slider").children().children();
    var container = $("#effectLinksHolder");
    var count = 0;
    $.each($.fn.sudoSlider.effects, function (effectName, effect) {
    count++;
    container.append($("<a> " + effectName + " </a> <span>| </span>").click(function () {
        slides.attr("data-effect", effectName);
        sudoSlider.stopAnimation();
        sudoSlider.goToSlide("next");
    }));
    });
    $("#effectCounter").text(count);
  
});