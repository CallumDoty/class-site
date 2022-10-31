


// a variable to store the number of times the button has been clicked
var clicks = 0;

$(".button").on("click",function() {
  $("button").clone().appendTo("body");
  $("body").clone().appendTo("button");
  $("button").clone().appendTo("body");
  $("button").clone().appendTo("button");
    if(clicks === 0){
        animation1();
    } 
    
    if(clicks === 1){
        animation2();
    }
     
    if(clicks === 2){
        animation3();
    }

    if(clicks === 3){
      animation4();
    } 
  
    if(clicks === 4){
      animation5();
    }
   
    if(clicks === 5){
      animation6();
    }

    if(clicks === 6){
      animation1();
    } 
  
   if(clicks === 7){
      animation2();
    }
   
    if(clicks === 8){
      animation3();
    }

    if(clicks === 9){
    animation4();
    } 

    if(clicks === 10){
    animation5();
    }
 
    if(clicks === 11){
    animation6();
    }


    
    // ...
    
    // this increments our clicks variable by 1 
    // each time the button is clicked
    clicks++;
});

function animation1() {
  $("div").animate({
    
    opacity: '100',
    height: '850px',
    width: '850px',
    
  });
}

function animation2() {
  $("div").animate({
    
    opacity: '100',
    height: '500px',
    width: '500px'
  });
}

function animation3() {
  $("div").animate({
    
    opacity: '100',
    height: '100px',
    width: '100px'
  });
}

function animation4() {
  $("div").animate({
  
    opacity: '100',
    height: '100px',
    width: '100px'
  });
}

function animation5() {
  $("div").animate({
   
    opacity: '100',
    height: '1900px',
    width: '1900px'
  });
}
function animation6() {
  $("div").animate({
   
    opacity: '100',
    height: '1300px',
    width: '1300px'
  });
}

function animation7() {
  $("div").animate({
    
    opacity: '100',
    height: '10px',
    width: '10px'
  });
}
function animation8() {
  $("div").animate({
   
    opacity: '100',
    height: '1070px',
    width: '1070px'
  });
}

function animation9() {
  $("div").animate({
  
    opacity: '100',
    height: '100px',
    width: '100px'
  });
}
function animation10() {
  $("div").animate({
  
    opacity: '100',
    height: '1000px',
    width: '1000px'
  });
}

function animation11() {
  $("div").animate({
    opacity: '100',
    height: '1100px',
    width: '1100px'
  });
}
