<template>
  <div class="graph-wrapper">
    <svg class="chart"></svg>
  </div>
</template>

<script>
// import { scaleBand, scaleLinear } from 'd3-scale';
// import { tsvParse } from 'd3-dsv';
// import { max } from 'd3-array';
// import { axisBottom, axisLeft } from 'd3-axis';
// import { select } from 'd3-selection';
import * as d3 from 'd3'
import chart from '@/static/chart.js'

export default {
  mounted () {
    var width = 960,
    height = 500;

    var y = d3.scale.linear()
        .range([height, 0]);

    var chart = d3.select(".chart")
        .attr("width", width)
        .attr("height", height);

    var data = [
      {name: "Locke",    value:  4},
      {name: "Reyes",    value:  8},
      {name: "Ford",     value: 15},
      {name: "Jarrah",   value: 16},
      {name: "Shephard", value: 23},
      {name: "Kwon",     value: 42}
    ];

    y.domain([0, d3.max(data, function(d) { return d.value; })]);

    var barWidth = width / data.length;

    var bar = chart.selectAll("g")
        .data(data)
      .enter().append("g")
        .attr("transform", function(d, i) { return "translate(" + i * barWidth + ",0)"; });

    bar.append("rect")
        .attr("y", function(d) { return y(d.value); })
        .attr("height", function(d) { return height - y(d.value); })
        .attr("width", barWidth - 1);

    bar.append("text")
        .attr("x", barWidth / 2)
        .attr("y", function(d) { return y(d.value) + 3; })
        .attr("dy", ".75em")
        .text(function(d) { return d.value; });

    function type(d) {
      d.value = +d.value; // coerce to number
      return d;
    }
  }
}
</script>

<style>
.chart rect {
  fill: steelblue;
}

.chart text {
  fill: white;
  font: 10px sans-serif;
  text-anchor: middle;
}
</style>
