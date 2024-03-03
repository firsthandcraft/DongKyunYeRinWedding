
$(document).ready(function(){
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