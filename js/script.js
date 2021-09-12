$(document).ready(function(){
    $(".more_option").click(function(){
        $(".change").html("less");
        $(".more").show().animate({"top":0},400);
    })
    $(".cut").click(function(){
        $(".change").html("more");
        $(".more").animate({"top":"335px"},400);
        // $(".more").hide();
    })
    $("#yearly").click(function(){
        $(".button_overlay").animate({"right":"-10px"},200);
        $(".button_overlay").animate({"right":0},100);
        $("#yearly").css("color","white");
        $("#monthly").css("color","gray");
        $(".price_down").css("transform","translateY(-55px)")
        $(".price_up").css("transform","translateY(55px)")
    })
    $("#monthly").click(function(){
        $(".button_overlay").animate({"right":"106px"},200);
        $(".button_overlay").animate({"right":"96px"},100);
        $("#yearly").css("color","gray");
        $("#monthly").css("color","white");
        $(".price_down").css("transform","translateY(-110px)")
        $(".price_up").css("transform","translateY(0px)")
    })

})