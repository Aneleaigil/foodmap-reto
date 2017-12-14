
$(document).ready(function(){

 $(function(){
  setTimeout(function() {
    $('#splash').fadeOut(500);
   }, 3000);
  });

$(document).ready(function(){
 $("#input-search").on("keyup", function() {
   var value = $(this).val().toLowerCase();
   $("#list li").filter(function() {
     $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
     $('.table').show();
     $('#pizza').show();
     $('#sushi').show();
     $('#peruana').show();
     $('#chilena').show();
     $
});
 });

