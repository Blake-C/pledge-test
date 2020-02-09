;(function() {
	// Stats Counter
	var stats = document.getElementById('js-pledges-stats')
	var pledge_total_value = stats.dataset.current
	var pledge_total_value_int = parseInt(pledge_total_value)
	var start_value = 0

	var stats_interval = setInterval(function() {
		if (start_value !== pledge_total_value_int) {
			start_value++
			stats.innerText = start_value.toLocaleString('en-IN')
		} else {
			clearInterval(stats_interval)
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

	// Checkbox
	var checkboxes = document.querySelectorAll('.js_checkbox')
	var checkboxes_array = Array.prototype.slice.call(checkboxes)

	checkboxes_array.map(function(element) {
		element.addEventListener('click', function() {
			var real_checkbox = element.querySelector('input[type="checkbox"]')

			element.classList.toggle('checked')
			real_checkbox.checked = real_checkbox.checked ? false : true
		})
	})

	// Select list initial color
	var select_list = document.querySelectorAll('.js-district-select')
	var select_list = Array.prototype.slice.call(select_list)

	select_list.map(function(element) {
		if (element.classList.contains('clicked')) {
			return
		}

		element.addEventListener('focus', function() {
			console.log('here')
			element.classList.add('clicked')
		})
	})
})()
