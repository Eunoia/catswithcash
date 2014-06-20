
$("#cards").on("click",".order_tickets",function(){
	var $this = $(this);
	var name = $this.parents(".card").find(".name").text().trim();
	order_tickets(name);
})

$("#cards").on("click",".call_them",function(){
	var $this = $(this);
	var name = $this.parents(".card").find(".name").text().trim();
	call_them(name);
})

$("#cards").on("click",".send_gift",function(){
	var $this = $(this);
	var name = $this.parents(".card").find(".name").text().trim();
	send_gift(name);
})

$("#cards").on("click",".send_email",function(){
	var $this = $(this);
	var name = $this.parents(".card").find(".name").text().trim();
	send_email(name);
})

$("#cards").on("click",".buy_lunch",function(){
	var $this = $(this);
	var donorid = $this.parents(".card").data("donorid")
	buy_lunch(donorid);
})

function order_tickets(name){
	alert("Your airplane to visit "+name+" is pulling up shortly")
}

function call_them(name){
	alert("Pick up your phone, "+name+" is calling.")
}

function send_gift(event){
	var target = 0.0011
	var $this = $(this)
	var $card = $this.parents(".card")
	var name =   $card.text()
	var networth  =  parseInt($card.data("networth"))
	var donations =  parseInt($card.data("donations"))
	var percent   =  ((networth/donations)*100).toFixed(4)
	var msg = target>percent ? "below" : "above"
	alert(name+"("+msg+" target) will appreciate the thoughtful gift you sent.")
}

function send_email(name){
	alert("Your perfectly worded email will be read by "+name+" shortly.")
}

function buy_lunch(donorID){
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