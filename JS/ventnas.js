var btnAbrirPopup = document.getElementById('btn-abrir-popup'),
	overlay = document.getElementById('overlay'),
	popup = document.getElementById('popup'),
	btnCerrarPopup = document.getElementById('btn-cerrar-popup');

btnAbrirPopup.addEventListener('click', function(){
	overlay.classList.add('active');
	popup.classList.add('active');
});

btnCerrarPopup.addEventListener('click', function(e){
	e.preventDefault();
	overlay.classList.remove('active');
	popup.classList.remove('active');
});
var btnAbrirPopup1 = document.getElementById('btn-abrir-popup1'),
	overlay1 = document.getElementById('overlay1'),
	popup1 = document.getElementById('popup1'),
	btnCerrarPopup1 = document.getElementById('btn-cerrar-popup1');

btnAbrirPopup1.addEventListener('click', function(){
	overlay1.classList.add('active');
	popup1.classList.add('active');
});

btnCerrarPopup1.addEventListener('click', function(e){
	e.preventDefault();
	overlay1.classList.remove('active');
	popup1.classList.remove('active');
});
var btnAbrirPopup2 = document.getElementById('btn-abrir-popup2'),
	overlay2 = document.getElementById('overlay2'),
	popup2 = document.getElementById('popup2'),
	btnCerrarPopup2 = document.getElementById('btn-cerrar-popup2');

btnAbrirPopup2.addEventListener('click', function(){
	overlay2.classList.add('active');
	popup2.classList.add('active');
});

btnCerrarPopup2.addEventListener('click', function(e){
	e.preventDefault();
	overlay2.classList.remove('active');
	popup2.classList.remove('active');
});
var btnAbrirPopup3 = document.getElementById('btn-abrir-popup3'),
	overlay3 = document.getElementById('overlay3'),
	popup3 = document.getElementById('popup3'),
	btnCerrarPopup3 = document.getElementById('btn-cerrar-popup3');

btnAbrirPopup3.addEventListener('click', function(){
	overlay3.classList.add('active');
	popup3.classList.add('active');
});

btnCerrarPopup3.addEventListener('click', function(e){
	e.preventDefault();
	overlay3.classList.remove('active');
	popup3.classList.remove('active');
});
var btnAbrirPopup4 = document.getElementById('btn-abrir-popup4'),
	overlay4 = document.getElementById('overlay4'),
	popups4 = document.getElementById('popup4'),
	btnCerrarPopup4 = document.getElementById('btn-cerrar-popup4');

btnAbrirPopup4.addEventListener('click', function(){
	overlay4.classList.add('active');
	popup4.classList.add('active');
});

btnCerrarPopup4.addEventListener('click', function(e){
	e.preventDefault();
	overlay4.classList.remove('active');
	popup4.classList.remove('active');
});

var btnAbrirPopup5 = document.getElementById('btn-abrir-popup5'),
	overlay5 = document.getElementById('overlay5'),
	popup5 = document.getElementById('popup5'),
	btnCerrarPopup5 = document.getElementById('btn-cerrar-popup5');

btnAbrirPopup5.addEventListener('click', function(){
	overlay5.classList.add('active');
	popup5.classList.add('active');
});

btnCerrarPopup5.addEventListener('click', function(e){
	e.preventDefault();
	overlay5.classList.remove('active');
	popup5.classList.remove('active');
});
  
  var btnAbrirPopup6 = document.getElementById('btn-abrir-popup6'),
	overlay6 = document.getElementById('overlay6'),
	popup6 = document.getElementById('popup6'),
	btnCerrarPopup6 = document.getElementById('btn-cerrar-popup6');

btnAbrirPopup6.addEventListener('click', function(){
	overlay6.classList.add('active');
	popup6.classList.add('active');
});

btnCerrarPopup6.addEventListener('click', function(e){
	e.preventDefault();
	overlay6.classList.remove('active');
	popup6.classList.remove('active');
});

var btnAbrirPopup7 = document.getElementById('btn-abrir-popup7'),
	overlay7 = document.getElementById('overlay7'),
	popup7 = document.getElementById('popup7'),
	btnCerrarPopup7 = document.getElementById('btn-cerrar-popup7');

btnAbrirPopup7.addEventListener('click', function(){
	overlay7.classList.add('active');
	popup7.classList.add('active');
});

btnCerrarPopup7.addEventListener('click', function(e){
	e.preventDefault();
	overlay7.classList.remove('active');
	popup7.classList.remove('active');
});

