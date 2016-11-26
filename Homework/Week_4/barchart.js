// Jelle Mul
// 11402148


// add margins to svg element
var margin = {top: 40, right: 30, bottom: 30, left: 60},
    width = 960 - margin.left - margin.right,
    height = 400 - margin.top - margin.bottom;

// introduce chart element with d3
var chart = d3.select(".chart")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
    .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

// load data into chart
d3.json("data.json", function(data) {
  // make date object of months
  var parseDate = d3.time.format("%Y%m");
  data.forEach(function(d) {
    d.month = parseDate.parse(d.month);
  });

  // scale y values to height of the graph
  var y = d3.scale.linear()
    .range([height, 0])
    .domain([0, 250]);

  // introduce y axis
  var yAxis = d3.svg.axis()
      .scale(y)
      .ticks(7, "s")
      .orient("left");

  // scale x values oridnal because non lineair
  var x = d3.scale.ordinal()
      .domain(data.map(function(d) {
          return d.month;
      }))
      .rangeRoundBands([0, width], 0.1);

  // introduce x axis
  var xAxis = d3.svg.axis()
      .scale(x)
      .tickFormat(d3.time.format('%b %Y'))
      .orient("bottom");

  // introduce tip
  var tip = d3.tip()
      .attr('class', 'd3-tip')
      .offset([-5, 0])
      .html(function(d) {
        return "<strong>Temperature:</strong> <span style='color:white'>" + d.temp + "</span>";
      })

  var barWidth = width / data.length;

  // append g element for all datapoints
  var bar = chart.selectAll("g")
      .data(data)
    .enter().append("g")
      .attr("transform", function(d, i) { return "translate(" + i * barWidth + ",0)"; });

  // add invisible tip to datapoint
  bar.call(tip);

  // add x axis
  chart.append("g")
    .attr("class", "x axis")
    .attr("transform", "translate(0," + height + ")")
    .call(xAxis);

  // add y axis
  chart.append("g")
      .attr("class", "y axis")
      .call(yAxis);

  // add bars to chart
  bar.append("rect")
    .attr("class", "rect")
    .attr("y", function(d) { return y(d.temp); })
    .attr("height", function(d) { return height - y(d.temp); })
    .attr("width", barWidth - 3)
    // show tip when hovered over data
    .on('mouseover', tip.show)
    .on('mouseout', tip.hide)
    .attr("fill", function(d) {
      return "rgb(0, 0, " + d.temp + ")";
    });;

  // add y axis label
  chart.append("text")
      .attr("class", "text")
      .attr("transform", "rotate(-90)")
      .attr("y", 0 - margin.left)
      .attr("x",0 - (height / 2))
      .attr("dy", "1em")
      .text("Temperature in 0.1 degrees celsius");

    // add title
    chart.append("text")
        .attr("class", "title")
        .attr("x", (width / 2))
        .attr("y", 0 - (margin.top / 2))
        .text("Average monthly temperature in The Bilt");
});
