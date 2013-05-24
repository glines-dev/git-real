$(document).ready(function() {
  var hidden = $(".hidden-area");
  $('.comments').hide();
  hidden.hide();
  $(".button").on("click", function() {
    $(hidden).slideToggle();
  });
  
  $(".price-change").on('keyup', ".quantity", function() {
  	var price = +$(".price").data('price');
  	var quantity = +$(this).val();
  	$(".total").text(price * quantity);
  });  
  
  $(".show-comments").on('click', ".expand", function(event) {
  	event.preventDefault();
  	$(this).closest(".show-comments")
  				 .find('.comments')
  				 .fadeToggle();
  });
});
