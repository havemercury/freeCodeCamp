function drawBarChart(dataset) {
  const margin = {
      top: 20,
      right: 50,
      bottom: 50,
      left: 100,
    },
    width = 860,
    height = 400;

  const minDate = d3.min(dataset, (d) => d[0]);
  const maxDate = d3.max(dataset, (d) => d[0]);
  const xAxisScale = d3
    .scaleTime()
    .domain([new Date(minDate), new Date(maxDate)])
    .range([0, width]);

  const yAxisScale = d3
    .scaleLinear()
    .domain([0, d3.max(dataset, (d) => d[1])])
    .range([height, 0]);

  const xAxis = d3.axisBottom(xAxisScale);
  const yAxis = d3.axisLeft(yAxisScale);

  const tooltip = d3
    .select('body')
    .append('div')
    .attr('id', 'tooltip')
    .attr('class', 'tooltip')
    .style('opacity', 0);

  const svg = d3
    .select('#bar-graph')
    .append('svg')
    .attr('width', width + margin.left + margin.right)
    .attr('height', height + margin.top + margin.bottom)
    .attr('class', 'graph-svg-component')
    .append('g')
    .attr('transform', `translate(${margin.left}, ${margin.top})`);

  svg
    .selectAll('bar')
    .data(dataset)
    .enter()
    .append('rect')
    .attr('class', 'bar')
    .attr('data-date', (d) => d[0])
    .attr('data-gdp', (d) => d[1])
    .attr('x', (d, i) => (i * width) / dataset.length)
    .attr('y', (d) => yAxisScale(d[1]))
    .attr('width', width / dataset.length)
    .attr('height', (d) => height - yAxisScale(d[1]))
    .on('mouseover', (d, i) => {
      tooltip.transition().duration(200).style('opacity', 0.9);
      tooltip
        .html(
          `<strong>Quarter:</strong> ${d[0]} <br> <strong>Amount (Billions):</strong> $${d[1]}`
        )
        .attr('data-date', dataset[i][0])
        .style('left', `${d3.event.pageX + 5}px`)
        .style('top', `${d3.event.pageY}px`);
    })
    .on('mouseout', (d) => {
      tooltip.transition().duration(200).style('opacity', 0);
    });

  svg
    .append('text')
    .attr('class', 'axis-label')
    .attr('transform', 'rotate(-90)')
    .attr('x', -260)
    .attr('y', -55)
    .text('Amount (Billions)');

  svg
    .append('text')
    .attr('x', width / 2 - 65)
    .attr('y', height + 45)
    .text('Date (Quarter)');

  svg
    .append('g')
    .attr('id', 'x-axis')
    .attr('class', 'axis')
    .attr('transform', `translate(0, ${height})`)
    .call(xAxis);

  svg.append('g').attr('id', 'y-axis').attr('class', 'axis').call(yAxis);
}

d3.json(
  'https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/GDP-data.json'
).then((gdpData) => {
  const dataset = gdpData.data;
  drawBarChart(dataset);
});
