//Çalıştır butonuna tıklanıldığında
function run(a){
  
    var myWindow = window.open("", "_blank");
  var kod=document.getElementById("alan").innerHTML;
  
  myWindow.document.write(kod+"<style>*{position:relative;   box-sizing: border-box; margin:0;}</style>"+"<script>"+a+"</script>");
  
}