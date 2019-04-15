
$(document).ready(function(){
 var ex2Show =false;
 var ex1Show =false;
 var ex3Show =false;
 var ex4Show =false;
 var ex5Show =false;
 var ex6Show =false;
 var ex7Show =false;
 var ex8Show =false;
 var ex9Show =false;
 var ex10Show =false;
 var ex13Show =false;
 var ex14Show =false;
 var ex15Show =false;
  var ex19Show =false;
  // exhibits boxes code //
  $( function() {
     $( "#ex1" ).draggable();
   } );

   $( function() {
      $( ".pics" ).draggable();
    } );
   $("#e1").mouseenter(function(){

        $(".ex1pic").show();
    });

    $("#e1").mouseleave(function(){
            $(".ex1pic").hide();

    $(".ex1pic").mouseenter(function(){
          ex1Show =true;
          $(".ex1pic").show();
        });

    });


    $(".ex1pic").mouseleave(function(){

      if( ex1Show ==true)
      {
        $(".ex1pic").hide();
           ex1Show =false;
      }

    });

    $("#e1").mouseenter(function(){
        ex1Show =true;
         $(".ex1pic").show();
     });


    $("#e1").mouseleave(function(){
            $(".ex1pic").hide();
            if( ex1Show ==true)
            {
              $(".ex1pic").hide();
                 ex1Show =false;
            }

    });

    $(".ex1pic").hide();

    //firsth exhibition box
    $("#ex1").hide();
    $("#ex1b").click(function(){

        $("#ex1").hide();
        var returnValue = checkCloseBoxes();
        if(returnValue ==true)
        {
          $("#closeall").hide();
        }

    });
//ex2
    $( "#ex2" ).draggable();

    $("#e2").mouseenter(function(){
      var e1= document.getElementById("e2");
      var divOffset = offset(e1);
      var p1 = document.getElementsByClassName("ex2pic pic1");
      p1[0].style.top = divOffset.top+"px";
      var p2 = document.getElementsByClassName("ex2pic pic2");
      p2[0].style.top = (divOffset.top +100)+"px";
         $(".ex2pic").show();
     });

     $("#e2").mouseleave(function(){
      //  console.log("test leave");
          $(".ex2pic").hide();


      $(".ex2pic").mouseenter(function(){
             ex2Show =true;
             $(".ex2pic").show();

           });
     });

     $(".ex2pic").mouseleave(function(){

       if( ex2Show ==true)
       {
         $(".ex2pic").hide();
            ex2Show =false;
       }

     });

   $(".ex2pic").hide();

     $("#ex2").hide();
     $("#ex2b").click(function(){
         $("#ex2").hide();
         var returnValue = checkCloseBoxes();
         if(returnValue ==true)
         {
           $("#closeall").hide();
         }

     });


//ex3

$( "#ex3" ).draggable();

$("#e3").mouseenter(function(){

  var e1= document.getElementById("e3");
  var divOffset = offset(e1);
  var p1 = document.getElementsByClassName("ex3pic pic3");
  p1[0].style.top = divOffset.top+"px";
  var p2 = document.getElementsByClassName("ex3pic bottompic");
  p2[0].style.top = (divOffset.top +100)+"px";
     $(".ex3pic").show();
 });

 $("#e3").mouseleave(function(){
         $(".ex3pic").hide();


         $(".ex3pic").mouseenter(function(){
                    ex3Show =true;
                    $(".ex3pic").show();
          });

 });



    $(".ex3pic").mouseleave(function(){

      if( ex3Show ==true)
      {
        $(".ex3pic").hide();
           ex3Show =false;
      }

    });


$(".ex3pic").hide();






 $("#ex3").hide();
 $("#ex3b").click(function(){
     $("#ex3").hide();
     var returnValue = checkCloseBoxes();
     if(returnValue ==true)
     {
       $("#closeall").hide();
     }

 });


//french e3
$( "#ex13" ).draggable();

$("#e13").mouseenter(function(){


  var e1= document.getElementById("e13");
  var divOffset = offset(e1);
  var p1 = document.getElementsByClassName("ex3pic pic3");
  p1[0].style.top = divOffset.top+"px";
  var p2 = document.getElementsByClassName("ex3pic bottompic");
  p2[0].style.top = (divOffset.top +100)+"px";
     $(".ex3pic").show();
 });

 $("#e13").mouseleave(function(){
         $(".ex3pic").hide();


         $(".ex3pic").mouseenter(function(){
                    ex13Show =true;
                    $(".ex3pic").show();
          });

 });



    $(".ex3pic").mouseleave(function(){

      if( ex13Show ==true)
      {
        $(".ex3pic").hide();
           ex13Show =false;
      }

    });

 $(".ex3pic").hide();

 $("#ex13").hide();
 $("#ex13b").click(function(){
     $("#ex13").hide();
     var returnValue = checkCloseBoxes();
     if(returnValue ==true)
     {
       $("#closeall").hide();
     }

 });

//ex4
$( "#ex4" ).draggable();

$("#e4").mouseenter(function(){
  var e1= document.getElementById("e4");
  var divOffset = offset(e1);
  var p1 = document.getElementsByClassName("ex4pic pic1");
  p1[0].style.top = divOffset.top+"px";
  var p2 = document.getElementsByClassName("ex4pic pic2");
  p2[0].style.top = (divOffset.top +100)+"px";
     $(".ex4pic").show();
 });

 $("#e4").mouseleave(function(){
         $(".ex4pic").hide();


         $(".ex4pic").mouseenter(function(){
                    ex4Show =true;
                    $(".ex4pic").show();
          });

 });



    $(".ex4pic").mouseleave(function(){

      if( ex4Show ==true)
      {
        $(".ex4pic").hide();
           ex4Show =false;
      }

    });



 $(".ex4pic").hide();

 $("#ex4").hide();
 $("#ex4b").click(function(){
     $("#ex4").hide();
     var returnValue = checkCloseBoxes();
     if(returnValue ==true)
     {
       $("#closeall").hide();
     }

 });


//ex14

$( "#ex14" ).draggable();

$("#e14").mouseenter(function(){
  var e1= document.getElementById("e14");
  var divOffset = offset(e1);
  var p1 = document.getElementsByClassName("ex4pic pic1");
  p1[0].style.top = divOffset.top+"px";
  var p2 = document.getElementsByClassName("ex4pic pic2");
  p2[0].style.top = (divOffset.top +100)+"px";
     $(".ex4pic").show();
 });

 $("#e14").mouseleave(function(){
         $(".ex4pic").hide();


         $(".ex4pic").mouseenter(function(){
                    ex4Show =true;
                    $(".ex4pic").show();
          });

 });



    $(".ex4pic").mouseleave(function(){

      if( ex14Show ==true)
      {
        $(".ex4pic").hide();
           ex14Show =false;
      }

    });

 $(".ex4pic").hide();

 $("#ex14").hide();
 $("#ex14b").click(function(){
     $("#ex14").hide();
     var returnValue = checkCloseBoxes();
     if(returnValue ==true)
     {
       $("#closeall").hide();
     }

 });
//e5

$( "#ex5" ).draggable();

$("#e5").mouseenter(function(){
  var e1= document.getElementById("e5");
  var divOffset = offset(e1);
  var p1 = document.getElementsByClassName("ex5pic pic2");
  p1[0].style.top = divOffset.top+"px";
  var p2 = document.getElementsByClassName("ex5pic bottompic");
  p2[0].style.top = (divOffset.top +100)+"px";

     $(".ex5pic").show();
 });

 $("#e5").mouseleave(function(){
         $(".ex5pic").hide();


         $(".ex5pic").mouseenter(function(){
                    ex5Show =true;
                    $(".ex5pic").show();
          });

 });



    $(".ex5pic").mouseleave(function(){

      if( ex5Show ==true)
      {
        $(".ex5pic").hide();
           ex5Show =false;
      }

    });

 $(".ex5pic").hide();

 $("#ex5").hide();
 $("#ex5b").click(function(){
     $("#ex5").hide();
     var returnValue = checkCloseBoxes();
     if(returnValue ==true)
     {
       $("#closeall").hide();
     }

 });

 //e15

 $( "#ex15" ).draggable();

 $("#e15").mouseenter(function(){
   var e1= document.getElementById("e15");
   var divOffset = offset(e1);
   var p1 = document.getElementsByClassName("ex5pic pic2");
   p1[0].style.top = divOffset.top+"px";
   var p2 = document.getElementsByClassName("ex5pic bottompic");
   p2[0].style.top = (divOffset.top +100)+"px";
      $(".ex5pic").show();
  });

  $("#e15").mouseleave(function(){
          $(".ex5pic").hide();
  });

  $(".ex5pic").hide();

  $("#ex15").hide();
  $("#ex15b").click(function(){
      $("#ex15").hide();
      var returnValue = checkCloseBoxes();
      if(returnValue ==true)
      {
        $("#closeall").hide();
      }

  });

//e6


$( "#ex6" ).draggable();

$("#e6").mouseenter(function(){
  var e1= document.getElementById("e6");
  var divOffset = offset(e1);
  var p1 = document.getElementsByClassName("ex6pic pic1");
  p1[0].style.top = divOffset.top+"px";
  var p2 = document.getElementsByClassName("ex6pic pic2");
  p2[0].style.top = (divOffset.top +100)+"px";
     $(".ex6pic").show();
 });

 $("#e6").mouseleave(function(){
         $(".ex6pic").hide();


         $(".ex6pic").mouseenter(function(){
                    ex6Show =true;
                    $(".ex6pic").show();
          });

 });



    $(".ex6pic").mouseleave(function(){

      if( ex6Show ==true)
      {
        $(".ex6pic").hide();
           ex6Show =false;
      }

    });
 $(".ex6pic").hide();

 $("#ex6").hide();
 $("#ex6b").click(function(){
     $("#ex6").hide();
     var returnValue = checkCloseBoxes();
     if(returnValue ==true)
     {
       $("#closeall").hide();
     }
 });

//e7


$( "#ex7" ).draggable();

$("#e7").mouseenter(function(){
  var e1= document.getElementById("e7");
  var divOffset = offset(e1);
  var p1 = document.getElementsByClassName("ex7pic pic2");
  p1[0].style.top = divOffset.top+"px";
  var p2 = document.getElementsByClassName("ex7pic bottompic");
  p2[0].style.top = (divOffset.top +100)+"px";
     $(".ex7pic").show();
 });

 $("#e7").mouseleave(function(){
         $(".ex7pic").hide();


         $(".ex7pic").mouseenter(function(){
                    ex7Show =true;
                    $(".ex7pic").show();
          });

 });



    $(".ex7pic").mouseleave(function(){

      if( ex7Show ==true)
      {
        $(".ex7pic").hide();
           ex7Show =false;
      }

    });
 $(".ex7pic").hide();

 $("#ex7").hide();
 $("#ex7b").click(function(){
     $("#ex7").hide();
     var returnValue = checkCloseBoxes();
     if(returnValue ==true)
     {
       $("#closeall").hide();
     }
 });

//ex8

$( "#ex8" ).draggable();

$("#e8").mouseenter(function(){
  var e1= document.getElementById("e8");
  var divOffset = offset(e1);
  var p1 = document.getElementsByClassName("ex8pic pic3");
  p1[0].style.top = divOffset.top+"px";

     $(".ex8pic").show();
 });

 $("#e8").mouseleave(function(){
         $(".ex8pic").hide();


         $(".ex8pic").mouseenter(function(){
                    ex8Show =true;
                    $(".ex8pic").show();
          });

 });



    $(".ex8pic").mouseleave(function(){

      if( ex8Show ==true)
      {
        $(".ex8pic").hide();
           ex8Show =false;
      }

    });

 $(".ex8pic").hide();

 $("#ex8").hide();
 $("#ex8b").click(function(){
     $("#ex8").hide();
     var returnValue = checkCloseBoxes();
     if(returnValue ==true)
     {
       $("#closeall").hide();
     }
 });

//ex9

$( "#ex9" ).draggable();

$("#e9").mouseenter(function(){
  var e1= document.getElementById("e9");
  var divOffset = offset(e1);
  var p1 = document.getElementsByClassName("ex9pic pic1");
  p1[0].style.top = divOffset.top+"px";
  var p2 = document.getElementsByClassName("ex9pic rightpic");
  p2[0].style.top = (divOffset.top +100)+"px";
     $(".ex9pic").show();
 });

 $("#e9").mouseleave(function(){
         $(".ex9pic").hide();


         $(".ex9pic").mouseenter(function(){
                    ex9Show =true;
                    $(".ex9pic").show();
          });

 });



    $(".ex9pic").mouseleave(function(){

      if( ex9Show ==true)
      {
        $(".ex9pic").hide();
           ex9Show =false;
      }

    });

 $(".ex9pic").hide();

 $("#ex9").hide();
 $("#ex9b").click(function(){
     $("#ex9").hide();
     var returnValue = checkCloseBoxes();
     if(returnValue ==true)
     {
       $("#closeall").hide();
     }
 });

//ex19
$( "#ex19" ).draggable();

$("#e19").mouseenter(function(){
  var e1= document.getElementById("e19");
  var divOffset = offset(e1);
  var p1 = document.getElementsByClassName("ex9pic pic1");
  p1[0].style.top = divOffset.top+"px";
  var p2 = document.getElementsByClassName("ex9pic rightpic");
  p2[0].style.top = (divOffset.top +100)+"px";
     $(".ex9pic").show();
 });

 $("#e19").mouseleave(function(){
         $(".ex9pic").hide();


         $(".ex9pic").mouseenter(function(){
                    ex19Show =true;
                    $(".ex19pic").show();
          });

 });



    $(".ex9pic").mouseleave(function(){

      if( ex19Show ==true)
      {
        $(".ex9pic").hide();
           ex19Show =false;
      }

    });

 $(".ex9pic").hide();

 $("#ex19").hide();
 $("#ex19b").click(function(){
     $("#ex19").hide();
     var returnValue = checkCloseBoxes();
     if(returnValue ==true)
     {
       $("#closeall").hide();
     }
 });

//10


$( "#ex10" ).draggable();

$("#e10").mouseenter(function(){
  var e1= document.getElementById("e10");
  var divOffset = offset(e1);
  var p1 = document.getElementsByClassName("ex10pic pic1");
  p1[0].style.top = divOffset.top+"px";
  var p2 = document.getElementsByClassName("ex10pic pic2");
  p2[0].style.top = (divOffset.top +100)+"px";
     $(".ex10pic").show();
 });

 $("#e10").mouseleave(function(){
         $(".ex10pic").hide();


         $(".ex10pic").mouseenter(function(){
                    ex10Show =true;
                    $(".ex10pic").show();
          });

 });



    $(".ex10pic").mouseleave(function(){

      if( ex10Show ==true)
      {
        $(".ex10pic").hide();
           ex10Show =false;
      }

    });



 $(".ex10pic").hide();

 $("#ex10").hide();
 $("#ex10b").click(function(){
     $("#ex10").hide();
     var returnValue = checkCloseBoxes();
     if(returnValue ==true)
     {
       $("#closeall").hide();
     }
 });

//11
 //french tender TEETH
 $( function() {
 $("#ex11").draggable();
 });


$("#ex11").hide();
$("#ex11b").click(function(){
   $("#ex11").hide();
   var returnValue = checkCloseBoxes();
   if(returnValue ==true)
   {
     $("#closeall").hide();
   }
});
//CALENDAR
$("#cal").draggable();

//exhibtion
$( function() {
   $( "#exhibit" ).draggable();
 } );
$("#exhibit").hide();

$("#mainex").click(function(){
    // $("#exhibit").show();
      $("#closeall").show();
//the exhibition boxes
$("#ex1").show();
$("#ex2").show();
$("#ex3").show();
$("#ex4").show();
$("#ex5").show();
$("#ex6").show();
$("#ex7").show();
$("#ex8").show();
$("#ex9").show();
$("#ex10").show();

$("#ex13").show();
$("#ex14").show();
$("#ex15").show();
$("#ex19").show();
$(".outerEx").show();
    });

    $("#exhib").click(function(){
        $("#exhibit").hide();


    });

//map and CALENDAR
$("#cal").hide();
$("#cal").draggable();
$("#calenbutton").click(function(){
    $("#cal").show();
    $("#closeall").show();

    });
    $("#calb").click(function(){
        $("#cal").hide();
        var returnValue = checkCloseBoxes();
        if(returnValue ==true)
        {
          $("#closeall").hide();
        }
    });


  //  $("#ex11").hide();
    $("#mapbutton").click(function(){

        $("#ex11").show();
        $("#closeall").show();
        console.log("click");

        });


  //about boxes code//
  $( function() {
     $( "#about" ).draggable();
   } );
   $( function() {
      $( "#about2" ).draggable();
    } );

    $( function() {
       $( "#about3" ).draggable();
     } );

     $( function() {
        $( "#about11" ).draggable();
      } );

      $( function() {
         $( "#info" ).draggable();
       } );

    //  $("#closing").click(function(){
    //      $("#about").hide();
    //      $("#about2").hide();
    //      $("#about3").hide();
     //
    //      });

$("#about").hide();
$("#about2").hide();
$("#about3").hide();
$("#closingabout").hide();
$("#about11").hide();
  $("#about13").hide();
  $("#info").hide();

$("#head1").click(function(){
    $("#closeall").show();
    $("#about").show();
    $("#about2").show();
    $("#about3").show();
    $("#about11").show();
    $("#about13").show();
    $("#closingabout").show();
    });

    $("#infoup").click(function(){
        $("#info").show();

    });

    $("#info1").click(function(){
        $("#info").hide();
        var returnValue = checkCloseBoxes();
        if(returnValue ==true)
        {
          $("#closeall").hide();
        }
    });

$("#aboutdis").click(function(){
    $("#about").hide();
    var returnValue = checkCloseBoxes();
    if(returnValue ==true)
    {
      $("#closeall").hide();
    }
});
$("#aboutdis").click(function(){
    $("#about11").hide();
    var returnValue = checkCloseBoxes();
    if(returnValue ==true)
    {
      $("#closeall").hide();
    }
});


$("#aboutdis2").click(function(){
    $("#about2").hide();
    var returnValue = checkCloseBoxes();
    if(returnValue ==true)
    {
      $("#closeall").hide();
    }
});

$("#aboutdis3").click(function(){
    $("#about3").hide();
    var returnValue = checkCloseBoxes();
    if(returnValue ==true)
    {
      $("#closeall").hide();
    }
});

$("#aboutdis3").click(function(){
    $("#about13").hide();
    var returnValue = checkCloseBoxes();
    if(returnValue ==true)
    {
      $("#closeall").hide();
    }
});

$("#closeabout").click(function(){
    $("#about3").hide();
    $("#about").hide();
    $("#about2").hide();

});



//contact

$( function() {
   $( "#contact" ).draggable();
 } );

 $( function() {
    $( "#contact11" ).draggable();
  } );

  $( function() {
     $( "#suggest" ).draggable();
   } );

   $( function() {
      $( "#subscribed" ).draggable();
    } );

$("#contact").hide();
$("#suggest").hide();

$("#contact11").hide();
$("#subscribed").hide();

$("#conbutton").click(function(){
    $("#contact").show();
      $("#contact11").show();
      $("#closeall").show();
      $("#suggest").show();

    });
    $("#opensub").click(function(){
        $("#subscribed").show();

        });

    $("#con1").click(function(){
        $("#contact").hide();
        $("#contact11").hide();
        var returnValue = checkCloseBoxes();
        if(returnValue ==true)
        {
          $("#closeall").hide();
        }
    });
    $("#sug1").click(function(){
        $("#suggest").hide();
        var returnValue = checkCloseBoxes();
        if(returnValue ==true)
        {
          $("#closeall").hide();
        }

    });

    $("#subscribebutt").click(function(){
        $("#subscribed").hide();
        var returnValue = checkCloseBoxes();
        if(returnValue ==true)
        {
          $("#closeall").hide();
        }

    });

//events

$( function() {
   $( "#events" ).draggable();
 } );

 $("#events").hide();


 $("#evbutton").click(function(){
     $("#events").show();
       $("#closeall").show();

     });

     $("#ev1").click(function(){

         $("#events").hide();
         var returnValue = checkCloseBoxes();
         if(returnValue ==true)
         {
           $("#closeall").hide();
         }

     });
// call OUTS
$( function() {
   $( "#callingdiv" ).draggable();
 } );


 $("#callingdiv").hide();


  $("#callingbutt").click(function(){
      $("#callingdiv").show();
        $("#closeall").show();

      });

      $("#calling1").click(function(){
          $("#callingdiv").hide();
          var returnValue = checkCloseBoxes();
          if(returnValue ==true)
          {
            $("#closeall").hide();
          }
      });

//submit

$( function() {
   $( "#submit" ).draggable();
 } );
 //
 $("#submit").hide();
 $("#submit22").hide();

 $("#toggle").click(function(){
     $("#submit11").hide();
     $("#submit22").show();

 });

 $("#subbutton").click(function(){
    $("#submit").show();
  //  console.log(  $($("#submit")));
    //   $("#callingdiv").show();
    // console.log("clicked");

     // new
     //var test = document.getElementById("submit1");
     //if(test!=null)
     //{
    // test.innerHTML = " <h1 id='gh9'>SUBMIT</h1>";
     //test.innerHTML += "<iframe frameborder='0' style='height:500px;width:720px;border:none;' src='https://forms.zohopublic.com/submissions/form/CuratorApplication/formperma/31F0gGFf6a51mJ9019jEJF5m1'></iframe>";
    //  }

      /*else {
        var test2 = document.getElementById("submitf");
     test2.innerHTML = " <h1 id='gh9'>APPLIQUER</h1>";
     test2.innerHTML += "<iframe frameborder='0' style='height:500px;width:720px;border:none;' src='https://forms.zohopublic.com/submissions/form/CuratorApplication/formperma/31F0gGFf6a51mJ9019jEJF5m1'></iframe>";
}*/


      $("#closeall").show();

     });

     $("#sub1").click(function(){

         $("#submit").hide();
         var returnValue = checkCloseBoxes();
         if(returnValue ==true)
         {
           $("#closeall").hide();
         }
     });




//call-outs

$( function() {
   $( "#call1" ).draggable();
 } );

 $( function() {
    $( "#call11" ).draggable();
  } );

 $( function() {
    $( "#call2" ).draggable();
  } );

  $( function() {
     $( "#call3" ).draggable();
   } );

   $( function() {
      $( "#call4" ).draggable();
    } );
    $( function() {
       $( "#call14" ).draggable();
     } );

     $( function() {
        $( "#gov" ).draggable();
      } );


 $("#call1").hide();
  $("#call2").hide();
   $("#call3").hide();
    $("#call4").hide();
      $("#call14").hide()
  $("#call11").hide();
  $("#gov").hide();

 $("#callbutton").click(function(){
   $("#call1").show();
      $("#call11").show();
    $("#call2").show();
     $("#call3").show();
      $("#call4").show();
        $("#call14").show();
        $("#gov").show();
        $("#closeall").show();


     });

     $("#callit1").click(function(){
         $("#call1").hide();
           $("#call11").hide();
           var returnValue = checkCloseBoxes();
           if(returnValue ==true)
           {
             $("#closeall").hide();
           }
     });
     $("#callit2").click(function(){
         $("#call2").hide();
         var returnValue = checkCloseBoxes();
         if(returnValue ==true)
         {
           $("#closeall").hide();
         }
     });
     $("#callit3").click(function(){
         $("#call3").hide();
         var returnValue = checkCloseBoxes();
         if(returnValue ==true)
         {
           $("#closeall").hide();
         }
     });
     $("#callit4").click(function(){
         $("#call4").hide();
         $("#call14").hide();
         var returnValue = checkCloseBoxes();
         if(returnValue ==true)
         {
           $("#closeall").hide();
         }
     });

     $("#govb").click(function(){
         $("#gov").hide();
         var returnValue = checkCloseBoxes();
         if(returnValue ==true)
         {
           $("#closeall").hide();
         }

     });


     $("#closeall").click(function(){

         $("#about").hide();
         $("#about2").hide();
         $("#about3").hide();
          $("#closeall").hide();
            $("#exhibit").hide();
          $("#contact").hide();
           $("#events").hide();
             $("#callingdiv").hide();
              $("#submit").hide();
                 $("#call1").hide();
                      $("#call2").hide();
                      $("#call3").hide();
                       $("#call4").hide();
                       $("#gov").hide();

          $("#about11").hide();
            $("#about13").hide();
            $("#contact11").hide();
            $("#suggest").hide();

            $("#call14").hide();
            $("#call11").hide();
                $("#info").hide();
                    $("#subscribed").hide();
                    $("#cal").hide();
          //EXHIBITIONS
            $("#ex1").hide();
              $("#ex2").hide();
              $("#ex3").hide();
              $("#ex4").hide();
              $("#ex5").hide();
  $("#ex6").hide();
    $("#ex7").hide();
      $("#ex8").hide();
        $("#ex9").hide();
          $("#ex10").hide();
          $("#ex11").hide();
          $("#ex13").hide();
          $("#ex14").hide();
          $("#ex15").hide();
          $("#ex19").hide();
          $(".outerEx").hide();
         });

function checkCloseBoxes()
{
  console.log("test");
  var boxesIn  = $(".boxes")

    for(var i=0; i< boxesIn.length; i++)
    {
      //console.log(boxesIn[i]);
      if(boxesIn[i].style.display!="none")
      {
        return false;
      }

    }
    return true;

}


function offset(el) {
	    var rect = el.getBoundingClientRect(),
	    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
	    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
	    return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
	}

});
