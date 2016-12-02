// Jelle Mul
// 11402148

// load data
d3.json("dataweek6.json", function(data) {
  // make date object of months
  var parseDate = d3.time.format("%Y%m%d");
  data.forEach(function(d) {
    // set strings to integers
    d.mintemp = +d.mintemp,
    d.maxtemp = +d.maxtemp,
    d.avgtemp = +d.avgtemp,
    d.date = parseDate.parse(d.date)
  });
  console.log(data);
});
