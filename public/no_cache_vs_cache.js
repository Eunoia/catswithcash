console.time('not caching');
var networths = 0;
for(var i = 0; i<$("[data-networth]").length;i++){
	var networth = $("[data-networth]").eq(i).data("networth")
	networths += parseInt(networth)
}
console.timeEnd('not caching')


console.time('calculate w/ cached');
var networths = 0;
var elements = $("[data-networth]")
var networth;
for(var i = 0; i<elements.length;i++){
	networths += parseInt(elements.eq(i).data("networth"))
}
console.timeEnd('calculate w/ cached')




