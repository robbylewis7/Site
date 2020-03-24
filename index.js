$('#toggle').click(function() {
    console.log('clicked')
    $(this).toggleClass('active');
    $('#overlay').toggleClass('open');
   });


   let seconds = 7000;

   function change (){
    $("html, body").css('background-color','#7B886F');
   setTimeout(change1, seconds)
  }
  
  function change1 (){
    $("html, body").css('background-color','#575761');    
    setTimeout(change2, seconds)
  }
    
  function change2 (){
    $("html, body").css('background-color','#627C85');    
    setTimeout(change3, seconds)
  }
    
  function change3 (){
    $("html, body").css('background-color','#815355');
    setTimeout(change, seconds)
  }
  
  change();


