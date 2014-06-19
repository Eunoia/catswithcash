$(".send_gift").click(function(event){
	var target = 0.0011
	var name = $(this).children().text()
	var networth  =  parseInt($(this).parent().find(".stats").text().replace(/,/g,"").match(/\d+/g)[0])
	var donations =  parseInt($(this).parent().find(".stats").text().replace(/,/g,"").match(/\d+/g)[1])
	var percent   =  ((networth/donations)*100).toFixed(4)
	var msg = target>percent ? "below" : "above"
	alert(name+"("+msg+" target) will appreciate the thoughtful gift you sent.")
})