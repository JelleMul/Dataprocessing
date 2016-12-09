// Jelle Mul
// 11402148

// load data
var	margin = {top: 50, right: 100, bottom: 70, left: 50},
	width = 960 - margin.left - margin.right,
	height = 500 - margin.top - margin.bottom;

var	svg = d3.select("body")
	.append("svg")
		.attr("width", width + margin.left + margin.right)
		.attr("height", height + margin.top + margin.bottom)
	.append("g")
		.attr("transform", "translate(" + margin.left + "," + margin.top + ")");

var x = d3.time.scale()
    .rangeRound([0, width]);

var format = d3.time.format("%m/%d/%Y");

var bisectDate = d3.bisector(function(d) { return d.date; }).left;

var y = d3.scale.linear()
    .rangeRound([height, 0]);

    // Define the axes
var	xAxis = d3.svg.axis().scale(x)
	.orient("bottom").ticks(20);

var	yAxis = d3.svg.axis().scale(y)
	.orient("left").ticks(5);

var line = d3.svg.line()
    .x(function(d) { return x(d.date); })
    .y(function(d) { return y(d.avgtemp); });

var line2 = d3.svg.line()
    .x(function(d) { return x(d.date); })
    .y(function(d) { return y(d.mintemp); });


d3.json("dataweek6.json", function(data) {
  // make date object of months
  var parseDate = d3.time.format("%Y%m%d");
  data.forEach(function(d) {
    // set strings to integers
		if (d.location === "260"){
			d.location = "De Bilt"
		}
		else if (d.location === "310"){
			d.location = "Vlissingen"
		}
		else {
			d.location = "Hoogeveen"
		}
    d.mintemp = +d.mintemp,
    d.maxtemp = +d.maxtemp,
    d.avgtemp = +d.avgtemp,
    d.date = parseDate.parse(d.date)
    });
  x.domain(d3.extent(data, function(d) { return d.date; }));
	y.domain([0, d3.max(data, function(d) { return d.avgtemp; })]);

  // Nest the entries by symbol
  var dataNest = d3.nest()
      .key(function(d) {return d.location;})
      .entries(data);

	var color = d3.scale.category10();   // set the colour scale

 	legendSpace = height/10; // spacing for the legend

  counter = 0
  // Loop through each symbol / key
  dataNest.forEach(function(d,i) {
      svg.append("path")
				.attr("class", "line")
				.style("stroke", function() { // Add the colours dynamically
						return d.color = color(d.key); })
				.attr("id", 'tag'+d.key.replace(/\s+/g, '')) // assign ID
				.attr("d", line(d.values))
      counter = counter + 1

			// Add the Legend
      svg.append("text")
          .attr("x", width + (margin.left/2))  // space legend
          .attr("y", 4 * legendSpace+i*legendSpace/2)
          .attr("class", "legend")    // style the legend
          .style("fill", function() { // Add the colours dynamically
              return d.color = color(d.key); })
          .on("click", function(){
              // Determine if current line is visible
              var active   = d.active ? false : true,
              newOpacity = active ? 0 : 1;
              // Hide or show the elements based on the ID
              d3.select("#tag"+d.key.replace(/\s+/g, ''))
                  .transition().duration(100)
                  .style("opacity", newOpacity);
              // Update whether or not the elements are active
              d.active = active;
              })
          .text(d.key);

  });
  // Add the X Axis
	svg.append("g")
		.attr("class", "x axis xaxis")
		.attr("transform", "translate(0," + height + ")")
		.call(xAxis);

	svg.selectAll(".xaxis text")  // select all the text elements for the xaxis
          .attr("transform", function(d) {
             return "translate(" + this.getBBox().height + "," + this.getBBox().height*1.5 + ")rotate(-45)";
         });


	// Add the Y Axis
	svg.append("g")
		.attr("class", "y axis")
		.call(yAxis);

	svg.append("text")
            .attr("text-anchor", "middle")  // this makes it easy to centre the text as the transform is applied to the anchor
            .attr("transform", "translate("+ (-40) +","+(height/2)+")rotate(-90)")  // text is drawn off the screen top left, move down and out and rotate
            .text("Temperature in 0.1 degrees celsius ");

	svg.append("text")
        .attr("x", (width / 2))
        .attr("y", 0 - (margin.top / 2))
        .attr("text-anchor", "middle")
        .style("font-size", "25px")
        .style("text-decoration", "underline")
        .text("Temperature in 2014 at The Bilt");

	var focus = svg.append("g")
      .attr("class", "focus")
      .style("display", "none");

  focus.append("circle")
      .attr("r", 4.5);

  focus.append("text")
      .attr("x", 9)
      .attr("dy", ".35em");

  svg.append("rect")
			.data(data)
      .attr("class", "overlay")
      .attr("width", width)
      .attr("height", height)
			.on("mouseover", function() { focus.style("display", null); })
      .on("mouseout", function() { focus.style("display", "none"); })
      .on("mousemove", mousemove);

  function mousemove() {
    var x0 = x.invert(d3.mouse(this)[0]),
        i = bisectDate(data, x0, 1),
        d0 = data[i - 1],
        d1 = data[i],
        d = x0 - d0.date > d1.date - x0 ? d1 : d0;
    focus.attr("transform", "translate(" + x(d.date) + "," + y(d.avgtemp) + ")");
    focus.select("text").text("max = " + d.maxtemp + ", avg = " + d.avgtemp + ", min = " + d.mintemp);
	}

  console.log(typeof(data))
  console.log(data);

});
