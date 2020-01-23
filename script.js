$(document).ready(function() {
  
$('.carousel').carousel({
    'indicators': true,
});

$('.tooltipped').tooltip();

$('.modal').modal();

$('.scrollspy').scrollSpy({
    'scrollOffset': 0,
});

$(".projectItem").hover(function(){
    $(this).css("border-color", '#1ac6ff');
    $(this).css("opacity", '0.5');

}, function(){
    $(this).css("border-color", 'black');
    $(this).css("opacity", '1.0');

});

})