//кнопка меню
$('.hp101,.hp102').click(function(){
	$('.hp92').slideToggle();
});
//слайдер с товарами
$('.hp123').slick({
  centerMode: true,
  centerPadding: '5rem',
  slidesToShow: 1,
prevArrow: $('.hp125 .hp126 .fa-chevron-left'),
nextArrow: $('.hp125 .hp126 .fa-chevron-right'),   
  responsive: [
    {
      breakpoint: 640,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '4rem',
        slidesToShow: 1
      }
    }
  ]
});
//слайдер с отзывами
$('.hp129').slick({
  dots:false,
  infinite:true,
  slidesToShow: 4,
prevArrow: $('.hp128 .hp126 .fa-chevron-left'),
nextArrow: $('.hp128 .hp126 .fa-chevron-right'),   
  responsive: [
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 2
      }
    }
  ]
});
//модальное окно
$('.minner').click(function(e){
	e.stopPropagation();
});
$('.m,.mclose').click(function(){
	$('.m').fadeOut();
});
//вызов первого модального окна
$('.hp80,.hp26,.hp6').click(function(){
	$('.modal1').fadeIn();
});
//маска телефона
$(".phone-mask").mask('Z0 (000) 000-00-000', {translation: {'Z': {pattern: /\+/, optional: true}}});
$(".phone-mask").focus(function(){
	if($(this).val()=='')
		$(this).val('+7 (');
});



