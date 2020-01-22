$(document).ready(function() {
  
$('.carousel').carousel({
    'indicators': true,
});

$('.tooltipped').tooltip();

$('.modal').modal();

$("#down1").click(function(){
    $('.scrollspy').scrollSpy();
});
})