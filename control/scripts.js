

$(document).ready(function(){
  $("button").click(function(){
    $("div").animate({
      left: '250px',
      opacity: '0.5',
      height: '150px',
      width: '150px'
    });
  });
});

$(document).ready(function(){
  $("button").click(function(){
    $("div").animate({
      right: '250px',
      opacity: '100',
      height: '1500px',
      width: '1500px'
    });
  });
});

$(document).ready(function(){
  $("button").click(function(){
    $("div").animate({
      left: '400px',
      opacity: '100',
      height: '100px',
      width: '100px'
    });
  });
});