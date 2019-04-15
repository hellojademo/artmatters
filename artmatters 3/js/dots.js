
window.onresize = function(){

  offsetW = (window.innerWidth/100)*30;

  var myCanvas = document.getElementById("myCanvas");

  var ctx = myCanvas.getContext("2d");

  myCanvas.width = window.innerWidth;
  // myCanvas.height = window.innerHeight;
    myCanvas.height = 600;



    var myDrawingCanvas = document.getElementById("myDrawingCanvas");
    var ctxD =  myDrawingCanvas.getContext("2d");
    myDrawingCanvas.width = window.innerWidth;
    myDrawingCanvas.height =window.innerHeight;
  // clear
  ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);
  ctx.beginPath();
  //about
  ctx.arc(283+offsetW,50,6,0,2*Math.PI);
  ctx.font = "10px theCircle";
  ctx.fillText("2",274+offsetW,42);
  ctx.fill();

  //exhibit
  ctx.beginPath();
  ctx.arc(430+offsetW,100,6,0,2*Math.PI);
  ctx.font = "10px theCircle";
  ctx.fillText("3",420+offsetW,90);
  ctx.fill();


  //events
  ctx.beginPath();
 ctx.arc(490+offsetW,250,6,0,2*Math.PI);
 ctx.font = "10px theCircle";
 ctx.fillText("4",480+offsetW,240);
 ctx.fill();

  // ctx.font = "10px Arial";
  // ctx.fillText("4",420,70);


  //ctx.stroke();
  ctx.fillStyle = "black";
  ctx.fill();

  // Set Background Color
  // ctx.fillStyle = "#fff";
  // ctx.fillRect(0, 0, myCanvas.width, myCanvas.height);
// get involved
ctx.beginPath();
 ctx.arc(430+offsetW,385,6,0,2*Math.PI);
 ctx.font = "10px theCircle";
 ctx.fillText("5",418+offsetW,375);
 ctx.fillStyle = "black";
 ctx.fill();

//submit
ctx.beginPath();
 ctx.arc(285+offsetW,478,6,0,2*Math.PI);
 ctx.font = "10px theCircle";
 ctx.fillText("6",270+offsetW,470);
 ctx.fill();

 //archives
 ctx.beginPath();
  ctx.arc(108+offsetW,385,6,0,2*Math.PI);
  ctx.font = "10px theCircle";
  ctx.fillText("7",95+offsetW,377);
  ctx.fill();

  //contact
  //archives
  ctx.beginPath();
   ctx.arc(60+offsetW,245,6,0,2*Math.PI);
   ctx.font = "10px  theCircle";
   ctx.fillText("8",48+offsetW,235);
   ctx.fill();

   //call outs
   ctx.beginPath();
    ctx.arc(110+offsetW,100,6,0,2*Math.PI);
    ctx.font = "10px theCircle";
    ctx.fillText("9",98+offsetW,90);
    ctx.fill();

    ctx.beginPath();
     ctx.arc(130+offsetW,80,6,0,2*Math.PI);
     ctx.font = "10px theCircle";
     ctx.fillText("1",114+offsetW,74);
     ctx.fill();

//logo

