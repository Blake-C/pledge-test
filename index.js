;(function() {
	// Stats Counter
	var stats = document.getElementById('js-pledges-stats')
	var pledge_total_value = stats.dataset.current
	var pledge_total_value_int = parseInt(pledge_total_value)
	var start_value = 0

	setInterval(function() {
		if (start_value !== pledge_total_value_int) {
			start_value++
			stats.innerText = start_value.toLocaleString('en-IN')
		}
	}, 4)

	// Pledge Bars
	var bar_graph = document.querySelectorAll('.js-leaderboard__bar-graph')
	var bar_graph_array = Array.prototype.slice.call(bar_graph)

	bar_graph_array.map(function(element) {
		var pledge_amount = element.dataset.pledge
		var pledge_amount_int = parseInt(pledge_amount)

		setTimeout(function() {
			element.style.width = pledge_amount_int + 'px'
		}, 100)
	})
})()
