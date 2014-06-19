$.Isotope.prototype._getCenteredMasonryColumns = function() {

		this.width = this.element.width();

		var parentWidth = this.element.parent().width();

		var colW = this.options.masonry && this.options.masonry.columnWidth || // i.e. options.masonry && options.masonry.columnWidth

		this.$filteredAtoms.outerWidth(true) || // or use the size of the first item

		parentWidth; // if there's no items, use size of container

		var cols = Math.floor(parentWidth / colW);

		cols = Math.max(cols, 1);

		this.masonry.cols = cols; // i.e. this.masonry.cols = ....
		this.masonry.columnWidth = colW; // i.e. this.masonry.columnWidth = ...
};
$.Isotope.prototype._masonryReset = function() {

		this.masonry = {}; // layout-specific props
		this._getCenteredMasonryColumns(); // FIXME shouldn't have to call this again

		var i = this.masonry.cols;

		this.masonry.colYs = [];
				while (i--) {
				this.masonry.colYs.push(0);
		}
};
$.Isotope.prototype._masonryResizeChanged = function() {

		var prevColCount = this.masonry.cols;

		this._getCenteredMasonryColumns(); // get updated colCount
		return (this.masonry.cols !== prevColCount);
};
$.Isotope.prototype._masonryGetContainerSize = function() {

		var unusedCols = 0,

		i = this.masonry.cols;
				while (--i) { // count unused columns
				if (this.masonry.colYs[i] !== 0) {
						break;
				}
				unusedCols++;
		}

		return {
				height: Math.max.apply(Math, this.masonry.colYs),
				width: (this.masonry.cols - unusedCols) * this.masonry.columnWidth // fit container to columns that have been used;
		};
};

function onlyOneButtonGlows(button){
	var $button = $(button)
	$button.parent().find(".btn-primary").removeClass("btn-primary")
	$button.addClass("btn-primary");
}

function supriseCat(){
	var $cat = $('<div data-donations="342" data-networth="28530237" data-legacy="yes" id="donor76" class="card no_kittens"><img class="cat" height="176" src="tumblr_n0wtj2VEbD1qgn992o1_500.jpg"><p class="name">Jean</p><p class="stats"><span class="hidden">yes</span>Donations $ 342<br>Net Worth $ 28,530,237</p><p class="actions"></p><div class="btn btn-default glyphicon glyphicon-plane" onclick="order_tickets76()" id="order_tickets"><script>function order_tickets76(){alert("Your airplane to visit Jean is pulling up shortly")}</script><div class="hidden">76</div></div><div class="btn btn-default glyphicon glyphicon-phone-alt" onclick="call_them76()" id="call_them"><script>function call_them76(){alert("Pick up your phone, Jean is calling.")}</script><div class="hidden">76</div></div><div class="btn btn-default glyphicon glyphicon-gift send_gift" id="send_gift76"><div class="hidden">Jean</div></div><div class="btn btn-default glyphicon glyphicon-send" onclick="send_email76()" id="send_email"><script>function send_email76(){alert("Your perfectly worded email will be read by Jean shortly.")}</script></div><div class="btn btn-default glyphicon glyphicon-cutlery buy_lunch" onclick="buy_lunch76()" id="buy_lunch"><script>function buy_lunch76(){$.ajax({url: "/work",type: "POST",data: { action: "buy_lunch", donor: "76" },async: false,success: function(response){alert(response)}})}</script><div class="hidden">76</div></div><p></p></div>')
	$cat.appendTo($container)
	$container.isotope('appended',$cat)
}
$container = $(".cards")
$container.isotope({
	itemSelector: '.card',
	layoutMode: 'masonry',
	animationEngine: 'jquery',
	// transitionDuration: '1s',
	getSortData: {
		netWorth: function(itemElem){
			return parseFloat(itemElem.data("networth"));
		},
		donations: function(itemElem){
			return parseFloat(itemElem.data("donations"));
		}
	}
});
$("#kittens_filter").click(function(){
	$container.isotope({ filter: '.has_kittens' });
	onlyOneButtonGlows(this)
})
$("#legacy_filter").click(function(){
	$container.isotope({ filter: '[data-legacy=yes]' });
	onlyOneButtonGlows(this)
})
$("#notDonated_filter").click(function(){
	$container.isotope({ filter: '[data-donations=0]' });
	onlyOneButtonGlows(this)
})
$("#largeDonor_filter").click(function(){
	var donations = 0
	$("[data-donations]").map(function(r){ 
		return donations += parseFloat($(this).data("donations")) 
	})
	avarage = donations / 25.0;

	$container.isotope({ filter: function(){
		var d = parseFloat(this.getAttribute('data-donations'))
		return d*5>avarage
	}	});
	onlyOneButtonGlows(this)
})
$("#clear_filter").click(function(){
	$container.isotope({ filter: '*' });
	$(".filters .btn-primary").removeClass("btn-primary")
})
$("#clear_sort").click(function(){
	$(".sorts .btn-primary").removeClass("btn-primary")
	$container.isotope({ sortBy : 'original-order', });
})
$("#netWorth_sort").click(function(){
	$(".sorts .btn-primary").removeClass("btn-primary")
	$container.isotope({ sortBy : 'networth', sortAscending: false });
	onlyOneButtonGlows(this)
})
$("#donations_sort").click(function(){
	onlyOneButtonGlows(this)
	$container.isotope({ sortBy : 'donations',sortAscending: false });
})