ctx.beginPath();
 ctx.arc(150+offsetW,330,6,0,2*Math.PI);
 ctx.font = "10px theCircle";
 ctx.fillText("1",140+offsetW,320);
 ctx.fill();

 ctx.beginPath();
  ctx.arc(148+offsetW,295,6,0,2*Math.PI);
  ctx.font = "10px theCircle";
  ctx.fillText("6",138+offsetW,285);
  ctx.fill();


 ctx.beginPath();
  ctx.arc(160+offsetW,235,6,0,2*Math.PI);
  ctx.font = "10px theCircle";
  ctx.fillText("2",150+offsetW,225);
  ctx.fill();

  ctx.beginPath();
   ctx.arc(205+offsetW,190,6,0,2*Math.PI);
   ctx.font = "10px theCircle";
   ctx.fillText("3",190+offsetW,180);
   ctx.fill();

   ctx.beginPath();
    ctx.arc(260+offsetW,235,6,0,2*Math.PI);
    ctx.font = "10px theCircle";
    ctx.fillText("4",245+offsetW,225);
    ctx.fill();

    ctx.beginPath();
     ctx.arc(275+offsetW,270,6,0,2*Math.PI);
     ctx.font = "10px theCircle";
     ctx.fillText("7",265+offsetW,260);
     ctx.fill();

    ctx.beginPath();
     ctx.arc(285+offsetW,325,6,0,2*Math.PI);
     ctx.font = "10px theCircle";
     ctx.fillText("5",275+offsetW,315);
     ctx.fill();

     ctx.beginPath();
      ctx.arc(305+offsetW,255,6,0,2*Math.PI);
      ctx.font = "10px theCircle";
      ctx.fillText("8",295+offsetW,245);
      ctx.fill();

      ctx.beginPath();
       ctx.arc(315+offsetW,195,6,0,2*Math.PI);
       ctx.font = "10px theCircle";
       ctx.fillText("9",305+offsetW,185);
       ctx.fill();

       ctx.beginPath();
        ctx.arc(335+offsetW,270,6,0,2*Math.PI);
        ctx.font = "10px theCircle";
        ctx.fillText("10",325+offsetW,260);
        ctx.fill();


        ctx.beginPath();
        ctx.arc(345+offsetW,205,6,0,2*Math.PI);
        ctx.font = "10px theCircle";
        ctx.fillText("11",335+offsetW,195);
        ctx.fill();

        ctx.beginPath();
         ctx.arc(365+offsetW,235,6,0,2*Math.PI);
         ctx.font = "10px theCircle";
         ctx.fillText("12",355+offsetW,225);
         ctx.fill();

         ctx.beginPath();
          ctx.arc(395+offsetW,205,6,0,2*Math.PI);
          ctx.font = "10px theCircle";
          ctx.fillText("13",385+offsetW,195);
          ctx.fill();

          ctx.beginPath();
           ctx.arc(425+offsetW,255,6,0,2*Math.PI);
           ctx.font = "10px theCircle";
           ctx.fillText("14",415+offsetW,245);
           ctx.fill();



  // all dots drawn

  var aboutButton = document.getElementById("head1");
  aboutButton.style.left = (255+offsetW)+"px";

  var exButton = document.getElementById("mainex");
  exButton.style.left = (380+offsetW)+"px";

  var evButton = document.getElementById("evbutton");
  evButton.style.left = (460+offsetW)+"px";

  var callButton = document.getElementById("callbutton");
  callButton.style.left = (370+offsetW)+"px";

  var subButton = document.getElementById("subbutton");
  subButton.style.left = (255+offsetW)+"px";

  var archButton = document.getElementById("arch");
  archButton.style.left = (70+offsetW)+"px";

  var callingButton = document.getElementById("callingbutt");
  callingButton.style.left = (65+offsetW)+"px";

  var conButton = document.getElementById("conbutton");
  conButton.style.left = (20+offsetW)+"px";

  var mapButton = document.getElementById("mapbutton");
  mapButton.style.left = (270+offsetW)+"px";

    var calenButton = document.getElementById("calenbutton");
    calenButton.style.left = (295+offsetW)+"px";
}

