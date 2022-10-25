$("#dark-btn").click(function(){

  $(".box").toggleClass("dark");
  $("body").toggleClass("dark");
});


$("#glow-btn").click(function(){

  $(".box").toggleClass("glow");
  $("body").toggleClass("glow");
});


$("#spin-btn").click(function(){

  $(".box").toggleClass("spin");
  $("body").toggleClass("spin");
});


$("#reveal-btn").click(function(){

  $(".rectangle").css("opacity", "1");
  $("#reveal-btn").hide();
});


$(".box").click(function(){
  $(this).hide();
});