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
	onlyOneButtonGlows(this)
})
$("#donations_sort").click(function(){
	onlyOneButtonGlows(this)
	$container.isotope({ sortBy : 'donations',sortAscending: false });
})