window.onload = function() {
  var myCanvas = document.getElementById("myCanvas");
  var ctx = myCanvas.getContext("2d");


  var myDrawingCanvas = document.getElementById("myDrawingCanvas");
  var ctxD =  myDrawingCanvas.getContext("2d");
  myDrawingCanvas.width = window.innerWidth;
  myDrawingCanvas.height =window.innerHeight;





  // Fill Window Width and Height
  myCanvas.width = window.innerWidth;
  // myCanvas.height = window.innerHeight;
  myCanvas.height =600;
  offsetW = (window.innerWidth/100)*30;


  ctx.beginPath();
  //about
  ctx.arc(283+offsetW,50,6,0,2*Math.PI);
  ctx.font = "10px theCircle";
  ctx.fillText("2",274+offsetW,42);
  ctx.fill();

  //exhibit
  ctx.beginPath();
  ctx.arc(430+offsetW,100,6,0,2*Math.PI);
  ctx.font = "10px theCircle";
  ctx.fillText("3",420+offsetW,90);
  ctx.fill();


  //events
  ctx.beginPath();
 ctx.arc(490+offsetW,250,6,0,2*Math.PI);
 ctx.font = "10px theCircle";
 ctx.fillText("4",480+offsetW,240);
 ctx.fill();

  // ctx.font = "10px Arial";
  // ctx.fillText("4",420,70);


  //ctx.stroke();
  ctx.fillStyle = "black";
  ctx.fill();

  // Set Background Color
  // ctx.fillStyle = "#fff";
  // ctx.fillRect(0, 0, myCanvas.width, myCanvas.height);
// get involved
ctx.beginPath();
 ctx.arc(430+offsetW,385,6,0,2*Math.PI);
 ctx.font = "10px theCircle";
 ctx.fillText("5",418+offsetW,375);
 ctx.fillStyle = "black";
 ctx.fill();

//submit
ctx.beginPath();
 ctx.arc(285+offsetW,478,6,0,2*Math.PI);
 ctx.font = "10px theCircle";
 ctx.fillText("6",270+offsetW,470);
 ctx.fill();

 //archives
 ctx.beginPath();
  ctx.arc(108+offsetW,385,6,0,2*Math.PI);
  ctx.font = "10px theCircle";
  ctx.fillText("7",95+offsetW,377);
  ctx.fill();

  //contact
  //archives
  ctx.beginPath();
   ctx.arc(60+offsetW,245,6,0,2*Math.PI);
   ctx.font = "10px  theCircle";
   ctx.fillText("8",48+offsetW,235);
   ctx.fill();

   //call outs
   ctx.beginPath();
    ctx.arc(110+offsetW,100,6,0,2*Math.PI);
    ctx.font = "10px theCircle";
    ctx.fillText("9",98+offsetW,90);
    ctx.fill();

    ctx.beginPath();
     ctx.arc(130+offsetW,80,6,0,2*Math.PI);
     ctx.font = "10px theCircle";
     ctx.fillText("1",114+offsetW,74);
     ctx.fill();

//logo

ctx.beginPath();
 ctx.arc(150+offsetW,330,6,0,2*Math.PI);
 ctx.font = "10px theCircle";
 ctx.fillText("1",140+offsetW,320);
 ctx.fill();

 ctx.beginPath();
  ctx.arc(148+offsetW,295,6,0,2*Math.PI);
  ctx.font = "10px theCircle";
  ctx.fillText("6",138+offsetW,285);
  ctx.fill();


 ctx.beginPath();
  ctx.arc(160+offsetW,235,6,0,2*Math.PI);
  ctx.font = "10px theCircle";
  ctx.fillText("2",150+offsetW,225);
  ctx.fill();

  ctx.beginPath();
   ctx.arc(205+offsetW,190,6,0,2*Math.PI);
   ctx.font = "10px theCircle";
   ctx.fillText("3",190+offsetW,180);
   ctx.fill();

   ctx.beginPath();
    ctx.arc(260+offsetW,235,6,0,2*Math.PI);
    ctx.font = "10px theCircle";
    ctx.fillText("4",245+offsetW,225);
    ctx.fill();

    ctx.beginPath();
     ctx.arc(275+offsetW,270,6,0,2*Math.PI);
     ctx.font = "10px theCircle";
     ctx.fillText("7",265+offsetW,260);
     ctx.fill();

    ctx.beginPath();
     ctx.arc(285+offsetW,325,6,0,2*Math.PI);
     ctx.font = "10px theCircle";
     ctx.fillText("5",275+offsetW,315);
     ctx.fill();

     ctx.beginPath();
      ctx.arc(305+offsetW,255,6,0,2*Math.PI);
      ctx.font = "10px theCircle";
      ctx.fillText("8",295+offsetW,245);
      ctx.fill();

      ctx.beginPath();
       ctx.arc(315+offsetW,195,6,0,2*Math.PI);
       ctx.font = "10px theCircle";
       ctx.fillText("9",305+offsetW,185);
       ctx.fill();

       ctx.beginPath();
        ctx.arc(335+offsetW,270,6,0,2*Math.PI);
        ctx.font = "10px theCircle";
        ctx.fillText("10",325+offsetW,260);
        ctx.fill();


        ctx.beginPath();
        ctx.arc(345+offsetW,205,6,0,2*Math.PI);
        ctx.font = "10px theCircle";
        ctx.fillText("11",335+offsetW,195);
        ctx.fill();

        ctx.beginPath();
         ctx.arc(365+offsetW,235,6,0,2*Math.PI);
         ctx.font = "10px theCircle";
         ctx.fillText("12",355+offsetW,225);
         ctx.fill();

         ctx.beginPath();
          ctx.arc(395+offsetW,205,6,0,2*Math.PI);
          ctx.font = "10px theCircle";
          ctx.fillText("13",385+offsetW,195);
          ctx.fill();

          ctx.beginPath();
           ctx.arc(425+offsetW,255,6,0,2*Math.PI);
           ctx.font = "10px theCircle";
           ctx.fillText("14",415+offsetW,245);
           ctx.fill();

           var aboutButton = document.getElementById("head1");
           aboutButton.style.left = (255+offsetW)+"px";

           var exButton = document.getElementById("mainex");
           exButton.style.left = (380+offsetW)+"px";

           var evButton = document.getElementById("evbutton");
           evButton.style.left = (460+offsetW)+"px";

           var callButton = document.getElementById("callbutton");
           callButton.style.left = (370+offsetW)+"px";

           var subButton = document.getElementById("subbutton");
           subButton.style.left = (255+offsetW)+"px";

           var archButton = document.getElementById("arch");
           archButton.style.left = (70+offsetW)+"px";

           var callingButton = document.getElementById("callingbutt");
           callingButton.style.left = (65+offsetW)+"px";

           var conButton = document.getElementById("conbutton");
           conButton.style.left = (20+offsetW)+"px";

           var mapButton = document.getElementById("mapbutton");
           mapButton.style.left = (270+offsetW)+"px";

           var calenButton = document.getElementById("calenbutton");
           calenButton.style.left = (295+offsetW)+"px";

  // Mouse Event Handlers
  if (myDrawingCanvas ) {
    var isDown = false;
    var canvasX, canvasY;
    ctxD.lineWidth = 2;

    $(myDrawingCanvas )
      .mousedown(function(e) {
        isDown = true;
        ctxD.beginPath();

        // example use
	      var div = document.getElementById('myDrawingCanvas');
	      var divOffset = offset(div);
	      //canvasX = e.pageX;
      //  canvasY = e.pageY;

        canvasX = e.pageX+divOffset.left;
        canvasY = e.pageY - divOffset.top;
        ctxD.moveTo(canvasX, canvasY);
      })
      .mousemove(function(e) {
        if (isDown !== false) {


          var div = document.getElementById('myDrawingCanvas');
 	        var divOffset = offset(div);
        //  console.log(divOffset);
         canvasX = e.pageX+divOffset.left;
         canvasY = e.pageY - divOffset.top;

        ///  canvasX = e.pageX;
        ///  canvasY = e.pageY;
          ctxD.lineTo(canvasX, canvasY);
          ctxD.strokeStyle = "rgb( 178, 215, 75)";
          ctxD.stroke();
        }
      })
      .mouseup(function(e) {
        isDown = false;
        ctxD.closePath();
      });
  }

  // Touch Events Handlers
  draw = {
    started: false,
    start: function(evt) {
      ctxD.beginPath();
      ctxD.moveTo(evt.touches[0].pageX, evt.touches[0].pageY);

      this.started = true;
    },
    move: function(evt) {
      if (this.started) {
        ctxD.lineTo(evt.touches[0].pageX, evt.touches[0].pageY);

        ctxD.strokeStyle = "#000";
        ctxD.lineWidth = 10;
        ctxD.stroke();
      }
    },
    end: function(evt) {
      this.started = false;
    }
  };

  // Touch Events
  myDrawingCanvas.addEventListener("touchstart", draw.start, false);
  myDrawingCanvas.addEventListener("touchend", draw.end, false);
  myDrawingCanvas.addEventListener("touchmove", draw.move, false);

  // Disable Page Move
  document.body.addEventListener(
    "touchmove",
    function(evt) {
      evt.preventDefault();
    },
    false
  );

  function offset(el) {
	    var rect = el.getBoundingClientRect(),
	    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
	    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
	    return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
	}
};
