//Yeni öğe ekleme ve Css ekleme kısmı
var öğe="";
  var tur=0;
 
  $( function() 
    {  
    

  
    $( "#yazi" ).draggable({
   helper: function() {
  tur=1;
        return $("<h3>hello</h3>");
    }
    
    
    });
  
        $( "#button" ).draggable({
   helper: function() {
     tur=1;
        return $("<button >Primary</button>");
    }
    
    
    });
          $( "#inp_text" ).draggable({
   helper: function() {
     tur=1;
        return $("<input type'text'> ");
    }
    
    
    });
    
        $( "#video" ).draggable({
   helper: function() {
  tur=1;
        return $("<h1>Video Element</h1>");
    }
    
    
    });
    
    
    

      $( "#image" ).draggable({
   helper: function() {
     tur=1;
        return $("<img src='https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png' width='100px'/>");
    }
    
    
    });

    
  
  $( "#alan" ).droppable({

drop:function(event,ui){

var key= ui.helper[0].nodeName;
  var type=ui.helper[0].type;
  console.log(type);
  if(window.tur==1){
      if(key=="H3"){
     tur=0;
    console.log("evet");
   var html = document.createElement("H3");
html.textContent="text";
    html.setAttribute("class","draggeres");
            html.setAttribute("ondblclick","edit(this)");
document.getElementById("alan").appendChild(html);     
              
    
  }
    if(key=="BUTTON"){
       tur=0;
    var html="<button ondblclick='edit(this)'>Button</button>";
document.getElementById("alan").innerHTML+=html;
    
    
  }
   if(key=="IMG"){
      tur=0;

    var html=`

        
    
    <div style=" width: 100px; height:100px;" class="draggeres">
<img   src='https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png' width='100%' height='100%' ondblclick='img_edit(this)'/>
</div>
    
    
    
    `
document.getElementById("alan").innerHTML+=html;

    
    
  }
    
     if(key=="H1"){
      tur=0;
   
    var html=`

        
    <div class='draggeres video' style='border:2px solid black; width:200px; height:200px;' ondblclick='video_edit(this)'>
    <video style="width:90%; height:100%" controls>
    
    <source src="https://storage.googleapis.com/coverr-main/mp4/Mt_Baker.mp4"></source>
    
<!-- <img   src='https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png' width='100%' height='100%' ondblclick='img_edit(this)'/> -->
</video>
</div>
    
    
    `
document.getElementById("alan").innerHTML+=html;

    
    
  }
    
    
  if(key=="INPUT"&&type=="text"){
       tur=0;
    var html="<input type='text'>";
document.getElementById("alan").innerHTML+=html;
    
    
  }
  
    
    
    
    
    
    
    
    
  }   

  
  
  
  
  
  
  
  
  
      $(".draggeres").draggable();

  
  

}
 
    });


    
    
    
    
  $( "#alan" ).click(function(event) {

     if(öğe!==""){
       $(öğe).removeClass("seç");
     
   
 }
 
    
      öğe=event.target;
 if(öğe!=="" && öğe.id!=="alan"){
     $(öğe).addClass("seç");

   
   
 }

    
var kim=öğe.getAttribute("id");

  if(kim!=="alan"){
    document.getElementById("id").value=kim;
    
    
  }
      
      
    
    

  
    
 
    
      
   
});
  

  });
    
//Style öğeleri
        function ekle(tür,değer){
if(öğe!=="" && öğe.id!=="alan"){
   if(tür=="text"){
   öğe.textContent=değer; 

  }
  if(tür=="width"){
   öğe.style.width=değer+"px"; 

  }
   if(tür=="height"){
   öğe.style.height=değer+"px"; 

  }
    if(tür=="color"){
   öğe.style.color=değer; 

  }
      if(tür=="background"){
   öğe.style.background=değer; 

  }
  
  if(tür=="left"){
   öğe.style.paddingLeft=değer+"px"; 

  }
    if(tür=="top"){
   öğe.style.paddingTop=değer+"px"; 

  }
  
    if(tür=="bottom"){
   öğe.style.paddingBottom=değer+"px"; 

  }
    if(tür=="right"){
   öğe.style.paddingRight=değer+"px"; 

  }
  
  if(tür=="size"){
   öğe.style.fontSize=değer+"px"; 

  }
  
    if(tür=="Pleft"){
   
   öğe.style.left=değer+"px"; 

  }
    if(tür=="Ptop"){
   öğe.style.top=değer+"px"; 

  }
  
    if(tür=="Pbottom"){
   öğe.style.bottom=değer+"px"; 

  }
    if(tür=="Pright"){
   öğe.style.right=değer+"px"; 

  }
   if(tür=="id"){

     if(değer!==""){
       öğe.setAttribute("id",değer); 
     
     }
   

  }

  
  
  
  
  
}

  
  
  
}
    

