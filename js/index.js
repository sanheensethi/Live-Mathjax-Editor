$(document).ready(function(){
 	$('#math').on('keyup',function(){
 	 setTimeout(explode, 2);
 	});
 	
 	function explode()
 	{
 	var math  = $('#math').val();
   
 		$.ajax({
 			url:'file.php',
 			type:'POST',
 			data:{'math':math},
 			success:function(data){
 			$('#show').html(data);
 			}
 		});
   }
 });
		function htmlcopy(){
			$('#math').select();
			if(document.execCommand('copy')){
				alert('Copied');
			}else{
				alert('Not Copied');
			}
			
		}
		function htmlclear(){
			$('#math').val('');
		}