var flag = 0;
$(document).ready(function(){
	$("#submit-btn").click(function(){
		$("#hyd-image").removeClass("hidden");
	});

	$("#facilities-btn").click(function(){
		$("#facilities-div").removeClass("hidden");
		$("#menu-div").addClass("hidden");
		$("#order-div").addClass("hidden");
		$("#no-order-div").addClass("hidden");
	});
	
	$("#menu-btn").click(function(){
		$("#facilities-div").addClass("hidden");
		$("#menu-div").removeClass("hidden");
		$("#order-div").addClass("hidden");
		$("#no-order-div").addClass("hidden");
	});
	
	$("#order-btn").click(function(){
		$("#facilities-div").addClass("hidden");
		$("#menu-div").addClass("hidden");
		if(flag == 0){
			$("#no-order-div").removeClass("hidden");
		} else{
			$("#order-div").removeClass("hidden");
		}
	});
	
	$('.content').load('order.txt');
	
	$("#orders-btn").click(function(){
		placeOrder();
		$("#facilities-div").addClass("hidden");
		$("#menu-div").addClass("hidden");
		if(flag == 0){
			$("#no-order-div").removeClass("hidden");
		} else{
			$("#order-div").removeClass("hidden");
		}
	});
});

var placeOrder = function(){
	var total = 0;
	if($("#VegBiryani").val() != 0){
		var pr = $("#VegBiryani").val() * 150;
		total += pr;
		$("#vb").show();
		$("#vb-q").html($("#VegBiryani").val());
		$("#vb-price").html("Rs " + pr +  ".00/-");
		flag = 1;
	}else{
		$("#vb").hide();
	}
	
	if($("#EggBiryani").val() != 0){
		var pr = $("#EggBiryani").val() * 170;
		total += pr;
		$("#eb").show();
		$("#eb-q").html($("#EggBiryani").val());
		$("#eb-price").html("Rs " + pr +  ".00/-");
		flag = 1;
	}else{
		$("#eb").hide();
	}
	
	if($("#ChickenBiryani").val() != 0){
		var pr = $("#ChickenBiryani").val() * 200;
		total += pr;
		$("#cb").show();
		$("#cb-q").html($("#ChickenBiryani").val());
		$("#cb-price").html("Rs " + pr +  ".00/-");
		flag = 1;
	}else{
		$("#cb").hide();
	}
	
	if($("#MealsSouth").val() != 0){
		var pr = $("#MealsSouth").val() * 100;
		total += pr;
		$("#me-s").show();
		$("#me-s-q").html($("#MealsSouth").val());
		$("#me-s-price").html("Rs " + pr +  ".00/-");
		flag = 1;
	}else{
		$("#me-s").hide();
	}
	
	if($("#Roti").val() != 0){
		var pr = $("#Roti").val() * 15;
		total += pr;
		$("#roti").show();
		$("#roti-q").html($("#Roti").val());
		$("#roti-price").html("Rs " + pr +  ".00/-");
		flag = 1;
	}else{
		$("#roti").hide();
	}
	
	if($("#KadaiPaneer").val() != 0){
		var pr = $("#KadaiPaneer").val() * 120;
		total += pr;
		$("#kp").show();
		$("#kp-q").html($("#KadaiPaneer").val());
		$("#kp-price").html("Rs " + pr +  ".00/-");
		flag = 1;
	}else{
		$("#kp").hide();
	}
	
	if($("#PalakPaneer").val() != 0){
		var pr = $("#PalakPaneer").val() * 140;
		total += pr;
		$("#pp").show();
		$("#pp-q").html($("#PalakPaneer").val());
		$("#pp-price").html("Rs " + pr +  ".00/-");
		flag = 1;
	}else{
		$("#pp").hide();
	}
	
	if($("#MealsNorth").val() != 0){
		var pr = $("#MealsNorth").val() * 100;
		total += pr;
		$("#me-n").show();
		$("#me-q").html($("#MealsNorth").val());
		$("#me-price").html("Rs " + pr +  ".00/-");
		flag = 1;
	}else{
		$("#me-n").hide();
	}
	
	if($("#Noodles").val() != 0){
		var pr = $("#Noodles").val() * 120;
		total += pr;
		$("#noo").show();
		$("#noo-q").html($("#Noodles").val());
		$("#noo-price").html("Rs " + pr +  ".00/-");
		flag = 1;
	}else{
		$("#noo").hide();
	}
	
	if($("#FriedRice").val() != 0){
		var pr = $("#FriedRice").val() * 120;
		total += pr;
		$("#fr").show();
		$("#fr-q").html($("#FriedRice").val());
		$("#fr-price").html("Rs " + pr +  ".00/-");
		flag = 1;
	}else{
		$("#fr").hide();
	}
	
	if($("#GobiMachurian").val() != 0){
		var pr = $("#GobiMachurian").val() * 140;
		total += pr;
		$("#gm").show();
		$("#gm-q").html($("#GobiMachurian").val());
		$("#gm-price").html("Rs " + pr +  ".00/-");
		flag = 1;
	}else{
		$("#gm").hide();
	}	
	
	$("#total-price").html("Your total - Rs " + total +  ".00/-");
};

function validateForms() {

	var y = document.forms["orderForm"]["name"].value;
    if (y == null || y == "") {
        alert("name must be filled out");
        return false;
    }
    var x = document.forms["orderForm"]["email"].value;
    if (x == null || x == "") {
        alert("email must be filled out");
        return false;
    }


    var z = document.forms["orderForm"]["address"].value;
    if (z == null || z == "") {
        alert("address must be filled out");
        return false;
    }
}
