$(function(){
  /* link alert창 띄우기*/
  // $(".main_menu li:nth-child(1) a,.main_menu li:nth-child(2) a,.main_menu li:nth-child(3) a,.main_menu li:nth-child(4) a,.main_menu li:nth-child(6) a,.main_menu li:nth-child(7) a,#gnb .gnb_nav .sub_menu a").click(function(){
  //   alert("사이트 준비중입니다.");
  // });
 $(".main_menu li:nth-child(5) a").click(function(){
    $(".contact_wrap").fadeIn().css({"display":"block"});
    // $("html,body").css({"overflow":"hidden"});
 });
 $(".contact_wrap .popup_btn").click(function(){
    $(".contact_wrap").fadeOut().css({"display":"none"});
    // $("html,body").css({"overflow":"inherit"});

 });








  /*footer input */
  $(".section_6 input").val("Enter your email...").css("color","#f1e2cb").one("focus",function(){
    $(this).val("").css("color","#d0a182");
  }).blur(function(){
     if( $(this).val() == "" ){
       $(this).val("Enter your email...").css("color","#f1e2cb").one("focus",function(){
          $(this).val("").css("color","#d0a182");
       });
     }
  });
});
