$( document ).ready(function() {
	// hide our element on page load
  $('.test').css('opacity', 0);
 
  $('.test').waypoint(function() {
      $('.test').addClass('fadeInLeft');
  }, { offset: '40%' });
 

    
});