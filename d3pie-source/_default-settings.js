// --------- _default-settings.js -----------/**
/**
 * Contains the out-the-box settings for the script. Any of these settings that aren't explicitly overridden for the
 * d3pie instance will inherit from these. This is also included on the main website for use in the generation script.
 */
var defaultSettings = {
	header: {
		title: {
			text:     "",
			color:    "#333333",
			fontSize: 18,
			font:     "arial"
		},
		subtitle: {
			text:     "",
			color:    "#666666",
			fontSize: 14,
			font:     "arial"
		},
		location: "top-center",
		titleSubtitlePadding: 8
	},
	footer: {
		text: 	  "",
		color:    "#666666",
		fontSize: 14,
		font:     "arial",
		location: "left"
	},
	size: {
		canvasHeight: 500,
		canvasWidth: 500,
		pieInnerRadius: "0%",
		pieOuterRadius: null
	},
	data: {
		sortOrder: "none",
		content: []
	},
	labels: {
		outer: {
			format: "label",
			hideWhenLessThanPercentage: null,
			pieDistance: 30
		},
		inner: {
			format: "percentage",
			hideWhenLessThanPercentage: null
		},
		mainLabel: {
			color: "#333333",
			font: "arial",
			fontSize: 10
		},
		percentage: {
			color: "#999999",
			font: "arial",
			fontSize: 10,
			decimalPlaces: 0
		},
		value: {
			color: "#cccc44",
			font: "arial",
			fontSize: 10
		},
		lines: {
			enabled: true,
			style: "curved",
			color: "segment"
		},
		truncation: {
			enabled: false,
			length: 30
		}
	},
	effects: {
		load: {
			effect: "default",
			speed: 1000
		},
		pullOutSegmentOnClick: {
			effect: "bounce",
			speed: 300,
			size: 10
		},
		highlightSegmentOnMouseover: true,
		highlightLuminosity: -0.2
	},
	misc: {
		colors: {
			background: null,
			segments: [
				// TODO - need 50 default colors (good ones!)
				"#98abc5", "#8a89a6", "#7b6888", "#6b486b", "#a05d56", "#d0743c", "#ff8c00", "#635222", "#00dd00"
			],
			segmentStroke: "#ffffff"
		},
		canvasPadding: {
			top: 5,
			right: 5,
			bottom: 5,
			left: 5
		},
		pieCenterOffset: {
			x: 0,
			y: 0
		},
		cssPrefix: null
	},
	callbacks: {
		onload: null,
		onMouseoverSegment: null,
		onMouseoutSegment: null,
		onClickSegment: null
	}
};
