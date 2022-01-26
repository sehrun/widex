//кнопка меню
$('.hp100').click(function(){
	$('.hp92').slideToggle();
});
//слайдер с отзывами
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
//вызов второго модального окна
$('.hp75,.hp167,.hp107').click(function(){
	$('.modal2').fadeIn();
});
$('.hp166,.hp167').click(function(){
	$('.hp165').fadeOut();
});
//маска телефона
$(".phone-mask").mask('Z0 (000) 000-00-000', {translation: {'Z': {pattern: /\+/, optional: true}}});
$(".phone-mask").focus(function(){
	if($(this).val()=='')
		$(this).val('+7 (');
});
//меню
attachMenuClicks();
$(window).on('resize', attachMenuClicks);
function attachMenuClicks(){
	$('.hp151').off('click');
	if (screen.width <= 640) {
		$('.hp151').click(function(e){
			e.preventDefault();
			$(this).toggleClass('active').next().slideToggle();
		});
	}
}
//поиск
$('.hp155').hover(function(){
	if (screen.width > 641){
		$('.hp153').css('width', '30rem').attr('placeholder', 'Найдите услугу по названию');
	}else{
		$('.hp153').css('width', '100%');
	}
}, function(){
	if (screen.width > 641) {
		$('.hp153').css('width', '3.5rem').removeAttr('placeholder');
	}else{
		$('.hp153').css('width', '100%');
	}
});
$('.hp154').click(function() {
	window.location = '/search/index.php?s=&q=' + $('.hp153').val().trim();
});
$('.hp153').keydown( function(e) {
	if (e.keyCode == 13) {
		$('.hp154').click();
	}
});
//карточка товара
$('.pa30').click(function(){
	$(this).siblings().removeClass('active').end().addClass('active');
});
function makeTabs(wrapper,btnSelector,tabSelector){
  $(wrapper).on('click',btnSelector,function(e){
    if($(this).is('.active')) return;
    var i = $(this).index(btnSelector);
    $(btnSelector+'.active').removeClass('active');
    $(tabSelector+'.active').removeClass('active');
    $(btnSelector).eq(i).addClass('active');
    $(tabSelector).eq(i).addClass('active');
  });
}
makeTabs('.pa32','.pa35','.pa36');

//Slider Syncing
$('.pa54').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.pa48'
});
$('.pa48').slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  asNavFor: '.pa54',
  vertical: true,
  focusOnSelect: true,
prevArrow: $('.pa49'),
nextArrow: $('.pa52')
});

//слайдер с товарами
//если поставить выше, то сломается responsive
$('.hp129').slick({
  dots:false,
  infinite:true,
  slidesToShow: 4,
  slidesToScroll: 1,
  /*mobileFirst:true, wtf*/
prevArrow: $('.hp128 .hp126 .fa-chevron-left'),
nextArrow: $('.hp128 .hp126 .fa-chevron-right'),   
  responsive: [
    {
      breakpoint: 640,
      settings: {
		slidesToShow: 2,
		slidesToScroll: 2,
		centerMode: false
      }
    }
  ]
});
//https://github.com/fancyapps/fancybox/issues/2078
//чтобы клик снаружи закрывал окно
$.fancybox.defaults.mobile = {};