var btnAbrirPopup8 = document.getElementById('btn-abrir-popup8'),
	overlay8 = document.getElementById('overlay8'),
	popup8 = document.getElementById('popup8'),
	btnCerrarPopup8 = document.getElementById('btn-cerrar-popup8');

btnAbrirPopup8.addEventListener('click', function(){
	overlay8.classList.add('active');
	popup8.classList.add('active');
});

btnCerrarPopup8.addEventListener('click', function(e){
	e.preventDefault();
	overlay8.classList.remove('active');
	popup8.classList.remove('active');
});

  var btnAbrirPopup9 = document.getElementById('btn-abrir-popup9'),
	overlay9 = document.getElementById('overlay9'),
	popup9 = document.getElementById('popup9'),
	btnCerrarPopup9 = document.getElementById('btn-cerrar-popup9');

btnAbrirPopup9.addEventListener('click', function(){
	overlay9.classList.add('active');
	popup9.classList.add('active');
});

btnCerrarPopup9.addEventListener('click', function(e){
	e.preventDefault();
	overlay9.classList.remove('active');
	popup9.classList.remove('active');
});

var btnAbrirPopup10 = document.getElementById('btn-abrir-popup10'),
	overlay10 = document.getElementById('overlay10'),
	popup10 = document.getElementById('popup10'),
	btnCerrarPopup10 = document.getElementById('btn-cerrar-popup10');

btnAbrirPopup10.addEventListener('click', function(){
	overlay10.classList.add('active');
	popup10.classList.add('active');
});

btnCerrarPopup10.addEventListener('click', function(e){
	e.preventDefault();
	overlay10.classList.remove('active');
	popup10.classList.remove('active');
});

var btnAbrirPopup11 = document.getElementById('btn-abrir-popup11'),
	overlay11 = document.getElementById('overlay11'),
	popup11 = document.getElementById('popup11'),
	btnCerrarPopup11 = document.getElementById('btn-cerrar-popup11');

btnAbrirPopup11.addEventListener('click', function(){
	overlay11.classList.add('active');
	popup11.classList.add('active');
});

btnCerrarPopup11.addEventListener('click', function(e){
	e.preventDefault();
	overlay11.classList.remove('active');
	popup11.classList.remove('active');
});
$('#myCarousel').carousel({
  interval: false
});
$('#carousel-thumbs').carousel({
  interval: false
});

// handles the carousel thumbnails
// https://stackoverflow.com/questions/25752187/bootstrap-carousel-with-thumbnails-multiple-carousel
$('[id^=carousel-selector-]').click(function() {
  var id_selector = $(this).attr('id');
  var id = parseInt( id_selector.substr(id_selector.lastIndexOf('-') + 1) );
  $('#myCarousel').carousel(id);
});
// Only display 3 items in nav on mobile.
if ($(window).width() < 575) {
  $('#carousel-thumbs .row div:nth-child(4)').each(function() {
    var rowBoundary = $(this);
    $('<div class="row mx-0">').insertAfter(rowBoundary.parent()).append(rowBoundary.nextAll().addBack());
  });
  $('#carousel-thumbs .carousel-item .row:nth-child(even)').each(function() {
    var boundary = $(this);
    $('<div class="carousel-item">').insertAfter(boundary.parent()).append(boundary.nextAll().addBack());
  });
}
// Hide slide arrows if too few items.
if ($('#carousel-thumbs .carousel-item').length < 2) {
  $('#carousel-thumbs [class^=carousel-control-]').remove();
  $('.machine-carousel-container #carousel-thumbs').css('padding','0 5px');
}
// when the carousel slides, auto update
$('#myCarousel').on('slide.bs.carousel', function(e) {
  var id = parseInt( $(e.relatedTarget).attr('data-slide-number') );
  $('[id^=carousel-selector-]').removeClass('selected');
  $('[id=carousel-selector-'+id+']').addClass('selected');
});
// when user swipes, go next or previous
$('#myCarousel').swipe({
  fallbackToMouseEvents: true,
  swipeLeft: function(e) {
    $('#myCarousel').carousel('next');
  },
  swipeRight: function(e) {
    $('#myCarousel').carousel('prev');
  },
  allowPageScroll: 'vertical',
  preventDefaultEvents: false,
  threshold: 75
});
/*
$(document).on('click', '[data-toggle="lightbox"]', function(event) {
  event.preventDefault();
  $(this).ekkoLightbox();
});
*/

$('#myCarousel .carousel-item img').on('click', function(e) {
  var src = $(e.target).attr('data-remote');
  if (src) $(this).ekkoLightbox();
});
