// how it works first point
function myFunction() {
   let para =  document.getElementById("demo");
   if(para.style.display != 'none'){
    para.style.display = 'none';
   }
   else{
    para.style.display = 'block';
   }
  }

//   slider
function first(){
    document.getElementById("first").src = "ilya-pavlov-OqtafYT5kTw-unsplash.jpg";
}
function second(){
    document.getElementById("first").src = "pankaj-patel-Ylk5n_nd9dA-unsplash.jpg";
}
function third(){
    document.getElementById("first").src = "hal-gatewood-weRQAu9TA-A-unsplash.jpg";
}
setInterval(first,2000);
setInterval(second,4000);
setInterval(third,6000);

// FAQ page for first question
function func() {
    let a6 =  document.getElementById("a5");
    if(a6.style.display != 'none'){
     a6.style.display = 'none';
    }
    else{
     a6.style.display = 'block';
    }
   }

