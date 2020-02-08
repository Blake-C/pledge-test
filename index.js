})()
;(function() {
	// Stats Counter
	var stats = document.getElementById('js-pledges-stats')
	var end_value = stats.dataset.current
	var end_value_int = parseInt(end_value)
	var start_value = 0

	setInterval(function() {
		if (start_value !== end_value_int) {
			start_value++
			stats.innerText = start_value.toLocaleString('en-IN')
		}
	}, 4)

