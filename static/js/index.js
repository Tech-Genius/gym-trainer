
$(document).ready(function(){
	$(".sm_screen_cntrl #open").on('click', function(){
        $(".sm_screen_cntrl #open").hide()
        $(".sm_screen_cntrl #close").fadeIn()
        $(".nav_item_wrapper").slideToggle()
		$(".nav_item_wrapper").css("display", "grid")
	
	  
	})
})


$(document).ready(function(){
	$(".sm_screen_cntrl #close").on('click', function(){
        $(".sm_screen_cntrl #close").hide()
        $(".sm_screen_cntrl #open").fadeIn()
        $(".nav_item_wrapper").slideToggle()	  
	})
})