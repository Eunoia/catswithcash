

function Card(){
	var order_tickets = function(name){
		alert("Your airplane to visit "+name+" is pulling up shortly")
	}

	var call_them = function(name){
		alert("Pick up your phone, "+name+" is calling.")
	}

	var send_gift = function(name, networth, donations){
		var target = 0.0011
		var percent   =  ((networth/donations)*100).toFixed(4)
		var msg = target>percent ? "below" : "above"
		alert(name+" ("+msg+" target) will appreciate the thoughtful gift you sent.")
	}

	var send_email = function(name){
		alert("Your perfectly worded email will be read by "+name+" shortly.")
	}

	var buy_lunch = function(donorID){
		$.ajax({
			url: "/work",
			type: "POST",
			data: { action: "buy_lunch", donor: donorID },
			async: false,
			success: function(response){
				alert(response)
			}
		})
	}
	return {
		init: function(selector){
			$(selector).on("click",".order_tickets",function(){
				var $this = $(this);
				var name = $this.parents(".card").find(".name").text().trim();
				order_tickets(name);
			})
			.on("click",".call_them",function(){
				var $this = $(this);
				var name = $this.parents(".card").find(".name").text().trim();
				call_them(name);
			})
			.on("click",".send_gift",function(){
				var $this = $(this);
				var $card = $this.parents(".card")
				var name = $card.find(".name").text().trim();
				var networth  =  parseInt($card.data("networth"))
				var donations =  parseInt($card.data("donations"))
				send_gift(name, networth, donations);
			})
			.on("click",".send_email",function(){
				var $this = $(this);
				var name = $this.parents(".card").find(".name").text().trim();
				send_email(name);
			})
			.on("click",".buy_lunch",function(){
				var $this = $(this);
				var donorid = $this.parents(".card").data("donorid")
				buy_lunch(donorid);
			})
		}
	}
}


$(function(){
	card = new Card()
	card.init("#cards")
})
