(function($) {
	"use strict";

	// Button Sidebar Handler
	$('.sidebar-toggler[data-place="navbar"], .sidebar-toggler[data-place="sidebar"]').click(function() {
		$('body').toggleClass( 'toggled' );
	});

	setInterval(function() {
		$('.collapse').on('hidden.bs.collapse', function (s) {
		  	// do something…
		  	console.log(s);
		});
	}, 100);

	// Chart Demo
	var ctx = document.getElementById('myChart').getContext('2d');
	var myChart = new Chart(ctx, {
	    type: 'line',
	    options: {
	        legend: {
	            display: false,
	        },
	        scales: {
	            xAxes: [{
	                gridLines: {
	                    drawBorder: false,
	                    display: false,
	                },
	                ticks: {
	                    fontSize: 15,
	                    fontColor: 'lightgrey'
	                }
	            }],
	            yAxes: [{
	                gridLines: {
	                    display: false,
	                    drawBorder: false,
	                },
	                ticks: {
	                    beginAtZero: true,
	                    fontSize: 15,
	                    fontColor: 'lightgrey',
	                    maxTicksLimit: 5,
	                    padding: 25,
	                }
	            }]
	        },
	        tooltips: {
	            backgroundColor: 'rgb(255,190,70)',
	        }
	    },
	    data: {
	        labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
	        datasets: [{
	            data: [0, 15, 0, 12, 500, 170, 180, 15, 13, 17, 0, 5],
	            tension: 0.0,
	            borderColor: 'rgb(255,190,70)',
	            backgroundColor: 'rgba(0,0,0,0.0)',
	            pointBackgroundColor: ['white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white'],
	            pointRadius: 4,
	            borderWidth: 2
	        }]
	    }
	});

})(jQuery);