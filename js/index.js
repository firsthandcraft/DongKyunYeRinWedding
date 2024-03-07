
$(document).ready(function(){
    
    var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
    mapOption = { 
        center: new kakao.maps.LatLng(37.51684746591705, 126.72214167109121), // 지도의 중심좌표
        level: 3 // 지도의 확대 레벨
    };

    var map = new kakao.maps.Map(mapContainer, mapOption);

    // 마커가 표시될 위치입니다 
    var markerPosition  = new kakao.maps.LatLng(37.51684746591705, 126.72214167109121); 

    // 마커를 생성합니다
    var marker = new kakao.maps.Marker({
        position: markerPosition
    });

    // 마커가 지도 위에 표시되도록 설정합니다
    marker.setMap(map);

    var iwContent = '<div style="padding:5px;">웨스턴팰리스웨딩 <br><a href="https://kko.to/rYsDH4ltJP" style="color:blue" target="_blank">인천 부평구 부평대로278번길 16</a></div>', // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
        iwPosition = new kakao.maps.LatLng(33.450701, 126.570667); //인포윈도우 표시 위치입니다

    // 인포윈도우를 생성합니다
    var infowindow = new kakao.maps.InfoWindow({
        position : iwPosition, 
        content : iwContent 
    });
    
    // 마커 위에 인포윈도우를 표시합니다. 두번째 파라미터인 marker를 넣어주지 않으면 지도 위에 표시됩니다
    infowindow.open(map, marker); 


    //
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