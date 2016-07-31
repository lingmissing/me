$(function() {

	$('#submit').on('click',function(){
		var emailData = $(this).closest('form').serialize();
		window.location.href = 'mailto:1227046827@qq.com?subject='+ emailData.budget +'：'+ emailData.subject +'&body=' + emailData.body;
		console.log('mailto:1227046827@qq.com?subject='+ emailData.budget +'：'+ emailData.subject +'&body=' + emailData.body);
	});

	// $('.project-slider').bxSlider({
 //        auto: true,
 //        autoControls: false,
 //        pager: false,
 //        autoHover: true
 //    });

      $('.project-slider').bxSlider({
    slideWidth: 300,
    minSlides: 2,
    maxSlides: 3,
    moveSlides: 1,
    slideMargin: 10
  });
}); 
