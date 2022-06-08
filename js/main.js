$(document).ready(function(){
	$(".toggle").click(function(){
		$(".nav").slideToggle('normal');
	});
});
// Dialog box
 function showDialog() {
      document.getElementById("overlay").style.display = "block";
      document.getElementById("dialog").style.display = "block";
    }

    function hideDialog() {
      document.getElementById("overlay").style.display = "none";
      document.getElementById("dialog").style.display = "none";
    }
   