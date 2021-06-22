(function () {
    var myConnector = tableau.makeConnector();
	
	myConnector.getSchema = function (schemaCallback) {
		var cols = [{
			id: "id",
			dataType: tableau.dataTypeEnum.string
		}, {
			id: "comp",
			alias: "company",
			dataType: tableau.dataTypeEnum.string
		}, {
			id: "source",
			alias: "source",
			dataType: tableau.dataTypeEnum.string
		}];

		var tableSchema = {
			id: "affinityFeed",
			alias: "Affinity company and source information",
			columns: cols
		};

		schemaCallback([tableSchema]);
	};

    myConnector.getData = function(table, doneCallback) {
		tableau.log("before api call");
		$.ajax({
		  url: "https://localhost:8889/api.affinity.co/lists/17698 -u :D1nyzaYdi7LPRNCfOL9aHArKhUibuwSNR3Zi7YAcxOM",
		  context: document.body
		}).done(function() {
		  
		//$.getJSON("https://localhost:8889/api.affinity.co/lists/17698 -u :D1nyzaYdi7LPRNCfOL9aHArKhUibuwSNR3Zi7YAcxOM", function(resp) {
			tableau.log("made api call");
			var feat = context.features,
				tableData = [];

			// Iterate over the JSON object
			for (var i = 0, len = feat.length; i < len; i++) {
				tableau.log("got things from api call");
				tableData.push({
					"id": feat[i].id,
					"comp": feat[i].properties.company,
					"source": feat[i].properties.source
				});
			}

			table.appendRows(tableData);
			doneCallback();
			
		});
	};

    tableau.registerConnector(myConnector);
	
	
	$(document).ready(function () {
		$("#submitButton").click(function () {
			tableau.connectionName = "Affinity Feed";
			tableau.submit();
		});
	});
	
	
})();
