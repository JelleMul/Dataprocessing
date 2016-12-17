var country_codes = [
  ["af", "AFG", "Afghanistan"],
  ["ax", "ALA", "Åland Islands"],
  ["al", "ALB", "Albania"],
  ["dz", "DZA", "Algeria"],
  ["as", "ASM", "American Samoa"],
  ["ad", "AND", "Andorra"],
  ["ao", "AGO", "Angola"],
  ["ai", "AIA", "Anguilla"],
  ["aq", "ATA", "Antarctica"],
  ["ag", "ATG", "Antigua and Barbuda"],
  ["ar", "ARG", "Argentina"],
  ["am", "ARM", "Armenia"],
  ["aw", "ABW", "Aruba"],
  ["au", "AUS", "Australia"],
  ["at", "AUT", "Austria"],
  ["az", "AZE", "Azerbaijan"],
  ["bs", "BHS", "Bahamas"],
  ["bh", "BHR", "Bahrain"],
  ["bd", "BGD", "Bangladesh"],
  ["bb", "BRB", "Barbados"],
  ["by", "BLR", "Belarus"],
  ["be", "BEL", "Belgium"],
  ["bz", "BLZ", "Belize"],
  ["bj", "BEN", "Benin"],
  ["bm", "BMU", "Bermuda"],
  ["bt", "BTN", "Bhutan"],
  ["bo", "BOL", "Bolivia"],
  ["bq", "BES", "Bonaire, Sint Eustatius and Saba"],
  ["ba", "BIH", "Bosnia and Herzegovina"],
  ["bw", "BWA", "Botswana"],
  ["bv", "BVT", "Bouvet Island"],
  ["br", "BRA", "Brazil"],
  ["io", "IOT", "British Indian Ocean Territory"],
  ["bn", "BRN", "Brunei Darussalam"],
  ["bg", "BGR", "Bulgaria"],
  ["bf", "BFA", "Burkina Faso"],
  ["bi", "BDI", "Burundi"],
  ["kh", "KHM", "Cambodia"],
  ["cm", "CMR", "Cameroon"],
  ["ca", "CAN", "Canada"],
  ["cv", "CPV", "Cape Verde"],
  ["ky", "CYM", "Cayman Islands"],
  ["cf", "CAF", "Central African Republic"],
  ["td", "TCD", "Chad"],
  ["cl", "CHL", "Chile"],
  ["cnx", "CHN", "China"],
  ["cx", "CXR", "Christmas Island"],
  ["cc", "CCK", "Cocos (Keeling) Islands"],
  ["co", "COL", "Colombia"],
  ["km", "COM", "Comoros"],
  ["cg", "COG", "Republic of the Congo"],
  ["cd", "COD", "Democratic Republic of the Congo"],
  ["ck", "COK", "Cook Islands"],
  ["cr", "CRI", "Costa Rica"],
  ["ci", "CIV", "Ivory Coast"],
  ["hr", "HRV", "Croatia"],
  ["cu", "CUB", "Cuba"],
  ["cw", "CUW", "Curaçao"],
  ["cy", "CYP", "Cyprus"],
  ["cz", "CZE", "Czech Republic"],
  ["dk", "DNK", "Denmark"],
  ["dj", "DJI", "Djibouti"],
  ["dm", "DMA", "Dominica"],
  ["do", "DOM", "Dominican Republic"],
  ["ec", "ECU", "Ecuador"],
  ["eg", "EGY", "Egypt"],
  ["sv", "SLV", "El Salvador"],
  ["gq", "GNQ", "Equatorial Guinea"],
  ["er", "ERI", "Eritrea"],
  ["ee", "EST", "Estonia"],
  ["et", "ETH", "Ethiopia"],
  ["fk", "FLK", "Falkland Islands (Malvinas)"],
  ["fo", "FRO", "Faroe Islands"],
  ["fj", "FJI", "Fiji"],
  ["fi", "FIN", "Finland"],
  ["fr", "FRA", "France"],
  ["gf", "GUF", "French Guiana"],
  ["pf", "PYF", "French Polynesia"],
  ["tf", "ATF", "French Southern Territories"],
  ["ga", "GAB", "Gabon"],
  ["gm", "GMB", "Gambia"],
  ["ge", "GEO", "Georgia"],
  ["de", "DEU", "Germany"],
  ["gh", "GHA", "Ghana"],
  ["gi", "GIB", "Gibraltar"],
  ["gr", "GRC", "Greece"],
  ["gl", "GRL", "Greenland"],
  ["gd", "GRD", "Grenada"],
  ["gp", "GLP", "Guadeloupe"],
  ["gu", "GUM", "Guam"],
  ["gt", "GTM", "Guatemala"],
  ["gg", "GGY", "Guernsey"],
  ["gn", "GIN", "Guinea"],
  ["gw", "GNB", "Guinea-Bissau"],
  ["gy", "GUY", "Guyana"],
  ["ht", "HTI", "Haiti"],
  ["hm", "HMD", "Heard Island and McDonald Islands"],
  ["va", "VAT", "Holy See (Vatican City State)"],
  ["hn", "HND", "Honduras"],
  ["hk", "HKG", "Hong Kong"],
  ["hu", "HUN", "Hungary"],
  ["is", "ISL", "Iceland"],
  ["in", "IND", "India"],
  ["id", "IDN", "Indonesia"],
  ["ir", "IRN", "Iran"],
  ["iq", "IRQ", "Iraq"],
  ["ie", "IRL", "Ireland"],
  ["im", "IMN", "Isle of Man"],
  ["il", "ISR", "Israel"],
  ["it", "ITA", "Italy"],
  ["jm", "JAM", "Jamaica"],
  ["jp", "JPN", "Japan"],
  ["je", "JEY", "Jersey"],
  ["jo", "JOR", "Jordan"],
  ["kz", "KAZ", "Kazakhstan"],
  ["ke", "KEN", "Kenya"],
  ["ki", "KIR", "Kiribati"],
  ["kp", "PRK", "North Korea"],
  ["kr", "KOR", "South Korea"],
  ["kw", "KWT", "Kuwait"],
  ["kg", "KGZ", "Kyrgyzstan"],
  ["la", "LAO", "Laos"],
  ["lv", "LVA", "Latvia"],
  ["lb", "LBN", "Lebanon"],
  ["ls", "LSO", "Lesotho"],
  ["lr", "LBR", "Liberia"],
  ["ly", "LBY", "Libya"],
  ["li", "LIE", "Liechtenstein"],
  ["lt", "LTU", "Lithuania"],
  ["lu", "LUX", "Luxembourg"],
  ["mo", "MAC", "Macao"],
  ["mk", "MKD", "Macedonia"],
  ["mg", "MDG", "Madagascar"],
  ["mw", "MWI", "Malawi"],
  ["my", "MYS", "Malaysia"],
  ["mv", "MDV", "Maldives"],
  ["ml", "MLI", "Mali"],
  ["mt", "MLT", "Malta"],
  ["mh", "MHL", "Marshall Islands"],
  ["mq", "MTQ", "Martinique"],
  ["mr", "MRT", "Mauritania"],
  ["mu", "MUS", "Mauritius"],
  ["yt", "MYT", "Mayotte"],
  ["mx", "MEX", "Mexico"],
  ["fm", "FSM", "Micronesia, Federated States of"],
  ["md", "MDA", "Moldova"],
  ["mc", "MCO", "Monaco"],
  ["mn", "MNG", "Mongolia"],
  ["me", "MNE", "Montenegro"],
  ["ms", "MSR", "Montserrat"],
  ["ma", "MAR", "Morocco"],
  ["mz", "MOZ", "Mozambique"],
  ["mm", "MMR", "Myanmar"],
  ["na", "NAM", "Namibia"],
  ["nr", "NRU", "Nauru"],
  ["np", "NPL", "Nepal"],
  ["nl", "NLD", "Netherlands"],
  ["nc", "NCL", "New Caledonia"],
  ["nz", "NZL", "New Zealand"],
  ["ni", "NIC", "Nicaragua"],
  ["ne", "NER", "Niger"],
  ["ng", "NGA", "Nigeria"],
  ["nu", "NIU", "Niue"],
  ["nf", "NFK", "Norfolk Island"],
  ["mp", "MNP", "Northern Mariana Islands"],
  ["no", "NOR", "Norway"],
  ["om", "OMN", "Oman"],
  ["pk", "PAK", "Pakistan"],
  ["pw", "PLW", "Palau"],
  ["ps", "PSE", "Palestine, State of"],
  ["pa", "PAN", "Panama"],
  ["pg", "PNG", "Papua New Guinea"],
  ["py", "PRY", "Paraguay"],
  ["pe", "PER", "Peru"],
  ["ph", "PHL", "Philippines"],
  ["pn", "PCN", "Pitcairn"],
  ["pl", "POL", "Poland"],
  ["pt", "PRT", "Portugal"],
  ["pr", "PRI", "Puerto Rico"],
  ["qa", "QAT", "Qatar"],
  ["re", "REU", "Réunion"],
  ["ro", "ROU", "Romania"],
  ["ru", "RUS", "Russia"],
  ["rw", "RWA", "Rwanda"],
  ["bl", "BLM", "Saint Barthélemy"],
  ["sh", "SHN", "Saint Helena, Ascension and Tristan da Cunha"],
  ["kn", "KNA", "Saint Kitts and Nevis"],
  ["lc", "LCA", "Saint Lucia"],
  ["mf", "MAF", "Saint Martin (French part)"],
  ["pm", "SPM", "Saint Pierre and Miquelon"],
  ["vc", "VCT", "Saint Vincent and the Grenadines"],
  ["ws", "WSM", "Samoa"],
  ["sm", "SMR", "San Marino"],
  ["st", "STP", "Sao Tome and Principe"],
  ["sa", "SAU", "Saudi Arabia"],
  ["sn", "SEN", "Senegal"],
  ["rs", "SRB", "Serbia"],
  ["sc", "SYC", "Seychelles"],
  ["sl", "SLE", "Sierra Leone"],
  ["sg", "SGP", "Singapore"],
  ["sx", "SXM", "Sint Maarten (Dutch part)"],
  ["sk", "SVK", "Slovakia"],
  ["si", "SVN", "Slovenia"],
  ["sb", "SLB", "Solomon Islands"],
  ["so", "SOM", "Somalia"],
  ["za", "ZAF", "South Africa"],
  ["gs", "SGS", "South Georgia and the South Sandwich Islands"],
  ["ss", "SSD", "South Sudan"],
  ["es", "ESP", "Spain"],
  ["lk", "LKA", "Sri Lanka"],
  ["sd", "SDN", "Sudan"],
  ["sr", "SUR", "Suriname"],
  ["sj", "SJM", "Svalbard and Jan Mayen"],
  ["sz", "SWZ", "Swaziland"],
  ["se", "SWE", "Sweden"],
  ["ch", "CHE", "Switzerland"],
  ["sy", "SYR", "Syria"],
  ["tw", "TWN", "Taiwan"],
  ["tj", "TJK", "Tajikistan"],
  ["tz", "TZA", "Tanzania"],
  ["th", "THA", "Thailand"],
  ["tl", "TLS", "Timor-Leste"],
  ["tg", "TGO", "Togo"],
  ["tk", "TKL", "Tokelau"],
  ["to", "TON", "Tonga"],
  ["tt", "TTO", "Trinidad and Tobago"],
  ["tn", "TUN", "Tunisia"],
  ["tr", "TUR", "Turkey"],
  ["tm", "TKM", "Turkmenistan"],
  ["tc", "TCA", "Turks and Caicos Islands"],
  ["tv", "TUV", "Tuvalu"],
  ["ug", "UGA", "Uganda"],
  ["ua", "UKR", "Ukraine"],
  ["ae", "ARE", "United Arab Emirates"],
  ["gb", "GBR", "United Kingdom"],
  ["us", "USA", "United States"],
  ["um", "UMI", "United States Minor Outlying Islands"],
  ["uy", "URY", "Uruguay"],
  ["uz", "UZB", "Uzbekistan"],
  ["vu", "VUT", "Vanuatu"],
  ["ve", "VEN", "Venezuela"],
  ["vn", "VNM", "Vietnam"],
  ["vg", "VGB", "Virgin Islands, British"],
  ["vi", "VIR", "Virgin Islands, U.S."],
  ["wf", "WLF", "Wallis and Futuna"],
  ["eh", "ESH", "Western Sahara"],
  ["ye", "YEM", "Yemen"],
  ["zm", "ZMB", "Zambia"],
  ["zw", "ZWE", "Zimbabwe"]];

