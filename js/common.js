$(function(){
	
	$('#toggle_btn').on('click',function(e){
		e.preventDefault();
		if($(this).attr('class')=='active'){
			$(this).removeClass('active');
			$('#border').addClass('active').fadeOut(1000);
			$('#footer').addClass('active').fadeOut(1000);
			$(this).find('span').removeClass('btn_g');			$('.title').attr('src',$('.title_w').attr('src').replace('_w','_b'));
		}else{
			$(this).addClass('active');
			$('#border').removeClass('active').fadeIn(1000);
			$('#footer').removeClass('active').fadeIn(1000);
			$(this).find('span').addClass('btn_g');			$('.title').attr('src',$('.title_b').attr('src').replace('_b','_w'));
		}
	});
	
});