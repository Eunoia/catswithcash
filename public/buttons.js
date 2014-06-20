$(".send_gift").click(function(event){
	var target = 0.0011
	var $this = $(this)
	var name =   $this.children().text()
	var $card = $this.parents(".card")
	var networth  =  parseInt($card.data("networth"))
	var donations =  parseInt($card.data("donations"))
	var percent   =  ((networth/donations)*100).toFixed(4)
	var msg = target>percent ? "below" : "above"
	alert(name+"("+msg+" target) will appreciate the thoughtful gift you sent.")
})