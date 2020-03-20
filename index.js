$('#toggle').click(function() {
    console.log('clicked')
    $(this).toggleClass('active');
    $('#overlay').toggleClass('open');
   });


   console.log('clicked')



//    let seconds = 5000;

//    function change (){
//     $("html, body").css('background-color','#a2c4e5');
//    setTimeout(change1, seconds)
//   }
  
//   function change1 (){
//     $("html").css('background-color','#3c3c3c');
//    setTimeout(change2, seconds)
//   }
    
//   function change2 (){
//     $("html").css('background-color','#4a2f15');
//     setTimeout(change3, seconds)
//    }
    
//   function change3 (){
//     $("html").css('background-color','#1c375b');
//    setTimeout(change, seconds)
//   }
  
//   change();