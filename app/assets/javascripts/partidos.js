$(document).ready(function(){

	$(".marcadoruser1").on("change",function(){
		var local = $(".marcadorlocal").val();
		var visitante = $(".marcadorvisitante").val();
		var monto = $("#bet_monto").val();

		var veces = $(".local"+local+"visitante"+visitante).data(monto);
		
		$(".cifrasapuestas").text(veces *monto);

	});
	$("#bet_monto").on("change",function(){
		var local = $(".marcadorlocal").val();
		var visitante = $(".marcadorvisitante").val();
		var monto = $("#bet_monto").val();

		var veces = $(".local"+local+"visitante"+visitante).data(monto);

		$(".cifrasapuestas").text(veces * monto);
		$("#cifrasapuestasminimo").text(monto *2);

	});
	$(".linkreglasGolazzos").on("click", function(event){
		event.preventDefault();
		$(".reglasGolazzos").fadeToggle();
	});

	$("input[name=agree]").on("change", function(){
		$(".botonfacebook").show();
		$(".terminosycondiciones").hide();
	});

	$("input[name=dinero]").on("click", function(){
  	 alert("Todavia no hemos lanzado la version paga de Golazzos. PROXIMAMENTE. :)");
  });
});