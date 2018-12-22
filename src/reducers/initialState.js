export default {
	felixiConfig: {
		"items": [
		  {
			"name": "personname",
			"label": "Person's Name",
			"type": "TextField"
		  },
		  {
			"name": "states",
			"label": "Person's state",
			"type": "DropDown",
			"values": [
			  "Karnataka",
			  "Kerala",
			  "Tamil Nadu"
			],
			"items": [
			  {
				"name": "personage",
				"label": "Person's Age",
				"type": "TextField"
			  },
			  {
				"name": "District",
				"label": "Person's district",
				"type": "DropDown",
				"values": [
				  "Bangalore",
				  "Tumukuru",
				  "Hassan"
				]
			  }
			]
		  }
		]
	  }
}