var dataset = {};


var paletteScale = d3.scale.linear()
        .domain([1,61])
        .range(["#ffffcc","#800026"]); // color brewer

d3.json("dataweek7.json", function(data) {
  // make date object of months
  data.forEach(function(d) {
    d.climate = +d.climate,
    d.purchasing = +d.purchasing,
    d.traffic = +d.traffic,
    d.cost = +d.cost,
    d.health = +d.health,
    d.rank = +d.rank,
    d.safety = +d.safety,
    d.property = +d.property,
    d.quality = +d.quality,
    d.pollution = +d.pollution
    for (i = 0; i < country_codes.length; i++) {
      if (d.country === country_codes[i][2]){
        d.country = country_codes[i][1]
      };
    };

    var iso = d.country,
      value1 = d.country,
      value2 = d.climate,
      value3 = d.purchasing,
      value4 = d.traffic,
      value5 = d.cost,
      value6 = d.health,
      value7 = d.rank,
      value8 = d.safety,
      value9 = d.property,
      value10 = d.quality,
      value11 = d.pollution;

    dataset[iso] = { country: value1, climate: value2, purchasing: value3, traffic: value4, cost: value5, health: value6, rank: value7, safety: value8, property: value9, quality: value10, pollution: value11, fillColor: paletteScale(value7) };
  });

  var margin = {top: 30, right: 10, bottom: 10, left: 10},
      width = 960 - margin.left - margin.right,
      height = 500 - margin.top - margin.bottom;

  var x = d3.scale.ordinal().rangePoints([0, width], 1),
      y = {},
      dragging = {};

  var line = d3.svg.line(),
      axis = d3.svg.axis().orient("left"),
      background,
      foreground;

  var svg = d3.select("body").append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
    .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

  d3.csv("data2week7.csv", function(error, dataset2) {
    x.domain(dimensions = d3.keys(dataset2[0]).filter(function(d) {
        return d != "country" && (y[d] = d3.scale.linear()
            .domain(d3.extent(dataset2, function(p) { return +p[d]; }))
            .range([height, 0]));
    }));

    // Add grey background lines for context.
    background = svg.append("g")
        .attr("class", "background")
      .selectAll("path")
        .data(dataset2)
      .enter().append("path")
        .attr("d", path);

    // Add blue foreground lines for focus.
    foreground = svg.append("g")
        .attr("class", "foreground")
      .selectAll("path")
        .data(dataset2)
      .enter().append("path")
        .attr("d", path);

    // Add a group element for each dimension.
    var g = svg.selectAll(".dimension")
        .data(dimensions)
      .enter().append("g")
        .attr("class", "dimension")
        .attr("transform", function(d) { return "translate(" + x(d) + ")"; })
        .call(d3.behavior.drag()
          .origin(function(d) { return {x: x(d)}; })
          .on("dragstart", function(d) {
            dragging[d] = x(d);
            background.attr("visibility", "hidden");
          })
          .on("drag", function(d) {
            dragging[d] = Math.min(width, Math.max(0, d3.event.x));
            foreground.attr("d", path);
            dimensions.sort(function(a, b) { return position(a) - position(b); });
            x.domain(dimensions);
            g.attr("transform", function(d) { return "translate(" + position(d) + ")"; })
          })
          .on("dragend", function(d) {
            delete dragging[d];
            transition(d3.select(this)).attr("transform", "translate(" + x(d) + ")");
            transition(foreground).attr("d", path);
            background
                .attr("d", path)
              .transition()
                .delay(500)
                .duration(0)
                .attr("visibility", null);
          }));

    // Add an axis and title.
    g.append("g")
        .attr("class", "axis")
        .each(function(d) { d3.select(this).call(axis.scale(y[d])); })
      .append("text")
        .style("text-anchor", "middle")
        .attr("y", -9)
        .text(function(d) { return d; });

    // Add and store a brush for each axis.
    g.append("g")
        .attr("class", "brush")
        .each(function(d) {
          d3.select(this).call(y[d].brush = d3.svg.brush().y(y[d]).on("brushstart", brushstart).on("brush", brush));
        })
      .selectAll("rect")
        .attr("x", -8)
        .attr("width", 16);
  });
  function position(d) {
    var v = dragging[d];
    return v == null ? x(d) : v;
  }

  function transition(g) {
    return g.transition().duration(500);
  }

  // Returns the path for a given data point.
  function path(d) {
    return line(dimensions.map(function(p) { return [position(p), y[p](d[p])]; }));
  }

  function brushstart() {
    d3.event.sourceEvent.stopPropagation();
  }

  // Handles a brush event, toggling the display of foreground lines.
  function brush() {
    var actives = dimensions.filter(function(p) { return !y[p].brush.empty(); }),
        extents = actives.map(function(p) { return y[p].brush.extent(); });
    foreground.style("display", function(d) {
      return actives.every(function(p, i) {
        return extents[i][0] <= d[p] && d[p] <= extents[i][1];
      }) ? null : "none";
    });
  }


  var map = new Datamap({
          element: document.getElementById('container'),
          projection: 'mercator', // big world map
          fills: {
            defaultFill: '#05F5F5',
            "rank 1": paletteScale(1),
            "rank 10": paletteScale(10),
            "rank 20": paletteScale(20),
            "rank 30": paletteScale(30),
            "rank 40": paletteScale(40),
            "rank 50": paletteScale(50),
            "rank 60": paletteScale(60)
            },
          data: dataset,
          geographyConfig: {
              borderColor: '#F5F5F5',
              highlightFillColor: function(geo) {
                  return geo['fillColor'] || '#05F5F5';
              },
              highlightBorderWidth: 2,
              // don't change color on mouse hover
              // only change border
              highlightBorderColor: '#000000', // black
              // show desired information in tooltip
              popupTemplate: function(geo, data) {
                  // show No data if country not present in dataset
                  if (!data) { return ['<div class="hoverinfo">',
                      '<strong>', geo.properties.name, '</strong>',
                      '<br><strong>No data</strong>',
                      '</div>'].join('');; }
                  // tooltip content
                  return ['<div class="hoverinfo">',
                      '<strong>', geo.properties.name, '</strong>',
                      // use addCommas for pretty printed data
                      '<br>Rank: <strong>', data.rank, '</strong>',
                      '</div>'].join('');
              }
        },
        done: function(datamap) {
        datamap.svg.selectAll('.datamaps-subunit').on('click', function(geography) {
            var country_id = geography.id;
            var fillkey_obj = datamap.options.data[country_id] || {fillKey: 'defaultFill'};
            var fillkey = fillkey_obj.fillKey;;
            var fillkeys = Object.keys("black");
            var antikey = fillkeys[Math.abs(fillkeys.indexOf(fillkey) - 1)];
            var new_fills = {
              [geography.id] : {
                fillKey: antikey
              }
            };
            datamap.updateChoropleth(new_fills);
            console.log(dataset[country_id])


        });
      }


  });


  map.legend({
      // graph title
      legendTitle : "Country ranking of Quality of life index",
      defaultFillName: "No data:",
  });




});
