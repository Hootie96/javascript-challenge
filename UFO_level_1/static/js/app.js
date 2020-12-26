// from data.js
var tableData = data;

// YOUR CODE HERE!

// Tell js to make columns for queries

var $tbody = d3.select("tbody");
var button = d3.select("#filter-btn");
var inputFieldData = d3.select("#datetime");
var inputFieldCity = d3.select("#city");
var columns = ["datetime", "city", "state", "country", "shape", "durationMinutes", "comments"];

// Put the table data into HTML

var addData = (dataInput) => {
    dataInput.forEach(ufoSightings => {
        var row = $tbody.append("tr");
        columns.forEach(column => row.append("td").text(ufoSightings[column])
        )
    });
}

addData(tableData);

button.on("click", () => {
    d3.event.preventDefault();

});







